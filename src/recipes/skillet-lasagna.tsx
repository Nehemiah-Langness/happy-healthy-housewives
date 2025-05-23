import type { Recipe } from '../types/recipe';

const recipe: Recipe = {
    title: 'Skillet Lasagna',
    tags: ['THM S', 'Keto Friendly', 'DF', 'GF Option'],
    dateAdded: new Date('2025-05-15'),
    brief: `This one pot dish is way simpler than traditional pasta with the added benefits of slimming you down!`,
    image: 'skillet-lasagna.jpg',
    file: 'SkilletLasagna.pdf',
    quote: {
        person: 'Mandy',
        Quote: [
            <>
                This is one of our favorite family meals. It was a recipe from before I joined THM that I modified to be much more slimming!
                Plus, one pot means less dishes!
            </>,
            <>
                The choice of noodles is up to you! I love to have this with Hearts of Palm pasta, but my husband prefers <b>Dreamfields</b>{' '}
                lasagna sheets with lots of cheese.{' '}
            </>,
            <>Enjoy this one pot delicious dish that you and yours are sure to love!</>,
        ],
    },
    servings: '4 - 6 servings',
    Ingredients: [
        <>1 lb ground beef</>,
        <>6 &ndash; 8 oz ground mushrooms (optional, but adds some great hidden veggies)</>,
        <>1 yellow onion, diced</>,
        <>1 Tbsp chopped garlic</>,
        <>14 oz can of diced tomatoes</>,
        <>24 oz tomato sauce (3 of the small cans)</>,
        <>1 1/2 tsp Italian seasoning </>,
        <>1/2 tsp oregano</>,
        <>Salt and pepper to taste </>,
        <>
            1 box of <b>Dreamfields</b> lasagna sheets (or <b>Hearts of Palm Pasta</b>)
        </>,
        <>Mozzarella or ricotta (optional topping)</>,
    ],
    Directions: (
        <>
            <p>
                Brown the beef (and the mushrooms) in a pot and drain. Add the diced onion and cook until translucent, then add the chopped
                garlic.
            </p>
            <p>Add diced tomatoes, tomato sauce, Italian seasoning, oregano, salt, and pepper.</p>
            <p>
                Pull the lasagna sheets out of the box and break if half as you add them to the pot. Allow to cook until the pasta is
                tender.
            </p>
        </>
    ),
};

export default recipe;
