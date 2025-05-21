import { IngredientList } from '../components/IngredientList';
import type { Recipe } from '../types/recipe';

const recipe: Recipe = {
    title: 'Apple Streusel Baked Oatmeal',
    tags: ['THM E', 'GF', 'DF'],
    dateAdded: new Date('2025-05-15'),
    brief: `For most, Fall brings flavors of pumpkin; but what about those who prefer apple spice to pumpkin spice? 
            Say hello to our newest baked oatmeal, Apple Streusel!`,
    image: 'apple-streusel-baked-oatmeal.jpg',
    quote: {
        person: 'Brianna',
        Quote: [
            `This one is for all you pumpkin haters (don’t worry, I won’t tell anyone!) Apple is another Fall staple 
            that was begging to be turned into a delicious baked oatmeal. This baked oatmeal has all the sweetness of apple 
            and the specialness of coffee cake, without all the unwanted additives! You’ll feel like you’re sitting at a coffee house when you take a bite!`,
        ],
    },
    servings: '8 Servings',
    Ingredients: [
        <IngredientList
            title='Base'
            Ingredients={[
                '1/2 cup of unsweetened applesauce',
                '2 cups Old Fashioned Oats',
                '1/2 cup unsweetened nut milk',
                '1/2 cup egg whites',
                '3/4 cup THM Gentle Sweet(or Truvia)',
                '1 tsp cinnamon',
                '1 tsp baking soda',
                '1 Tbsp coconut oil',
                '4 Tbsp Whey Protein or THM Creamy Dreamy Hemp Protein',
                '1 tsp of vanilla or caramel extract',
                '1/2 medium apple, diced',
            ]}
        />,
        <IngredientList
            title='Topping'
            Ingredients={[
                '1 Tbsp coconut oil, melted',
                '2 Tbsp THM Baking Blend(or oat flour)',
                '2 Tbsp THM Gentle Sweet (or Truvia)',
                '1/2 tsp cinnamon',
            ]}
        />,
    ],

    Directions: (
        <>
            <p>Preheat oven to 350&deg; F and grease an 8X8 pan.</p>
            <p>
                <b>Make the base: </b>In a blender, add all base ingredients except the medium apple pieces. Blend well and pour into the
                pan.
            </p>
            <p>Gently fold in the apple pieces.</p>
            <br />
            <p>
                <b>Make the topping: </b> Combine all ingredients. It should be very sandy and crumbly.
            </p>
            <p>Sprinkle over top the oatmeal. You can use a knife to swirl in the mixture.</p>
            <p>Bake for 20-30 minutes or until a toothpick pulls out clean.</p>
            <p>Cool and store in an airtight container in the fridge!</p>
        </>
    ),
};

export default recipe;
