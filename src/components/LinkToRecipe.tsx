import type { PropsWithChildren } from "react";
import type { recipes } from "../recipes";
import { recipeLink } from "../services/recipe-link";
import { Link } from "react-router";

export function LinkToRecipe({recipe, children}:PropsWithChildren<{recipe: keyof typeof recipes}>) {
    return <Link to={recipeLink(recipe)} children={children}/>
}