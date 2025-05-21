import { useParams } from 'react-router';
import { RecipeLink } from '../components/RecipeLink';
import { tags } from '../services/tags';
import { useMemo } from 'react';
import { recipeList } from '../services/recipe-list';
import { RecipesIntro } from '../components/RecipesIntro';
import { RecipeHeaderImage } from '../components/RecipeHeaderImage';

export function RecipeTagPage() {
    const { tag } = useParams<{ tag: string }>();

    const matchingTag = useMemo(() => tags.find((t) => t.tag.toLowerCase().replace(/ /g, '-') === tag), [tag]);
    const taggedRecipes = useMemo(() => {
        return recipeList.filter((r) => r.tags.includes(matchingTag?.tag ?? ''));
    }, [matchingTag?.tag]);

    return (
        <div className='container pt-5 d-flex flex-column gap-5'>
            <RecipeHeaderImage title={matchingTag?.label || matchingTag?.tag} />

            <div className='d-flex flex-column gap-4'>
                <RecipesIntro />

                {taggedRecipes.map((r) => (
                    <RecipeLink
                        key={r.title}
                        to={`/recipes/${tag ?? ''}/${r.slug}`}
                        description={r.brief}
                        image={r.image}
                        title={r.title}
                    />
                ))}
            </div>
        </div>
    );
}
