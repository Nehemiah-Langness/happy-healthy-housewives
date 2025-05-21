import { Link } from 'react-router';
import { RecipeLink, RecipeLinkImage } from '../components/RecipeLink';
import { tags } from '../services/tags';
import { RecipesIntro } from '../components/RecipesIntro';
import { RecipeHeaderImage } from '../components/RecipeHeaderImage';
import { memo, useMemo, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faTimes } from '@fortawesome/free-solid-svg-icons';
import { recipeList } from '../services/recipe-list';

export function RecipeHomePage() {
    const [filter, setFilter] = useState('');

    const matchingRecipes = useMemo(() => {
        const terms = filter
            .toLowerCase()
            .split(' ')
            .filter((x) => x);
        return recipeList.filter((recipe) =>
            terms.every(
                (term) =>
                    recipe.title.toLowerCase().includes(term) ||
                    recipe.brief.toLowerCase().includes(term) ||
                    (Array.isArray(recipe.quote) ? recipe.quote : [recipe.quote]).some(
                        (quote) =>
                            quote.person.toLowerCase().includes(term) ||
                            (typeof quote.Quote === 'string'
                                ? [quote.Quote]
                                : Array.isArray(quote.Quote)
                                ? (quote.Quote.filter((x) => typeof x === 'string') as string[])
                                : []
                            ).some((q) => q.toLowerCase().includes(term))
                    )
            )
        );
    }, [filter]);

    const matchingTags = useMemo(() => {
        const terms = filter
            .toLowerCase()
            .split(' ')
            .filter((x) => x);
        return tags.filter((tag) => terms.every((term) => tag.label.toLowerCase().includes(term) || tag.tag.toLowerCase().includes(term)));
    }, [filter]);

    return (
        <div className='container pt-5 d-flex flex-column gap-5'>
            <RecipeHeaderImage />
            <div className='d-flex flex-column gap-4'>
                <RecipesIntro />
                <div className='input-group'>
                    <span className='input-group-text'>
                        <FontAwesomeIcon icon={faSearch} />
                    </span>
                    <input
                        placeholder='Search Our Recipes'
                        type='text'
                        className='form-control'
                        value={filter}
                        onChange={(e) => setFilter(e.target.value)}
                    />
                    {filter && (
                        <button type='button' className='btn btn-link' onClick={() => setFilter('')}>
                            <FontAwesomeIcon icon={faTimes} />
                        </button>
                    )}
                </div>

                {filter ? (
                    <>
                        {!!matchingTags.length && (
                            <div className='row gy-5 mt-0'>
                                {matchingTags.map((t) => (
                                    <TagLink key={t.tag} tag={t} />
                                ))}
                            </div>
                        )}

                        <div className='row gy-5 mt-0'>
                            {matchingRecipes.map((r) => (
                                <RecipeLink
                                    key={r.title}
                                    to={`/recipes/${r.tags[0].toLowerCase().replace(/ /g, '-')}/${r.slug}`}
                                    recipe={r}
                                />
                            ))}
                        </div>
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
            className='position-absolute start-0 end-0 top-50 py-2 text-center dancing-script fw-bold'
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
