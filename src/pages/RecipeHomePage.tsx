import { Link } from 'react-router';
import { baseUrl } from '../base-url';
import { RecipeLinkImage } from '../components/RecipeLink';
import { tags } from '../services/tags';
import { RecipesIntro } from '../components/RecipesIntro';

export function RecipeHomePage() {
    return (
        <div className='container pt-5 d-flex flex-column gap-5'>
            <img className='w-100' src={baseUrl + '/recipes.png'} />

            <div className='d-flex flex-column gap-4'>
                <div className='ff-title text-center border-bottom border-info border-2' style={{ fontSize: '4rem' }}>
                    Recipes
                </div>

                <RecipesIntro />

                <div className='row'>
                    {tags.map((t) => (
                        <Link
                            key={t.tag}
                            to={`/recipes/${t.tag.toLowerCase().replace(/ /g, '-')}`}
                            className='text-reset col-12 col-lg-4 d-flex justify-content-center align-items-center flex-column position-relative'
                        >
                            <RecipeLinkImage image={t.image} />
                            <div
                                className='position-absolute start-0 end-0 top-50 py-2 text-center ff-title fw-bold'
                                style={{
                                    background: 'rgba(255, 255, 255, 0.7)',
                                    fontSize: '1.5rem',
                                    transform: 'translateY(-50%)',
                                }}
                            >
                                {t.label || t.tag}
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    );
}
