import type { Recipe } from '../types/recipe';

const recipe: Recipe = {
    title: '',
    titleAlt: '',
    tags: [],
    dateAdded: new Date('2025-05-15'),
    brief: ``,
    image: '',
    file: '',
    quote: {
        person: '',
        Quote: [<></>],
    },
    servings: '',
    servingSize: '',
    ingredients: [],
    Ingredients: [<></>],
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
    similar: [],
    redirects: [],
};

export default recipe;
