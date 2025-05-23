import { IngredientList } from '../components/IngredientList';
import type { Recipe } from '../types/recipe';
import { AffiliateLink } from '../components/AffiliateLink';
import { LinkToRecipe } from '../components/LinkToRecipe';

const recipe: Recipe = {
    title: 'Superfood Oatmeal',
    tags: ['THM E', 'GF', 'DF'],
    dateAdded: new Date('2025-05-15'),
    brief: `The best part of waking up is a hot bowl of superfood nutrition and nourishing carbs!`,
    image: 'superfood-oatmeal.jpg',
    file: 'SuperfoodOatmeal.pdf',
    quote: {
        person: 'Mandy',
        Quote: [
            `If you follow me on any of our social accounts, you know I have a passion for oatmeal. I enjoy a bowl almost every morning!`,
            `Whenever I enjoy something frequently, I like to boost the nutrition up the whazoo. That's how I've made this recipe! Over 
            months of experimenting with different superfoods, I've landed on a winning combination.`,
            `The best thing about this recipe is you can modify it however you like! I added some recommendations for flavorings, but 
            feel free to own it!`,
        ],
    },
    servings: 'Single Serving',
    Ingredients: [
        <>1/8 &ndash; 1/4 c. old fashioned oats</>,
        <>1/8 &ndash; 1/4 c. quick cook steel cut oats</>,
        <>
            1 doonk <AffiliateLink>THM Pure Stevia</AffiliateLink>
        </>,
        <>1/2 &ndash; 1 tsp. ground flaxseed</>,
        <>1 &ndash; 2 tsp. whole husk psyllium flakes</>,
        <>1 tsp. baobab powder</>,
        <>
            1 tsp. <AffiliateLink>THM Creamy Dreamy Hemp Protein</AffiliateLink> (optional)
        </>,
        <>1/4 c. frozen cauliflower rice</>,
        <>1/4 c. egg whites (boxed is best)</>,
        <>1 1/4 &ndash; 2 1/2 c. water</>,
        <>1/2 &ndash; 1 tsp. gelatin</>,
        <>Sprinkle of mineral salt</>,
        <>
            Sprinkle of <AffiliateLink>THM Gentle Sweet</AffiliateLink>
        </>,
    ],
    IngredientNotes: (
        <IngredientList
            title='Optional Flavors and Toppings'
            Ingredients={[
                <>
                    <b>Peanut Butter Banana:</b> Add 2 Tbsp. Peanut Flour to pot, top bowl with 1/2 chopped banana + drizzle of Peanut
                    Butter.
                </>,
                <LinkToRecipe recipe='apple-pie-oatmeal'>Apple Pie</LinkToRecipe>,
                <LinkToRecipe recipe='peaches-n-cream-oatmeal'>Peaches and Cream</LinkToRecipe>,
                <>
                    <b>Blueberry:</b> pour 1/4 c. frozen Wild Blueberries in the bottom of your bowl, top with the oatmeal.
                </>,
                <>
                    <b>Strawberries and Cream:</b> Top with sliced frozen strawberries + splash of Vanilla NutPods. Place a plate on top of
                    oatmeal bowl for 5 minutes to melt the strawberries.
                </>,
            ]}
        />
    ),
    Directions: (
        <>
            <p>
                Combine oats, stevia, flaxseed, psyllium flakes, baobab, Hemp Protein (if using), and any optional dry flavorings. Mix well.
            </p>
            <p>Add in cauliflower rice, egg whites, and water. Stir until well combined.</p>
            <p>Place on stovetop on medium heat. Once boiling, add in the gelatin and stir well.</p>
            <p>
                Pour into a bowl and top with any optional toppings, sprinkle of mineral salt, and{' '}
                <AffiliateLink>THM Gentle Sweet</AffiliateLink>.
            </p>
        </>
    ),
    Notes: (
        <>
            <p>
                The larger measurements listed will make a HUGE bowl of oats. Sometimes my metabolism needs more and sometimes it needs to
                the smaller, more manageable bowl. Just see what your body needs!
            </p>
        </>
    ),
    similar: ['apple-pie-oatmeal', 'peaches-n-cream-oatmeal'],
};

export default recipe;
