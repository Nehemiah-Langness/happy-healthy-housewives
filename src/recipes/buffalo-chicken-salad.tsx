import type { Recipe } from '../types/recipe';
import { Optional } from '../components/Optional';
const recipe: Recipe = {
    title: 'Buffalo Chicken Salad',
    tags: ['THM S'],
    dateAdded: new Date('2025-05-22'),
    brief: `Spicy chicken honestly doesn't get any better than this chicken salad. This is sure to be a crowd favorite at your next pot luck!`,
    image: 'buffalo-chicken-salad.jpg',
    file: 'BuffaloChickenSalad.pdf',
    quote: {
        person: 'Brianna',
        Quote: [
            <>Do you love all things buffalo? This chicken salad is for you!</>,
            <>
                I recently fell in love with buffalo flavorings. Spicy and rich, what's not to love? One day I was craving some good buffalo
                flavors, and decided to whip this up. I thought it was delicious, and I hope you do too!
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
