import { ingredientMap } from '../services/ingredient-map';

export type Ingredient = keyof typeof ingredientMap;

export const ingredients = Object.entries(ingredientMap)
    .map(([i, c]) => ({
        ingredient: i as Ingredient,
        category: c,
    }))
    .sort((a, b) => (a.ingredient < b.ingredient ? -1 : a.ingredient > b.ingredient ? 1 : 0));
