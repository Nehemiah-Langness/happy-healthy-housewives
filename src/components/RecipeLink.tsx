import { memo } from 'react';
import { baseUrl } from '../base-url';
import { Link } from 'react-router';

export const RecipeLinkImage = memo(({ image }: { image: string }) => (
    <div
        className='flex-shrink-0 mx-auto mx-lg-0'
        style={{ background: `center/cover url('${baseUrl +'/recipe-images/' + image}')`, minHeight: '22rem', width: '16rem' }}
    ></div>
));

export function RecipeLink({ image, description, title, to }: { image: string; title: string; description: string, to: string }) {
    return (
        <Link to={to} style={{ cursor: 'pointer' }} className=' text-decoration-none d-flex flex-column flex-lg-row recipe-link gap-2'>
            <RecipeLinkImage image={image} />
            <div className='d-flex flex-column gap-2 px-3 py-1'>
                <h1 className='ff-title text-dark'>{title}</h1>
                <span className=''>{description}</span>
            </div>
        </Link>
    );
}
