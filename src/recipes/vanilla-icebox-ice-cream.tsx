import { LinkToRecipe } from '../components/LinkToRecipe';
import type { Recipe } from '../types/recipe';

const recipe: Recipe = {
    title: 'Vanilla Icebox Ice Cream',
    tags: ['THM FP', 'Keto Friendly', 'DF', 'GF'],
    dateAdded: new Date('2025-05-15'),
    brief: `Sometimes you don't want to wait for a delicious bowl of ice cream. Try out this Dairy Free Ice Cream recipe that only uses a blender!`,
    image: 'vanilla-icebox-ice-cream.jpg',
    file: 'VanillaIceboxIceCream.pdf',
    quote: {
        person: 'Mandy',
        Quote: [
            <>
                I am so excited to share this recipe! I've been wanting to make my own ice cream since I'm currently rocking the Dairy Free
                lifestyle. Let me tell ya, dairy free and sugar free ice cream is expensive and filled with fillers that upset my stomach.
                So, after much trial and error, I made my own. Plus, it's a Trim Healthy Mama Fuel Pull and can be paired with any meal!
            </>,
            <>I hope this recipe blesses your movie watching nights!</>,
            <>
                <b>
                    This recipe was updated on 7/28/21 to remove the almond milk and increase the yogurt to 1/2 cup. I found this makes a
                    much thicker ice cream.{' '}
                </b>
            </>,
        ],
    },
    servings: 'Single Serving',
    Ingredients: [
        <>1 cup of nut milk ice cubes</>,
        <>1 Tbsp coconut cream</>,
        <>
            1/2 cup <LinkToRecipe recipe='dairy-free-yogurt'>Dairy Free Yogurt</LinkToRecipe>
        </>,
        <>3 doonks (1/32 tsp) pure stevia</>,
        <>1/2 tsp vanilla extract</>,
        <>Pinch of mineral salt</>,
    ],
    Directions: (
        <>
            <p>Place all ingredients into a blender and blend until smooth!</p>
        </>
    ),
    Notes: (
        <>
            <p>You can make almond milk ice cubes by placing unsweetened almond milk into ice cube molds and freezing.</p>
            <p>I use a Vitamix blender and it works great. I cannot assure this will work with any blender.</p>
            <p>
                If you enjoy this recipe, try out <LinkToRecipe recipe='mocha-icebox-ice-cream'>Mocha Icebox Ice Cream</LinkToRecipe>
            </p>
        </>
    ),
};

export default recipe;
