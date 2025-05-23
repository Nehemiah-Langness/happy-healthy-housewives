import { AcronymToggle } from '../components/AcronymToggle';
import { ExternalLink } from '../components/ExternalLink';
import type { Recipe } from '../types/recipe';

const recipe: Recipe = {
    title: 'Magic Bars',
    tags: ['THM S', 'Keto Friendly', 'GF', 'DF Option'],
    dateAdded: new Date('2025-05-15'),
    brief: `It's the holiday season! Enjoy this time of celebration without adding to your waistline. This Magic Bar recipe is husband approved and sure to satisfy your whole family.`,
    image: 'magic-bars.jpg',
    quote: {
        person: 'Brianna',
        Quote: [
            <>
                I think every gathering consists of some type of magic bar. For my husband, this was his absolute favorite Christmas time
                treat. Wanting to bless him, I gave this super easy treat a make over but didn't lose any of the flavor! Husband approved,
                and hopefully you too!
            </>,
        ],
    },
    Ingredients: [
        <>
            1 recipe of{' '}
            <ExternalLink to='https://abetteryouwithcoachbecky.com/graham-cracker-crumbs/'>
                Coach Betty's Graham Cracker Crumbs
            </ExternalLink>{' '}
            (unbaked)
        </>,
        <>
            1 recipe of Sweetened Condensed Milk (I used{' '}
            <ExternalLink to='https://mymontanakitchen.com/3-ingredient-sweetened-condensed-milk-thm-s-low-carb-sugar-free/'>
                this recipe from MyMontanaKitchen
            </ExternalLink>
            )
        </>,
        <>1 bag of Semi sweet chocolate chips (Lilys or Bake Believe)</>,
        <>4 oz of unsweetened coconut flakes</>,
        <>1 cup of chopped walnuts</>,
    ],
    Directions: (
        <>
            <p>Preheat oven to 350&deg; F.</p>
            <p>In a large baking dish, spread and press out the graham cracker crumbs mixture.</p>
            <p>Evenly spread the sweetened condensed milk over the crust.</p>
            <p>Evenly spread the nuts, coconut, and chocolate chips. Press down all toppings.</p>
            <p>Bake for 20-30 minutes or until golden. Let cool, cut, and enjoy!</p>
        </>
    ),
    Notes: (
        <>
            <p>
                For a <AcronymToggle>DF</AcronymToggle> version, use{' '}
                <ExternalLink to='https://mymontanakitchen.com/2-ingredient-dairy-free-sweetened-condensed-milk-thm-s-sugar-free-low-carb/'>
                    MyMontanaKitchen's Dairy Free Sweetened Condensed Milk
                </ExternalLink>
            </p>
        </>
    ),
};

export default recipe;
