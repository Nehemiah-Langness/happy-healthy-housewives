import { LinkToRecipe } from '../components/LinkToRecipe';
import type { Recipe } from '../types/recipe';

const recipe: Recipe = {
    title: "Mandy's Famous Salsa",
    tags: ['THM FP', 'Keto Friendly', 'DF', 'GF'],
    dateAdded: new Date('2025-05-15'),
    brief: `Get your blue corn chips and Trim Mamarita and dig in to this delicious homemade salsa!`,
    image: 'mandys-famous-salsa.jpg',
    file: 'MandysFamousSalsa.pdf',
    quote: {
        person: 'Mandy',
        Quote: [
            <>
                Okay, maybe famous is an overstatement. But in my family, its a pretty big deal! As a child, I was the salsa maker for our
                household. What used to be my mother’s recipe quickly became my masterpiece. Now that I’ve moved away, all my family members
                are still asking for the recipe!
            </>,
            <>This is a very smooth salsa. If you’d like a chunky consistency, you can dice all the ingredients and mix together.</>,
            <>
                P.S. This recipe pairs great with a <LinkToRecipe recipe='trim-mamarita'>Trim Mamarita</LinkToRecipe>!
            </>,
        ],
    },
    servings: '8 cups',
    Ingredients: [
        <>1 (28oz) can of diced tomatoes</>,
        <>2 (10oz) can of diced tomatoes and green chilies (we prefer Rotel Original)</>,
        <>1/2 yellow onion</>,
        <>3 garlic cloves (or 1 Tbsp of minced garlic)</>,
        <>1 1/2 tsp mineral salt</>,
        <>1/2 tsp black pepper</>,
        <>2 Tbsp lime juice</>,
        <>Fresh cilantro</>,
    ],
    Directions: (
        <>
            <p>
                Place all ingredients into a blender and blend until well mixed. Serve with your favorite blue corn or baked tortilla chips!
            </p>
            <p>Tastes best after resting in the fridge overnight.</p>
        </>
    ),
    Notes: (
        <>
            <p>
                This makes a very smooth salsa. If you would like a chunky consistency, you can dice all the ingredients separately and mix
                together.
            </p>
        </>
    ),
};

export default recipe;
