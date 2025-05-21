import { Link, useParams } from 'react-router';
import { RecipeLinkImage } from '../components/RecipeLink';
import { recipes } from '../recipes';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import { tagMap } from '../services/tag-map';
import { IngredientList } from '../components/IngredientList';
import { baseUrl } from '../base-url';
import { faFilePdf } from '@fortawesome/free-solid-svg-icons';
import { RecipeHeader } from '../components/RecipeHeader';

export function RecipePage() {
    const { recipe } = useParams<{ recipe: string }>();
    const matchingRecipe = recipes[recipe ?? ''];
    if (!matchingRecipe) {
        return null; // Need 404
    }

    return (
        <div className='container pt-5 d-flex gap-5 flex-column'>
            <div className='d-flex gap-5 flex-column flex-lg-row'>
                <RecipeLinkImage image={matchingRecipe.image} />
                <div className='d-flex flex-column gap-4'>
                    <div className='dancing-script text-center border-bottom border-info border-2' style={{ fontSize: '4rem' }}>
                        {matchingRecipe.title}
                    </div>
                    {(Array.isArray(matchingRecipe.quote) ? matchingRecipe.quote : [matchingRecipe.quote]).map((quote, index) => (
                        <figure key={index} className='mb-0'>
                            <blockquote className='blockquote' style={{ fontSize: '0.9em' }}>
                                {(Array.isArray(quote.Quote) ? quote.Quote : [quote.Quote]).map((q, index) => (
                                    <p key={index}>{q}</p>
                                ))}
                            </blockquote>
                            <figcaption className='blockquote-footer mb-0 ff-title'>{quote.person}</figcaption>
                        </figure>
                    ))}

                    <div className='d-flex gap-3 flex-wrap align-items-center'>
                        <RecipeHeader>Tags:</RecipeHeader>
                        {matchingRecipe.tags
                            .map((x) => ({
                                tag: x,
                                label: tagMap[x],
                            }))
                            .map((t) => (
                                <Link
                                    className='badge bg-primary text-decoration-none'
                                    to={`/recipes/${t.tag.toLowerCase().replace(/ /g, '-')}`}
                                >
                                    {t.tag}
                                </Link>
                            ))}
                    </div>
                </div>
            </div>

            {matchingRecipe.file && (
                <div style={{ marginTop: '-1.75rem' }}>
                    <a
                        className='btn btn-outline-danger btn-sm border-0'
                        target='_blank'
                        href={`${baseUrl}/recipe-files/${matchingRecipe.file}`}
                    >
                        <div className='d-flex align-items-center gap-2'>
                            <FontAwesomeIcon style={{ fontSize: '1.2em' }} icon={faFilePdf} /> Download Recipe
                        </div>
                    </a>
                </div>
            )}

            {!!matchingRecipe.servings && (
                <div className='d-flex gap-1 align-items-baseline'>
                    <RecipeHeader>Servings:</RecipeHeader>
                    <div className='px-2'>{matchingRecipe.servings}</div>
                </div>
            )}
            {!!matchingRecipe.servingSize && (
                <div className='d-flex flex gap-1 align-items-baseline'>
                    <RecipeHeader>Servings Size:</RecipeHeader>
                    <div className='px-2'>{matchingRecipe.servingSize}</div>
                </div>
            )}
            <IngredientList Ingredients={matchingRecipe.Ingredients} title='Ingredients' IngredientNotes={matchingRecipe.IngredientNotes} />

            <div className='d-flex flex-column gap-1'>
                <RecipeHeader>Directions:</RecipeHeader>
                <div className='px-2'>{matchingRecipe.Directions}</div>
            </div>

            {!!matchingRecipe.Notes && (
                <div className='d-flex flex-column gap-1'>
                    <RecipeHeader>Notes:</RecipeHeader>
                    <div className='px-2'>{matchingRecipe.Notes}</div>
                </div>
            )}

            <div>
                <div className='ff-title mb-2'>Questions or Comments on this Recipe?</div>
                <a className='btn btn-primary ' href='https://ig.me/m/happyhealthyhousewives/'>
                    <div className='d-flex align-items-center gap-2'>
                        <FontAwesomeIcon style={{ fontSize: '1.3em' }} icon={faInstagram} /> Message us on Instagram!
                    </div>
                </a>
            </div>
        </div>
    );
}
