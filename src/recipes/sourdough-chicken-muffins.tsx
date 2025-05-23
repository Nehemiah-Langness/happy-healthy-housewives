import { AffiliateLink } from '../components/AffiliateLink';
import { IngredientList } from '../components/IngredientList';
import type { Recipe } from '../types/recipe';

const recipe: Recipe = {
    title: 'Sourdough Chicken Muffins',
    tags: ['THM XO'],
    dateAdded: new Date('2025-05-22'),
    brief: `Don't knock it 'till you try it. Almost like a chicken pot pie, but better!`,
    image: 'sourdough-chicken-muffins.png',
    file: 'SourdoughChickenMuffins.pdf',
    quote: {
        person: 'Brianna',
        Quote: [
            <>
                This recipe is a <AffiliateLink>THMified</AffiliateLink> version of one of my Husband's childhood favorite meals! It is
                based on a throw together recipe of my Mother In Laws, just tweaked a bit using my lovely sourdough to make the muffins!
            </>,
            <>
                I have a passion for altering our favorites to keep them on plan, and this recipe is no different! It is husband, son, and
                mother in law approved!
            </>,
        ],
    },
    servings: '12 large muffins',
    Ingredients: [
        <IngredientList
            title='Muffins'
            Ingredients={[
                <>1 1/2 cups water</>,
                <>1/2 cups sourdough discard</>,
                <>2 cups whole wheat flour</>,
                <>2 eggs</>,
                <>1/2 tsp mineral salt</>,
                <>2 tsp baking powder</>,
                <>1 tsp baking soda </>,
                <>
                    3 TBS <AffiliateLink>THM Gentle Sweet</AffiliateLink>
                </>,
            ]}
        />,
        <IngredientList
            title='Filling'
            Ingredients={[
                <>1 block 1/3 fat cream cheese</>,
                <>1 onion, diced</>,
                <>1 can of chicken</>,
                <>1/2 tsp mineral salt</>,
                <>1/2 tsp black pepper</>,
                <>1/2 tsp onion powder</>,
            ]}
        />,
    ],
    Directions: (
        <>
            <p>Make sponge by combining water, discard, and flour. Allow it to ferment on the counter for 8 or more hours. </p>
            <p>After fermentation, preheat oven to 375&deg;. Grease your muffin tin. </p>
            <p>Add rest of muffin ingredients to sponge and mix well.</p>
            <p>
                In a pan over medium high heat, saute onions until translucent. Add chicken and stir for a minute. Add cream cheese and
                seasonings, stir until well combined.{' '}
            </p>
            <p>
                In your greased muffin tin, add batter to fill the hole half-way. Add a spoonful or two of the filling to each muffin. Cover
                with the rest of the batter.{' '}
            </p>
            <p>Bake for 15-18 minutes, let cool slightly, and enjoy!</p>
        </>
    ),
};

export default recipe;

// Ingredients:
// Muffins:
// • 1 1/2 cups water
// • 1/2 cups sourdough discard
// • 2 cups whole wheat flour
// • 2 eggs
// • 1/2 tsp mineral salt
// • 2 tsp baking powder
// • 1 tsp baking soda
// • 3 TBS THM Gentle Sweet
// Filling:
// • 1 block 1/3 fat cream cheese
// • 1 onion, diced
// • 1 can of chicken
// • 1/2 tsp mineral salt
// • 1/2 tsp black pepper
// • 1/2 tsp onion powder

// Directions:
// Make sponge by combining water, discard, and flour. Allow it to ferment on the
// counter for 8 or more hours.
// After fermentation, preheat oven to 375. Grease your muffin tin.
// Add rest of muffin ingredients to sponge and mix well.
// In a pan over medium high heat, saute onions until translucent. Add chicken and
// stir for a minute. Add cream cheese and seasonings, stir until well combined.
// In your greased muffin tin, add batter to fill the hole half-way. Add a spoonful or
// two of the filling to each muffin. Cover with the rest of the batter.
// Bake for 15-18 minutes, let cool slightly, and enjoy!
