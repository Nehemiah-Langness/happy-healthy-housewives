import type { Recipe } from '../types/recipe';
import { LinkToRecipe } from '../components/LinkToRecipe';
import { AcronymToggle } from '../components/AcronymToggle';
import { AffiliateLink } from '../components/AffiliateLink';

const recipe: Recipe = {
    title: 'The Fluffiest Pumpkin Pancakes',
    tags: ['THM E', 'GF Option', 'DF Option'],
    dateAdded: new Date('2025-05-15'),
    brief: `Fall is here and it's time for all things pumpkin! These pumpkin pancakes use a secret superfood to give them their fluffy texture: kefir!`,
    image: 'the-fluffiest-pumpkin-pancakes.jpeg',
    quote: {
        person: 'Brianna',
        Quote: [
            `I started making my own kefir this past year and as much as I enjoy drinking it plain I have also enjoyed experimenting 
            with it in cooking! One of these experiments resulted in these beautiful pancakes. The second I made these I knew they had to 
            be shared with the world. Besides, what screams Fall more than the fluffiest pumpkin pancakes?`,
        ],
    },
    servings: '18-24 pancakes',
    Ingredients: [
        <span>
            2 cups flour (whole grain whole wheat, einkorn, or sprouted) (use <AcronymToggle>GF</AcronymToggle> oat flour for{' '}
            <AcronymToggle>GF</AcronymToggle> option)
        </span>,
        <span>
            2 cups of plain lowfat kefir (or <LinkToRecipe recipe='dairy-free-yogurt'>dairy free yogurt</LinkToRecipe>)
        </span>,
        '3/4 cup pumpkin puree',
        '2 tsp of pumpkin pie spice',
        '1 tsp vanilla extract',
        <>2 tsp <AffiliateLink>THM Super Sweet</AffiliateLink> (or Pyure)</>,
        '1 egg',
        '2 Tbsp unsalted butter',
        '2 tsp baking powder',
        '1/2 tsp baking soda',
    ],

    Directions: (
        <>
            <p>
                Mix flour and kefir together (the mixture should be somewhat runny and if it isn’t you can add some unsweetened nut milk or
                water to loosen it). Let the mixture sit on the counter for 7-8 hours.
            </p>
            <p>Preheat griddle to 300&deg; F. Mix all remaining ingredients with the kefir and flour mixture.</p>
            <p>Drop a 1/4 cup of mixture onto the hot griddle. Cook for 3-4 minutes each side, or until it looks and feels done.</p>
            <p>Serve warm and enjoy!</p>
        </>
    ),
    Notes: (
        <>
            <p>
                <b>THM Compliance:</b> This recipe is <AffiliateLink>THM</AffiliateLink> compliant because it soaks the flour in a acidic medium overnight, much like using
                a sourdough starter. If you don’t wish to soak this recipe, you can use a sprouted grain flour or oat flour.
            </p>
        </>
    ),
};

export default recipe;
