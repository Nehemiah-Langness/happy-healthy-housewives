import { AffiliateLink } from '../components/AffiliateLink';
import { IngredientList } from '../components/IngredientList';
import type { Recipe } from '../types/recipe';

const recipe: Recipe = {
    title: 'Apple Pie Oatmeal',
    tags: ['THM E'],
    dateAdded: new Date('2025-05-15'),
    brief: `Apple Pie Oatmeal`,
    image: 'apple-pie-oatmeal.jpg',
    file: 'ApplePieOatmeal.pdf',
    quote: {
        person: 'Nehemiah',
        Quote: [
            <>
                This Recipe was missing, so I pieced it together from the website files, but Mandy and Brianna need to put in a nice quote
                here. Until then, enjoy this nice quote from me.
            </>,
        ],
    },
    servings: 'Single Serving',
    Ingredients: [
        <IngredientList
            title='Topping'
            Ingredients={[
                <>1 small or 1/2 a large apple, diced</>,
                <>1 tsp cinnamon</>,
                <>
                    1 tsp <AffiliateLink>THM Gentle Sweet</AffiliateLink>
                </>,
                <>Splash of water</>,
            ]}
        />,
        <IngredientList
            title='Oatmeal'
            Ingredients={[
                <>1/4 cup Old Fashioned Oats</>,
                <>1/4 cup Steel Cut Oats (I buy the quick cook kind)</>,
                <>1 tsp psyllium flakes</>,
                <>1 tsp ground flaxseeds</>,
                <>1 tsp cinnamon</>,
                <>1 doonk (1/32 tsp) Pure Stevia</>,
                <>1/4 cup egg whites</>,
                <>1.5 cups water</>,
                <>1/2 tsp maple extract</>,
                <>1/2 tsp butter extract</>,
                <>10 raisins (optional, but so yummy!)</>,
            ]}
        />,
    ],
    Directions: (
        <>
            <p>Place all the ingredients for the topping in a saucepan and simmer until tender.</p>
            <p>
                Meanwhile, place all oatmeal ingredients in a small pot (I like to mix the dry ingredients before adding the wet
                ingredients). Bring to a boil.
            </p>
            <p>Pour oatmeal into a bowl and top with the apple topping. Enjoy!</p>
        </>
    ),
};

export default recipe;
