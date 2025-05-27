import type { PropsWithChildren } from 'react';
import type { recipes } from '../recipes';
import { recipeLink } from '../services/recipe-link';
import { Link } from 'react-router';

/** A clickable link to navigate the user to another recipe */
export function LinkToRecipe({ recipe, children }: PropsWithChildren<{ 
    /** The URL of the recipe to link to - the filename without the extension */
    recipe: keyof typeof recipes 
}>) {
    return <Link to={recipeLink(recipe)} children={children} />;
}
