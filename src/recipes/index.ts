import type { Recipe } from '../types/recipe';
import allergenFriendlyTexasChocolateBrownies from './allergen-friendly-texas-chocolate-brownies';
import appleStreuselBakedOatmeal from './apple-streusel-baked-oatmeal';
import breakfastBrownies from './breakfast-brownies';
import briannasSummerSalad from './briannas-summer-salad';
import brownieBatterFruitDip from './brownie-batter-fruit-dip';
import chaiTeaLatteSipper from './chai-tea-latte-sipper';
import nehemiahsKettleCorn2 from './nehemiahs-kettle-corn-2';
import orangeSourdoughSweetLoaf from './orange-sourdough-sweet-loaf';
import pumpkinBakedOatmeal from './pumpkin-baked-oatmeal';
import raspberryChocolateOvernightOatsParfait from './raspberry-chocolate-overnight-oats-parfait';
import smashedPotatos from './smashed-potatos';
import superfoodOatmeal from './superfood-oatmeal';
import sweetieLentilSoup from './sweetie-lentil-soup';
import template from './template';
import theFluffiestPumpkinPancakes from './the-fluffiest-pumpkin-pancakes';
import twiceBakedCheesyPotatoesThmE from './twice-baked-cheesy-potatoes-thm-e';

export const recipes: Record<string, Recipe> = {
    ['allergen-friendly-texas-chocolate-brownies']: allergenFriendlyTexasChocolateBrownies,
    ['apple-streusel-baked-oatmeal']: appleStreuselBakedOatmeal,
    ['breakfast-brownies']: breakfastBrownies,
    ['briannas-summer-salad']: briannasSummerSalad,
    ['brownie-batter-fruit-dip']: brownieBatterFruitDip,
    ['chai-tea-latte-sipper']: chaiTeaLatteSipper,
    ['nehemiahs-kettle-corn-2']: nehemiahsKettleCorn2,
    ['orange-sourdough-sweet-loaf']: orangeSourdoughSweetLoaf,
    ['pumpkin-baked-oatmeal']: pumpkinBakedOatmeal,
    ['raspberry-chocolate-overnight-oats-parfait']: raspberryChocolateOvernightOatsParfait,
    ['smashed-potatos']: smashedPotatos,
    ['superfood-oatmeal']: superfoodOatmeal,
    ['sweetie-lentil-soup']: sweetieLentilSoup,
    ['template']: template,
    ['the-fluffiest-pumpkin-pancakes']: theFluffiestPumpkinPancakes,
    ['twice-baked-cheesy-potatoes-thm-e']: twiceBakedCheesyPotatoesThmE,
};