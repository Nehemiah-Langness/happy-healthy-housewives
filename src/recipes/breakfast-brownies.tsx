import { AffiliateLink } from '../components/AffiliateLink';
import type { Recipe } from '../types/recipe';

const recipe: Recipe = {
    title: 'Breakfast Brownies',
    tags: ['THM E', 'DF', 'GF'],
    dateAdded: new Date('2025-05-15'),
    brief: `We love our easy breakfasts! These dump, blend, and bake Breakfast Brownies are perfect for prep days or last minute breakfast!`,
    image: 'breakfast-brownies.jpg',
    quote: {
        person: 'Brianna',
        Quote: [
            <>Ok, this is another viral TikTok recipe that came my way and I just had to <AffiliateLink>THM</AffiliateLink> it. Baked “oatmeal” is very popular because it 
            essentially becomes breakfast cake! Who wouldn’t love that? This is a brownie version and it is so beautifully decadent you 
            won’t believe it’s an E meal!</>,
        ],
    },
    servings: 'Multiple',
    Ingredients: [
        '1 ripe banana',
        '2 cups of old fashioned oats',
        '1 cup of nut milk',
        '1/2 cup egg whites',
        '1/2 cup cocoa',
        <>3/4 cup <AffiliateLink>THM Gentle Sweet</AffiliateLink> (or Truvia)</>,
        '2 TBS coconut oil',
        '1 tsp vanilla extract',
        '1 tsp baking soda',
        'Dash of mineral salt',
    ],
    Directions: (
        <>
            <p>Preheat oven to 350&deg; F. Grease an 8x8 baking dish and set aside.</p>
            <p>Combine all ingredients in a blender and blend well. Pour batter into pre-greased dish.</p>
            <p>Bake for 20-30 minutes or until a knife comes out clean.</p>
            <p>Cool, slice, and store for easy breakfasts!</p>
        </>
    ),
};

export default recipe;
