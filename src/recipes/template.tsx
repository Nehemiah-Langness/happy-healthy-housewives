import type { Recipe } from '../types/recipe';

const recipe: Recipe = {
    title: "",
    tags: [],
    dateAdded: new Date('2025-05-15'),
    brief: ``,
    image: '',
    file: '',
    quote: {
        person: '',
        Quote: [
            <></>,
        ],
    },
    servings: '',
    servingSize: '',
    Ingredients: [
        <></>,
    ],
    IngredientNotes: (
        <>
            <b></b>
        </>
    ),
    Directions: (
        <>
            <p></p>
        </>
    ),
    Notes: (
        <>
            <p></p>
        </>
    ),
};

export default recipe;
