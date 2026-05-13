import { ingredientMap } from '../services/ingredient-map';

export type Category = (typeof ingredientMap)[keyof typeof ingredientMap];

export const categories = Object.keys(Object.values(ingredientMap).reduce((c, n) => ({ ...c, [n]: '' }), {})).sort((a, b) =>
    a < b ? -1 : a > b ? 1 : 0
) as Category[];

