import { AffiliateLink } from '../components/AffiliateLink';
import { IngredientList } from '../components/IngredientList';
import type { Recipe } from '../types/recipe';

const recipe: Recipe = {
    title: 'Pumpkin Baked Oatmeal',
    tags: ['THM E', 'GF', 'DF Option'],
    dateAdded: new Date('2025-05-15'),
    brief: `The months are ending in "ber" and we are ready for our pumpkin! Whip up this baked breakfast and enjoy the delicious flavors of the season.`,
    image: 'pumpkin-baked-oatmeal.jpg',
    quote: {
        person: 'Brianna',
        Quote: [
            `After trying my first baked oatmeal recipe, I KNEW one had to be created for Fall! This Pumpkin Baked Oatmeal is as delicious as pumpkin 
            bread and a healthy E meal! Enjoy your carbs with all the flavors of Fall!`,
        ],
    },
    servings: '8 servings',
    Ingredients: [
        <IngredientList
            title='Base'
            Ingredients={[
                '1 Banana',
                '2 cups old fashioned oats',
                '1/2 cup unsweetened nut milk',
                '1/2 cup pumpkin puree',
                '1/2 cup egg whites',
                '2 tsp Pumpkin Pie Spice (equal parts clove, cinnamon, nutmeg, and ginger)',
                '1 tsp baking soda',
                <>
                    3/4 cup <AffiliateLink>THM Gentle Sweet</AffiliateLink> (or Truvia)
                </>,
                '2 TBS coconut oil (melted)',
                <>
                    4 TBS whey or <AffiliateLink>THM Creamy Dreamy protein</AffiliateLink>
                </>,
                'pinch of mineral salt',
            ]}
        />,
        <IngredientList
            title='Frosting'
            Ingredients={[
                '5 wedges of LLCC cheese, room temp (or 5 Tbsps of DF cream cheese)',
                <>1 Tbsp <AffiliateLink>THM Super Sweet</AffiliateLink> (or Pyure)</>,
                '2 Tbsp unsweetened nut milk',
            ]}
        />,
    ],
    Directions: (
        <>
            <p>Preheat oven to 350&deg; F.</p>
            <p>Place all base ingredients in a blender and blend together.</p>
            <p>Pour into a greased 8x8 baking dish and bake for 20-30 minutes.</p>
            <p>
                In a small bowl combine all frosting ingredients (if you’re having trouble combining it, try microwaving in short
                increments!)
            </p>
            <p>When oatmeal is completely cool, frost the top.</p>
            <p>Place in fridge for 20 minutes, slice and enjoy or store!</p>
        </>
    ),
};

export default recipe;
