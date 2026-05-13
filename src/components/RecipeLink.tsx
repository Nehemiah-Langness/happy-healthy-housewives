import { Link } from 'react-router';
import { recipeLink } from '../services/recipe-link';
import type { Recipe } from '../types/recipe';
import { RecipeLinkImage } from './RecipeLinkImage';
import type { RecipeName } from '../types/recipe-name';
import { smartJoin } from '../services/smart-join';

export function RecipeLink({
    recipe,
    preview,
    className,
    score,
    missing,
}: {
    recipe: Recipe & { slug: RecipeName };
    preview?: boolean;
    className?: string;
    score?: number;
    missing?: string[];
}) {
    return (
        <Link
            to={recipeLink(recipe.slug)}
            style={{ cursor: 'pointer' }}
            className={`rounded-3 overflow-hidden text-decoration-none d-flex flex-column flex-lg-row recipe-link gap-2 position-relative ${
                preview ? 'link-preview' : ''
            } ${className}`}
        >
            <div className='link-slide'>Read Recipe</div>
            <RecipeLinkImage image={recipe.image} />
            <div className='d-flex flex-column gap-2 px-3 py-1'>
                <h1 className='dancing-script text-dark'>{recipe.title}</h1>
                <span className=''>{recipe.brief}</span>
                <div className='flex-grow-1 d-flex align-items-end flex-wrap gap-2'>
                    {score ? (
                        <div className='text-nowrap badge bg-primary-subtle text-dark' style={{ fontStyle: 'italic' }}>
                            {score.toFixed(0)}% match
                        </div>
                    ) : null}
                    {recipe.tags.map((x) => (
                        <span key={x} className='text-dark badge bg-info-subtle'>
                            {x}
                        </span>
                    ))}
                </div>
                {!!missing?.length && <div style={{ fontStyle: 'italic' }}>Missing: {smartJoin(missing)}</div>}
            </div>
        </Link>
    );
}
