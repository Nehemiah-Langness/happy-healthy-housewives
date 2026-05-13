import { RecipeLink } from '../components/RecipeLink';
import { RecipesIntro } from '../components/RecipesIntro';
import { RecipeHeaderImage } from '../components/RecipeHeaderImage';
import { useEffect, useMemo, useState } from 'react';
import { recipeList } from '../services/recipe-list';
import { categories, type Category } from '../types/category';
import { type Ingredient, ingredients } from '../types/ingredients';
import { smartJoin } from '../services/smart-join';

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
                        requiredMissing: 100,
                    };
                }
                const totalIngredients = recipe.ingredients.filter((x) =>
                    typeof x === 'string' ? !x.startsWith('?') : x.some((substitute) => !substitute.startsWith('?'))
                );

                const matchingIngredients = totalIngredients.filter((x) =>
                    typeof x === 'string'
                        ? activeIngredients.includes(x as Ingredient)
                        : x.some((substitute) => activeIngredients.includes(substitute as Ingredient))
                ).length;

                const missingIngredients = recipe.ingredients.filter((x) =>
                    typeof x === 'string'
                        ? !activeIngredients.includes((x.startsWith('?') ? x.substring(1) : x) as Ingredient)
                        : !x.some((substitute) =>
                              activeIngredients.includes((substitute.startsWith('?') ? substitute.substring(1) : substitute) as Ingredient)
                          )
                );
                let score = Math.min(
                    100,
                    totalIngredients.length ? Math.round((matchingIngredients / totalIngredients.length) * 100) : 100
                );
                return {
                    recipe,
                    score,
                    requiredMissing: totalIngredients.length - matchingIngredients,
                    missingIngredients,
                };
            })
            .filter((result) => result.requiredMissing < 3)
            .sort((a, b) =>
                a.requiredMissing > b.requiredMissing
                    ? 1
                    : a.requiredMissing < b.requiredMissing
                      ? -1
                      : a.score > b.score
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
            <div className='container d-flex flex-column gap-4'>
                <p>
                    Mark off all the ingredients you have on hand, and we'll pull up recipes that you have all or the majority of the
                    ingredients needed.
                    <br />
                </p>

                <span className='text-center fs-5'>
                    We have {matchingRecipes.length} recipe{matchingRecipes.length === 1 ? '' : 's'} that match
                    {matchingRecipes.length === 1 ? 'es' : ''} your checked ingredients. <a href='#results'>View matches</a>
                </span>
            </div>
            <div className='bg-light'>
                <div className='container d-flex gap-3'>
                    <nav className='nav nav-underline flex-column border-end pe-3 border-primary-subtle'>
                        {categories.map((c) => (
                            <button
                                key={c}
                                className={`nav-link ${activeCategory === c ? 'active' : ''} text-start text-nowrap`}
                                aria-current={activeCategory === c ? 'page' : undefined}
                                onClick={() => setActiveCategory(c)}
                            >
                                <div className='d-flex justify-content-between align-items-center gap-2'>
                                    <span>{c}</span>
                                    <span className='badge bg-info'>
                                        {ingredients.filter((x) => x.category === c && activeIngredients?.includes(x.ingredient)).length}
                                    </span>
                                </div>
                            </button>
                        ))}
                    </nav>
                    <div className='container-fluid py-2'>
                        <div className='row g-2'>
                            {ingredients
                                .filter((x) => x.category === activeCategory)
                                .map((i) => (
                                    <div key={i.ingredient} className='col-12 col-md-6 col-lg-4'>
                                        <div className='form-check'>
                                            <input
                                                type='checkbox'
                                                className='form-check-input'
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
                                            <label className='form-check-label' htmlFor={`btn-${i.ingredient}`}>
                                                {i.ingredient}
                                            </label>
                                        </div>
                                    </div>
                                ))}
                        </div>
                    </div>
                </div>
            </div>
            <div className='container d-flex flex-column gap-4'>
                {activeIngredients?.length ? (
                    <>
                        {!!matchingRecipes.length && (
                            <>
                                <RecipesIntro />
                                <div className='d-flex flex-column gap-5' id='results'>
                                    {matchingRecipes.map((r) => (
                                        <RecipeLink
                                            key={r.recipe.title}
                                            recipe={r.recipe}
                                            score={r.score}
                                            missing={r.missingIngredients?.map(
                                                (x, i, a) =>
                                                    (i === a.length - 1 && a.length > 1 ? 'and ' : '') +
                                                    (typeof x === 'string'
                                                        ? x.startsWith('?')
                                                            ? `${x.substring(1)} (optional)`
                                                            : x
                                                        : `(${smartJoin(
                                                              x
                                                                  .filter((x) => x)
                                                                  .map(
                                                                      (y, i, a) =>
                                                                          (i === a.length - 1 ? 'or ' : '') +
                                                                          (y.startsWith('?') ? `${y.substring(1)} (optional)` : y)
                                                                  )
                                                          )})`)
                                            )}
                                        />
                                    ))}
                                </div>
                            </>
                        )}

                        {!matchingRecipes.length && (
                            <div
                                className='d-flex flex-column align-items-center justify-content-center bg-light py-5 px-2 gap-1'
                                id='results'
                            >
                                <div className='ff-title fs-5'>No recipes match your checked ingredients</div>
                                <div>
                                    Please continue checking off ingredients you have or can obtain easily until you have the majority of
                                    the ingredients needed for a recipe.
                                </div>
                            </div>
                        )}
                    </>
                ) : null}
            </div>
        </div>
    );
}
