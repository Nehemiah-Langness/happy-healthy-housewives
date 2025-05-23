import { Link } from 'react-router';
import { RecipeLink } from '../components/RecipeLink';
import { RecipeLinkImage } from '../components/RecipeLinkImage';
import { tags } from '../services/tags';
import { RecipesIntro } from '../components/RecipesIntro';
import { RecipeHeaderImage } from '../components/RecipeHeaderImage';
import { memo, useEffect, useMemo, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faTimes } from '@fortawesome/free-solid-svg-icons';
import { recipeList } from '../services/recipe-list';

export function RecipeHomePage() {
    const [filter, setFilter] = useState('');

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
                    const search = recipe.search[index];
                    const matches = terms.filter((term) => search.includes(term)).length;
                    score += Math.pow(2, recipe.search.length - index) * matches;
                }

                console.log(recipe, score);

                return {
                    recipe: recipe,
                    score,
                };
            })
            .filter((result) => result.score > 0)
            .sort((a, b) => -Math.sign(a.score - b.score))
            .map((r) => r.recipe);
    }, [filter]);

    const matchingTags = useMemo(() => {
        const terms = filter
            .toLowerCase()
            .split(' ')
            .filter((x) => x);
        return tags.filter((tag) => terms.every((term) => tag.label.toLowerCase().includes(term) || tag.tag.toLowerCase().includes(term)));
    }, [filter]);

    const suggestions = useMemo(() => {
        const words = filter.split(' ');
        const lastWord = words[words.length - 1];
        if (!lastWord) return [];

        const filterTerm = lastWord.toLowerCase().replace(/['".-]/g, '');
        return [
            ...recipeList
                .flatMap((x) =>
                    (x.titleAlt || x.title).split(' ').map((y) => ({
                        search: y.toLowerCase().replace(/['".-]/g, ''),
                        text: y,
                    }))
                )
                .filter((x) => x.search.startsWith(filterTerm) && x.text !== lastWord)
                .reduce((c, n) => {
                    c.add(n.text);
                    return c;
                }, new Set<string>())
                .values(),
        ].sort();
    }, [filter]);

    const [suggestionIndex, setSuggestionIndex] = useState(0);
    useEffect(() => {
        setSuggestionIndex(0);
    }, [suggestions]);

    useEffect(() => {
        document.querySelector(`#suggestion-${suggestionIndex}`)?.scrollIntoView({
            block: 'nearest',
            inline: 'nearest',
        });
    }, [suggestionIndex]);

    return (
        <div className='d-flex flex-column gap-5'>
            <RecipeHeaderImage />
            <div className='container d-flex flex-column gap-5'>
                <div className='d-flex flex-column gap-4'>
                    <div className='input-group position-relative'>
                        <span className='input-group-text'>
                            <FontAwesomeIcon icon={faSearch} />
                        </span>
                        <input
                            autoFocus
                            placeholder='Search Our Recipes'
                            type='text'
                            className='form-control'
                            value={filter}
                            onChange={(e) => setFilter(e.target.value)}
                            onKeyDown={(e) => {
                                if (e.code === 'Tab' || e.code === 'Enter') {
                                    if (suggestions[suggestionIndex]) {
                                        e.preventDefault();
                                        setFilter((f) => f.split(' ').slice(0, -1).concat(suggestions[suggestionIndex]).join(' '));
                                    }
                                }
                                if (e.code === 'ArrowUp') {
                                    e.preventDefault();
                                    setSuggestionIndex((x) => Math.max(0, x - 1));
                                }
                                if (e.code === 'ArrowDown') {
                                    e.preventDefault();
                                    setSuggestionIndex((x) => Math.min(suggestions.length - 1, x + 1));
                                }
                            }}
                        />
                        {!!suggestions.length && (
                            <div
                                className='position-absolute top-100 border shadow-sm'
                                style={{ left: '3rem', right: '3rem', zIndex: 5, overflowY: 'auto', maxHeight: '12rem' }}
                            >
                                <div className='list-group list-group-flush'>
                                    {suggestions.map((x, i) => (
                                        <div
                                            id={`suggestion-${i}`}
                                            key={`${x}-${i}`}
                                            className={`list-group-item ${i === suggestionIndex ? 'active' : ''}`}
                                            onClick={(e) => {
                                                e.preventDefault();
                                                e.stopPropagation();
                                                setFilter((f) => f.split(' ').slice(0, -1).concat(x).join(' '));
                                            }}
                                        >
                                            {x}
                                        </div>
                                    ))}
                                </div>
                            </div>
                        )}
                        {filter && (
                            <button type='button' className='btn btn-link' onClick={() => setFilter('')}>
                                <FontAwesomeIcon icon={faTimes} />
                            </button>
                        )}
                    </div>
                    <datalist id='recipe-names'>
                        {recipeList.map((r) => (
                            <option key={r.slug} value={r.title} />
                        ))}
                    </datalist>
                    <RecipesIntro />

                    {filter ? (
                        <>
                            {!!matchingTags.length && (
                                <div className='row gy-5 mt-0'>
                                    {matchingTags.map((t) => (
                                        <TagLink key={t.tag} tag={t} />
                                    ))}
                                </div>
                            )}

                            {!!matchingRecipes.length && (
                                <div className='d-flex flex-column gap-5'>
                                    {matchingRecipes.map((r) => (
                                        <RecipeLink key={r.title} recipe={r} />
                                    ))}
                                </div>
                            )}

                            {!matchingTags.length && !matchingRecipes.length && (
                                <div className='d-flex flex-column align-items-center justify-content-center bg-light py-5 px-2 gap-1'>
                                    <div className='ff-title fs-5'>No recipes match your search</div>
                                    <div>Please clear your search and try different search terms.</div>
                                </div>
                            )}
                        </>
                    ) : (
                        <div className='row gy-5 mt-0'>
                            {tags
                                .filter((x) => x.label)
                                .map((t) => (
                                    <TagLink key={t.tag} tag={t} />
                                ))}
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}

const TagLink = memo(({ tag: t }: { tag: (typeof tags)[0] }) => (
    <Link
        to={`/recipes/${t.tag.toLowerCase().replace(/ /g, '-')}`}
        className='recipe-link rounded-3 text-reset col-12 col-lg-4 d-flex justify-content-center align-items-center flex-column position-relative'
    >
        <div className='rounded-3 overflow-hidden'>
            <RecipeLinkImage image={t.image} />
        </div>
        <div
            className='position-absolute start-0 end-0 top-50 py-2 dancing-script fw-bold d-flex align-items-center justify-content-center'
            style={{
                background: 'rgba(255, 255, 255, 0.7)',
                fontSize: '1.75rem',
                transform: 'translateY(-50%)',
                backdropFilter: 'blur(3px)',
            }}
        >
            {t.label || t.tag}
        </div>
    </Link>
));
