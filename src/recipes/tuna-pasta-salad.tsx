import type { Recipe } from '../types/recipe';
import { Footnote } from '../components/Footnote';
import { AcronymToggle } from '../components/AcronymToggle';

const recipe: Recipe = {
    title: 'Tuna Pasta Salad',
    tags: ['THM S'],
    dateAdded: new Date('2025-05-22'),
    brief: `Bri's take on a family favorite. Perfect to have on hand for lunches during a busy Summer!`,
    image: 'tuna-pasta-salad.jpg',
    file: 'TunaPastaSalad.pdf',
    quote: [],
    servings: '6-8 Servings',
    Ingredients: [
        <>
            One box of Dreamfields Elbow noodles
            <Footnote />
        </>,
        <>Two cans of tuna, drained</>,
        <>1 Green Bell Pepper</>,
        <>2 Stalks of Celery </>,
        <>1/2 an Onion </>,
        <>1 and 1/2 tsp of mineral salt </>,
        <>1 tsp of Black Pepper</>,
        <>
            1 Cup Mayo
            <Footnote count={2} />
        </>,
    ],
    Directions: (
        <>
            <p>In a large pot, boil pasta according to directions on box. Drain and rinse under cold water to cool, then set aside.</p>
            <p>While pasta is cooking and cooling, chop pepper, celery, and onion into bite sized pieces. </p>
            <p>
                In a small fry pan, sauté onion for a few minutes with a bit of oil (this is an optional step but takes away a bit of the
                bite of raw onion).{' '}
            </p>
            <p>
                In a large mixing bowl, combine all ingredients. Mix well. Place in a sealed container and put in fridge a half hour before
                desired eating time.{' '}
            </p>
        </>
    ),
    Notes: (
        <>
            <p>
                <Footnote /> Other on plan pasta may be used but may make this dish a crossover rather than an{' '}
                <AcronymToggle>S</AcronymToggle>.{' '}
            </p>
            <p>
                <Footnote count={2} /> You can lighten this dish by using 1/2 cup of Mayo, and a 1/2 cup of 0% Greek yogurt or our Almond
                Milk Yogurt.
            </p>
        </>
    ),
};

export default recipe;
