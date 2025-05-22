import { Optional } from '../components/Optional';
import type { Recipe } from '../types/recipe';

const recipe: Recipe = {
    title: 'BLT Salad',
    tags: ['THM S', 'Keto Friendly', 'DF', 'GF'],
    dateAdded: new Date('2025-05-15'),
    brief: `There's no better combination than bacon, lettuce, and tomato. Make this into a super slimming salad and your summer lunches are set!`,
    image: 'blt-salad.jpg',
    file: 'BLTSalad.pdf',
    quote: {
        person: 'Brianna',
        Quote: [
            `Do you love BLT’s but want to avoid off plan items or a crossover? This salad will fulfill all your BLT flavor desires! I don’t 
            even miss the classic sandwich style BLT, and neither will you!`,
        ],
    },
    servings: 'Single Serving',
    Ingredients: [
        '1 bag of salad mix salad (or 2 cups chopped romaine)',
        '1/2 medium tomato, chopped',
        '3 slices of bacon, cooked and chopped',
        '1 Tbsp mayonnaise',
        '1/2 tsp mineral salt',
        '1/2 tsp black pepper',
        <>A sprinkle of shredded cheddar <Optional/></>,
    ],
    Directions: (
        <>
            <p>Mix all ingredients together in a large salad bowl. Enjoy cold!</p>
        </>
    ),
};

export default recipe;
