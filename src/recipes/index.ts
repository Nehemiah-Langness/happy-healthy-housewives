import type { Recipe } from '../types/recipe';
import allergenFriendlyTexasChocolateBrownies from './allergen-friendly-texas-chocolate-brownies';
import appleStreuselBakedOatmeal from './apple-streusel-baked-oatmeal';
import breakfastBrownies from './breakfast-brownies';
import briannasSummerSalad from './briannas-summer-salad';
import brownieBatterFruitDip from './brownie-batter-fruit-dip';
import chaiTeaLatteSipper from './chai-tea-latte-sipper';
import mamaritas from './mamaritas';
import nehemiahsKettleCorn2 from './nehemiahs-kettle-corn-2';
import orangeSourdoughSweetLoaf from './orange-sourdough-sweet-loaf';
import pumpkinBakedOatmeal from './pumpkin-baked-oatmeal';
import raspberryChocolateOvernightOatsParfait from './raspberry-chocolate-overnight-oats-parfait';
import smashedPotatos from './smashed-potatos';
import superfoodOatmeal from './superfood-oatmeal';
import sweetieLentilSoup from './sweetie-lentil-soup';
import template from './template';
import theFluffiestPumpkinPancakes from './the-fluffiest-pumpkin-pancakes';
import trimMamaBaileys from './trim-mama-baileys';
import trimSangarita from './trim-sangarita';
import tropicalGgms from './tropical-ggms';
import twiceBakedCheesyPotatoesThmE from './twice-baked-cheesy-potatoes-thm-e';
import yuletideMulledWine from './yuletide-mulled-wine';

export const recipes: Record<string, Recipe> = {
    ['allergen-friendly-texas-chocolate-brownies']: allergenFriendlyTexasChocolateBrownies,
    ['apple-streusel-baked-oatmeal']: appleStreuselBakedOatmeal,
    ['breakfast-brownies']: breakfastBrownies,
    ['briannas-summer-salad']: briannasSummerSalad,
    ['brownie-batter-fruit-dip']: brownieBatterFruitDip,
    ['chai-tea-latte-sipper']: chaiTeaLatteSipper,
    ['mamaritas']: mamaritas,
    ['nehemiahs-kettle-corn-2']: nehemiahsKettleCorn2,
    ['orange-sourdough-sweet-loaf']: orangeSourdoughSweetLoaf,
    ['pumpkin-baked-oatmeal']: pumpkinBakedOatmeal,
    ['raspberry-chocolate-overnight-oats-parfait']: raspberryChocolateOvernightOatsParfait,
    ['smashed-potatos']: smashedPotatos,
    ['superfood-oatmeal']: superfoodOatmeal,
    ['sweetie-lentil-soup']: sweetieLentilSoup,
    ['template']: template,
    ['the-fluffiest-pumpkin-pancakes']: theFluffiestPumpkinPancakes,
    ['trim-mama-baileys']: trimMamaBaileys,
    ['trim-sangarita']: trimSangarita,
    ['tropical-ggms']: tropicalGgms,
    ['twice-baked-cheesy-potatoes-thm-e']: twiceBakedCheesyPotatoesThmE,
    ['yuletide-mulled-wine']: yuletideMulledWine,
};