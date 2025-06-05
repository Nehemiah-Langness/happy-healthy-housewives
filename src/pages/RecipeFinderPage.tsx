import { RecipeLink } from '../components/RecipeLink';
import { RecipesIntro } from '../components/RecipesIntro';
import { RecipeHeaderImage } from '../components/RecipeHeaderImage';
import { useMemo, useState } from 'react';
import { recipeList } from '../services/recipe-list';
import { categories, type Category } from '../types/category';
import { ingredients } from '../services/ingredient-map';

export function RecipeFinderPage() {
    const [filter] = useState('');

    const matchingRecipes = useMemo(() => {
        const terms = filter
            .toLowerCase()
            .replace(/['".-]/g, '')
            .split(' ')
            .filter((x) => x);

        if (!terms.length) return recipeList;
        return recipeList
            .map((recipe) => {
                let score = 0;

                for (let index = 0; index < recipe.search.length; index++) {
                    const search = recipe.search[index].split(' ');
                    const matches = terms.map((term) => search.filter((s) => s === term).length).reduce((c, n) => c + n, 0);
                    score += Math.pow(2, 4 - index) * matches;
                }

                return {
                    recipe: recipe,
                    score,
                };
            })
            .filter((result) => result.score > 0)
            .sort((a, b) => -Math.sign(a.score - b.score))
            .map((r) => r.recipe);
    }, [filter]);

    const [activeCategory, setActiveCategory] = useState<Category>(categories[0]);

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
                                        <input type='checkbox' className='btn-check' id={`btn-${i.ingredient}`} autoComplete='off' />
                                        <label className='btn btn-outline-primary rounded-pill border-0' htmlFor={`btn-${i.ingredient}`}>
                                            {i.ingredient}
                                        </label>
                                    </div>
                                ))}
                        </div>
                    </div>

                    <RecipesIntro />

                    {filter ? (
                        <>
                            {!!matchingRecipes.length && (
                                <div className='d-flex flex-column gap-5'>
                                    {matchingRecipes.map((r) => (
                                        <RecipeLink key={r.title} recipe={r} />
                                    ))}
                                </div>
                            )}

                            {!matchingRecipes.length && (
                                <div className='d-flex flex-column align-items-center justify-content-center bg-light py-5 px-2 gap-1'>
                                    <div className='ff-title fs-5'>No recipes match your search</div>
                                    <div>Please clear your search and try different search terms.</div>
                                </div>
                            )}
                        </>
                    ) : null}
                </div>
            </div>
        </div>
    );
}
