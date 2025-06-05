import { recipes } from '../recipes';
import type { RecipeName } from '../types/recipe-name';
import { recipeList } from './recipe-list';

export function recipeLink(recipeName: RecipeName) {
    const recipe = recipes[recipeName];
    return `/recipes/${recipe.tags[0]?.toLowerCase().replace(/ /g, '-') ?? 'uncategorized'}/${recipeList.find((r) => r === recipe)?.slug}`;
}
