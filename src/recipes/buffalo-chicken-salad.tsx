import type { Recipe } from '../types/recipe';
import { Optional } from '../components/Optional';
const recipe: Recipe = {
    title: 'Buffalo Chicken Salad',
    tags: ['THM S'],
    dateAdded: new Date('2025-05-22'),
    brief: `Buffalo Chicken Salad`,
    image: 'buffalo-chicken-salad.jpg',
    file: 'BuffaloChickenSalad.pdf',
    quote: {
        person: 'Nehemiah',
        Quote: [
            <>
                This Recipe was missing, so I pieced it together from the website files, but Mandy and Brianna need to put in a nice quote
                here. Until then, enjoy this nice quote from me.
            </>,
        ],
    },
    servings: 'Multiple',
    Ingredients: [
        <>1 can of chicken, drained</>,
        <>2 Tbsp mayonnaise</>,
        <>2 Tbsp hot sauce</>,
        <>1 Tbsp butter, melted (or coconut oil)</>,
        <>2 celery stalks, diced </>,
        <>1 tsp mineral salt</>,
        <>1 tsp black pepper</>,
        <>
            1 Tbsp blue cheese crumbles <Optional />
        </>,
    ],
    Directions: (
        <>
            <p>Mix all ingredients together in a bowl. Refrigerate until ready to serve!</p>
        </>
    ),
};

export default recipe;

