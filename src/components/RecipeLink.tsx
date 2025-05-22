import { Link } from 'react-router';
import type { recipes } from '../recipes';
import { recipeLink } from '../services/recipe-link';
import type { Recipe } from '../types/recipe';
import { RecipeLinkImage } from './RecipeLinkImage';

export function RecipeLink({ recipe }: { recipe: Recipe & { slug: keyof typeof recipes } }) {
    return (
        <Link
            to={recipeLink(recipe.slug)}
            style={{ cursor: 'pointer' }}
            className='rounded-3 overflow-hidden text-decoration-none d-flex flex-column flex-lg-row recipe-link gap-2 position-relative'
        >
            <div className='link-slide'>Read Recipe</div>
            <RecipeLinkImage image={recipe.image} />
            <div className='d-flex flex-column gap-2 px-3 py-1'>
                <h1 className='dancing-script text-dark'>{recipe.title}</h1>
                <span className=''>{recipe.brief}</span>
                <div className='flex-grow-1 d-flex align-items-end flex-wrap gap-2'>
                    {recipe.tags.map((x) => (
                        <span key={x} className='text-dark badge bg-info-subtle'>
                            {x}
                        </span>
                    ))}
                </div>
            </div>
        </Link>
    );
}
