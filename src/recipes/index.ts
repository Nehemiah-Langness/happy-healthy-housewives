import type { Recipe } from '../types/recipe';
import allergenFriendlyTexasChocolateBrownies from './allergen-friendly-texas-chocolate-brownies';
import briannasSummerSalad from './briannas-summer-salad';
import brownieBatterFruitDip from './brownie-batter-fruit-dip';
import chaiTeaLatteSipper from './chai-tea-latte-sipper';
import twiceBakedCheesyPotatoesThmE from './twice-baked-cheesy-potatoes-thm-e';

export const recipes: Record<string, Recipe> = {
    ['allergen-friendly-texas-chocolate-brownies']: allergenFriendlyTexasChocolateBrownies,
    ['briannas-summer-salad']: briannasSummerSalad,
    ['brownie-batter-fruit-dip']: brownieBatterFruitDip,
    ['chai-tea-latte-sipper']: chaiTeaLatteSipper,
    ['twice-baked-cheesy-potatoes-thm-e']: twiceBakedCheesyPotatoesThmE,
};