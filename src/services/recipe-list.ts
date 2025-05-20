import { recipes } from '../recipes';


export const recipeList = Object.entries(recipes).map(([key, value]) => Object.assign(value, { slug: key }));
