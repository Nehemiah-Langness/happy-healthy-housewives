import { AcronymToggle } from '../components/AcronymToggle';
import type { Recipe } from '../types/recipe';

const recipe: Recipe = {
    title: 'Spicy Creamy Penne',
    tags: ['THM S', 'GF', 'DF Option'],
    dateAdded: new Date('2025-05-15'),
    brief: `Sneak your family two whole servings of vegetables with this pasta recipe! Believe me, they'll love it!`,
    image: 'spicy-creamy-penne.jpg',
    file: 'SpicyCreamyPenne.pdf',
    quote: {
        person: 'Mandy',
        Quote: [
            <>
                My family loves pasta. I love making healthy versions of our favorites, especially now that most of my family is on board
                with Trim Healthy Mama. This recipe was inspired by my mama, who has mastered the art of hiding veggies.
            </>,
        ],
    },
    servings: '4-6 Servings',
    Ingredients: [
        <>
            1 package <b>Dreamfields Penne</b> (or <AcronymToggle>FP</AcronymToggle> noodle of choice. Can use brown rice noodles for{' '}
            <AcronymToggle>XO</AcronymToggle>)
        </>,
        <>1 lb. Spicy Italian Sausage</>,
        <>1 Tbsp. chopped garlic</>,
        <>8 ozs. Mushrooms, sunned and ground</>,
        <>1 yellow onion, diced</>,
        <>1 green pepper, diced</>,
        <>1 eggplant, ground in food processor</>,
        <>40 oz. canned tomato sauce</>,
        <>2 tsp. Italian seasoning</>,
        <>1 tsp. oregano</>,
        <>Salt and pepper to taste</>,
        <>1/2 to 3/4 cup of half and half or coconut milk (add to desired creaminess)</>,
    ],
    Directions: (
        <>
            <p>Cook pasta according to directions. Drain and set aside.</p>
            <p>
                Throw all vegetables and sausage in a pot and cook until sausage is done, then drain grease. Add tomato sauce and
                seasonings, stir till simmering.
            </p>
            <p>Add milk, return to simmer.</p>
            <p>Serve over pasta and enjoy!</p>
        </>
    ),
};

export default recipe;
