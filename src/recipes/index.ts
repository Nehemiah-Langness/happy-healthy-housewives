import type { Recipe } from '../types/recipe';
import brownieBatterFruitDip from './brownie-batter-fruit-dip';
import twiceBakedCheesyPotatoesThmE from './twice-baked-cheesy-potatoes-thm-e';

export const recipes: Record<string, Recipe> = {
    ['brownie-batter-fruit-dip']: brownieBatterFruitDip,
    ['twice-baked-cheesy-potatoes-thm-e']: twiceBakedCheesyPotatoesThmE,
};