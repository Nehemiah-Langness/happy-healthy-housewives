import { baseUrl } from '../base-url';
import { RecipeLink } from '../components/RecipeLink';
import { recipeList } from '../services/recipe-list';
import { howManyRecipesOnHomePage } from '../settings.json';

const recipesFavorites = recipeList
    .sort((a, b) => -Math.sign(a.dateAdded.valueOf() - b.dateAdded.valueOf()))
    .slice(0, howManyRecipesOnHomePage);

export function HomePage() {
    return (
        <div className='d-flex flex-column gap-5'>
            {' '}
            <div className='bg-light'>
                <div className='container'>
                    <img className='w-100' src={baseUrl + '/banner.png'} />
                </div>
            </div>
            <div className='container d-flex flex-column gap-5'>
                <div className='d-flex flex-column gap-4'>
                    <div className='dancing-script text-center border-bottom border-info border-2 display-4'>What's New</div>
                    {recipesFavorites.map((recipe) => (
                        <RecipeLink
                            key={recipe.slug}
                            to={`/recipes/${recipe.tags[0].toLowerCase().replace(/ /g, '-')}/${recipe.slug}`}
                            recipe={recipe}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
}
