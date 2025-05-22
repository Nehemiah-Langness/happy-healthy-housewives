import { recipes } from '../recipes';
import { recipeList } from './recipe-list';

export function recipeLink(recipeName: keyof typeof recipes) {
    const recipe = recipes[recipeName];
    return `/recipes/${recipe.tags[0]?.toLowerCase().replace(/ /g, '-') ?? 'uncategorized'}/${recipeList.find((r) => r === recipe)?.slug}`;
}
