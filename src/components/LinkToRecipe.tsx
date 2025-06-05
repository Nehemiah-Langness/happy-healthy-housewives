import type { PropsWithChildren } from 'react';
import { recipeLink } from '../services/recipe-link';
import { Link } from 'react-router';
import type { RecipeName } from '../types/recipe-name';

/** A clickable link to navigate the user to another recipe */
export function LinkToRecipe({
    recipe,
    children,
}: PropsWithChildren<{
    /** The URL of the recipe to link to - the filename without the extension */
    recipe: RecipeName;
}>) {
    return <Link to={recipeLink(recipe)} children={children} />;
}
