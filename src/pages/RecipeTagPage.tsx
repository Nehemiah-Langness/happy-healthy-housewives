import { useParams } from 'react-router';
import { baseUrl } from '../base-url';
import { RecipeLink } from '../components/RecipeLink';
import { tags } from '../services/tags';
import { useMemo } from 'react';
import { recipeList } from '../services/recipe-list';
import { RecipesIntro } from '../components/RecipesIntro';

export function RecipeTagPage() {
    const { tag } = useParams<{ tag: string }>();

    const matchingTag = useMemo(() => tags.find((t) => t.tag.toLowerCase().replace(/ /g, '-') === tag), [tag]);
    const taggedRecipes = useMemo(() => {
        return recipeList.filter((r) => r.tags.includes(matchingTag?.tag ?? ''));
    }, [matchingTag?.tag]);

    return (
        <div className='container pt-5 d-flex flex-column gap-5'>
            <img className='w-100' src={baseUrl + '/recipes.png'} />

            <div className='d-flex flex-column gap-4'>
                <div className='ff-title text-center border-bottom border-info border-2' style={{ fontSize: '4rem' }}>
                    {matchingTag?.label || matchingTag?.tag}
                </div>

                <RecipesIntro />

                {taggedRecipes.map((r) => (
                    <RecipeLink
                        key={r.title}
                        to={`/recipes/${tag??''}/${r.slug}`}
                        description={r.brief}
                        image={r.image}
                        title={r.title}
                    />
                ))}
            </div>
        </div>
    );
}
