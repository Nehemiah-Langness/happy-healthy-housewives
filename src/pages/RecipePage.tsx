import { Link, useParams } from 'react-router';
import { RecipeLinkImage } from '../components/RecipeLink';
import { recipes } from '../recipes';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import { tagMap } from '../services/tag-map';

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
                    <div className='ff-title text-center border-bottom border-info border-2' style={{ fontSize: '4rem' }}>
                        {matchingRecipe.title}
                    </div>
                    <figure>
                        <blockquote className='blockquote'>
                            <p>{matchingRecipe.quote.quote}</p>
                        </blockquote>
                        <figcaption className='blockquote-footer'>{matchingRecipe.quote.person}</figcaption>
                    </figure>
                </div>
            </div>
            <div className='d-flex gap-3 flex-wrap'>
                {matchingRecipe.tags
                    .map((x) => ({
                        tag: x,
                        label: tagMap[x],
                    }))
                    .filter((x) => x.label)
                    .map((t) => (
                        <Link className='badge bg-primary text-decoration-none' to={`/recipes/${t.tag.toLowerCase().replace(/ /g, '-')}`}>
                            {t.tag}
                        </Link>
                    ))}
            </div>

            {!!matchingRecipe.servings && (
                <div className='d-flex flex-column gap-1'>
                    <span id='servingss' className='ff-title fw-bold'>
                        Servings:
                    </span>
                    <div className='px-2'>{matchingRecipe.servings}</div>
                </div>
            )}
            <div className='d-flex flex-column gap-1'>
                <span id='ingredients' className='ff-title fw-bold'>
                    Ingredients:
                </span>
                {matchingRecipe.Ingredients.map((Ingredient, index) => (
                    <div key={index} className='px-2'>
                        {Ingredient}
                    </div>
                ))}
                {matchingRecipe.IngredientNotes}
            </div>
            <div className='d-flex flex-column gap-1'>
                <span id='directions' className='ff-title fw-bold'>
                    Directions:
                </span>
                <div className='px-2'>{matchingRecipe.Directions}</div>
            </div>

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
