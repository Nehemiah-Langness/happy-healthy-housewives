import { AffiliateLink } from '../components/AffiliateLink';
import { IngredientList } from '../components/IngredientList';
import { Optional } from '../components/Optional';
import type { Recipe } from '../types/recipe';

const recipe: Recipe = {
    title: 'Apple Pie Oatmeal',
    tags: ['THM E'],
    dateAdded: new Date('2025-05-15'),
    brief: `Fall flavors aren't just about Pumpkin! If you're an apple nut, you have to try Mandy's Apple Pie Oatmeal`,
    image: 'apple-pie-oatmeal.jpg',
    file: 'ApplePieOatmeal.pdf',
    quote: {
        person: 'Mandy',
        Quote: [
            <>
                I love eating a hot breakfast every morning and oatmeal not only satisfies but fuels your body in the best ways. Some people
                think Fall is all about the pumpkin, but I'm all about the apples. Apple cider? Amazing. Baked apples? Even better. Cinnamon
                apples on top of my favorite breakfast? Heaven. If you're an apple nut like me, try it out! You'll be nourishing your body
                in the best way to start your day.
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
                <>
                    10 raisins <Optional reason='Optional, but so yummy!' />
                </>,
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
