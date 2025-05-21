import type { Recipe } from '../types/recipe';

const recipe: Recipe = {
    title: 'Brownie Batter Fruit Dip',
    tags: ['THM FP'],
    dateAdded: new Date('2025-05-20'),
    brief: `Want a tasty dessert that's easy and weight loss friendly? Look no further! 
            Bri's yogurt based dip is just the thing you need for your sweet cravings.`,
    image: 'brownie-batter-fruit-dip.jpg',
    quote: {
        person: 'Brianna',
        quote: `Are you someone who loves to lick the spoon when making brownies, cookies, or cake? Me too! 
            I created this dip to have all the deliciousness of brownie batter, while still helping you 
            achieve your goals! Don't worry, you don't have to resist licking the spoon!`,
    },
    servings: 'Single Serving',
    Ingredients: [
        '1/2 cup of low-fat Greek yogurt (or a dairy free yogurt)',
        '1/2 Tbsp of Cocoa Powder',
        '1 tsp THM Super Sweet (or more to taste)',
        '1/4 tsp vanilla extract',
        '1/4 tsp Cake Batter extract (optional, but gives a much better taste)',
        '1 pinch mineral salt',
    ],
    IngredientNotes: (
        <>
            <b>Note:</b> using the “dairy free” option for this recipe drastically reduces the protein content. Please consider adding a
            protein powder in the yogurt or in a drink to compensate.
        </>
    ),
    Directions: (
        <>
            <p>Mix all ingredients together in a small bowl. Enjoy!</p>
        </>
    ),
};

export default recipe;
