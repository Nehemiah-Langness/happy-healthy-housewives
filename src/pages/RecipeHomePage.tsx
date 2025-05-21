import { Link } from 'react-router';
import { RecipeLinkImage } from '../components/RecipeLink';
import { tags } from '../services/tags';
import { RecipesIntro } from '../components/RecipesIntro';
import { RecipeHeaderImage } from '../components/RecipeHeaderImage';

export function RecipeHomePage() {
    return (
        <div className='container pt-5 d-flex flex-column gap-5'>
            <RecipeHeaderImage />
            <div className='d-flex flex-column gap-4'>
                <RecipesIntro />

                <div className='row gy-5 mt-0'>
                    {tags
                        .filter((x) => x.label)
                        .map((t) => (
                            <Link
                                key={t.tag}
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
                        ))}
                </div>
            </div>
        </div>
    );
}
