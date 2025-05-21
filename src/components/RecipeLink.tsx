import { memo } from 'react';
import { baseUrl } from '../base-url';
import { Link } from 'react-router';
import type { Recipe } from '../types/recipe';

export const RecipeLinkImage = memo(({ image, wide }: { image: string; wide?: boolean }) => (
    <div
        className='flex-shrink-0 mx-auto mx-lg-0 rounded-3'
        style={{
            background: `center/cover url('${baseUrl + '/recipe-images/' + image}')`,
            minHeight: '22rem',
            width: wide ? '25rem' : '16rem',
        }}
    ></div>
));

export function RecipeLink({ recipe, to }: { to: string; recipe: Recipe }) {
    return (
        <Link
            to={to}
            style={{ cursor: 'pointer' }}
            className='rounded-3 overflow-hidden text-decoration-none d-flex flex-column flex-lg-row recipe-link gap-2 position-relative'
        >
            <div className='link-slide'>
                Read Recipe
            </div>
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
