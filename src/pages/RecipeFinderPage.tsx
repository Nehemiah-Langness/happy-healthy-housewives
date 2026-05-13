import { RecipeLink } from '../components/RecipeLink';
import { RecipesIntro } from '../components/RecipesIntro';
import { RecipeHeaderImage } from '../components/RecipeHeaderImage';
import { useEffect, useMemo, useState } from 'react';
import { recipeList } from '../services/recipe-list';
import { categories, type Category } from '../types/category';
import { type Ingredient, ingredients } from '../types/ingredients';

function getFromLocalStorage<T>(key: string) {
    try {
        const item = localStorage.getItem(key);
        return item ? (JSON.parse(item) as T) : null;
    } catch {
        return null;
    }
}

function useLocalStorage<T>(key: string) {
    const [state, setState] = useState(getFromLocalStorage<T>(key));
    useEffect(() => {
        if (state) {
            localStorage.setItem(key, JSON.stringify(state));
        } else {
            localStorage.setItem(key, '');
        }
    }, [state]);

    return [state, setState] as const;
}

export function RecipeFinderPage() {
    const [activeCategory, setActiveCategory] = useState<Category>(categories[0]);
    const [activeIngredients, setActiveIngredients] = useLocalStorage<Ingredient[]>('ingredients');

    const matchingRecipes = useMemo(() => {
        if (!activeIngredients?.length) return [];
        return recipeList
            .map((recipe) => {
                if (!recipe.ingredients?.length) {
                    return {
                        score: 0,
                        recipe,
                    };
                }
                const totalIngredients = recipe.ingredients.filter((x) =>
                    typeof x === 'string' ? !x.startsWith('?') : x.some((substitute) => !substitute.startsWith('?'))
                ).length;

                const matchingIngredients = recipe.ingredients.filter((x) =>
                    typeof x === 'string'
                        ? activeIngredients.includes((x.startsWith('?') ? x.substring(1) : x) as Ingredient)
                        : x.some((substitute) =>
                              activeIngredients.includes((substitute.startsWith('?') ? substitute.substring(1) : substitute) as Ingredient)
                          )
                ).length;
                let score = Math.min(100, totalIngredients ? Math.round((matchingIngredients / totalIngredients) * 100) : 100);
                return {
                    recipe,
                    score,
                };
            })
            .filter((result) => result.score > 80)
            .sort((a, b) =>
                a.score > b.score
                    ? -1
                    : a.score < b.score
                      ? 1
                      : a.recipe.title < b.recipe.title
                        ? -1
                        : a.recipe.title > b.recipe.title
                          ? 1
                          : 0
            );
    }, [activeIngredients]);

    return (
        <div className='d-flex flex-column gap-5'>
            <RecipeHeaderImage title='Recipe Finder' />
            <div className='container d-flex flex-column gap-5'>
                <div className='d-flex flex-column gap-4'>
                    <p>
                        Mark off all the ingredients you have on hand, and we'll pull up recipes that you have all or the majority of the
                        ingredients needed.
                    </p>

                    <div className='d-flex gap-3'>
                        <nav className='nav nav-underline flex-column border-end pe-3 border-primary-subtle'>
                            {categories.map((c) => (
                                <button
                                    key={c}
                                    className={`nav-link ${activeCategory === c ? 'active' : ''} text-start text-nowrap`}
                                    aria-current={activeCategory === c ? 'page' : undefined}
                                    onClick={() => setActiveCategory(c)}
                                >
                                    {c}
                                </button>
                            ))}
                        </nav>
                        <div className=' align-self-start d-flex flex-wrap gap-2 align-items-start'>
                            {ingredients
                                .filter((x) => x.category === activeCategory)
                                .map((i) => (
                                    <div key={i.ingredient}>
                                        <input
                                            type='checkbox'
                                            className='btn-check'
                                            id={`btn-${i.ingredient}`}
                                            autoComplete='off'
                                            checked={activeIngredients?.includes(i.ingredient)}
                                            onChange={(e) => {
                                                if (e.target.checked) {
                                                    setActiveIngredients((x) =>
                                                        (x ?? []).filter((x) => x !== i.ingredient).concat(i.ingredient)
                                                    );
                                                } else {
                                                    setActiveIngredients((x) => (x ?? []).filter((x) => x !== i.ingredient));
                                                }
                                            }}
                                        />
                                        <label className='btn btn-outline-primary rounded-pill border-0' htmlFor={`btn-${i.ingredient}`}>
                                            {i.ingredient}
                                        </label>
                                    </div>
                                ))}
                        </div>
                    </div>

                    {activeIngredients?.length ? (
                        <>
                            {!!matchingRecipes.length && (
                                <>
                                    <RecipesIntro />
                                    <div className='d-flex flex-column gap-5'>
                                        {matchingRecipes.map((r) => (
                                            <RecipeLink key={r.recipe.title} recipe={r.recipe} score={r.score} />
                                        ))}
                                    </div>
                                </>
                            )}

                            {!matchingRecipes.length && (
                                <div className='d-flex flex-column align-items-center justify-content-center bg-light py-5 px-2 gap-1'>
                                    <div className='ff-title fs-5'>No recipes match your checked ingredients</div>
                                    <div>
                                        Please continue checking off ingredients you have or can obtain easily until you have the majority
                                        of the ingredients needed for a recipe.
                                    </div>
                                </div>
                            )}
                        </>
                    ) : null}
                </div>
            </div>
        </div>
    );
}
