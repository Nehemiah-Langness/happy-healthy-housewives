import { useParams } from 'react-router';
import { RecipeLink } from '../components/RecipeLink';
import { tags } from '../services/tags';
import { useMemo } from 'react';
import { recipeList } from '../services/recipe-list';
import { RecipesIntro } from '../components/RecipesIntro';
import { RecipeHeaderImage } from '../components/RecipeHeaderImage';
import type { Tag } from '../types/tag';

export function RecipeTagPage() {
    const { tag } = useParams<{ tag: string }>();

    const matchingTag = useMemo(() => tags.find((t) => t.tag.toLowerCase().replace(/ /g, '-') === tag), [tag]);
    const taggedRecipes = useMemo(() => {
        return matchingTag
            ? recipeList
                  .filter((r) => r.tags.includes(matchingTag.tag as Tag) || r.tags.includes((matchingTag.tag + ' Option') as Tag))
                  .sort((a, b) => (a.title < b.title ? -1 : a.title > b.title ? 1 : 0))
            : [];
    }, [matchingTag]);

    return (
        <div className='d-flex flex-column gap-5'>
            <RecipeHeaderImage title={matchingTag?.label || matchingTag?.tag} />
            <div className='container d-flex flex-column gap-5'>
                <div className='d-flex flex-column gap-4'>
                    <RecipesIntro />

                    {taggedRecipes.map((r) => (
                        <RecipeLink key={r.title} recipe={r} />
                    ))}
                </div>
            </div>
        </div>
    );
}
