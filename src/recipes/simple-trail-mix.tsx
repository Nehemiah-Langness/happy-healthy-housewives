import { AcronymToggle } from '../components/AcronymToggle';
import type { Recipe } from '../types/recipe';

const recipe: Recipe = {
    title: 'Simple Trail Mix',
    tags: ['THM S', 'Keto Friendly', 'DF', 'GF'],
    dateAdded: new Date('2025-05-15'),
    brief: `Quick, easy, and healthy! Whip up our Simple Trail Mix before your summer road trips for a delicious on-the-go snack!`,
    image: 'simple-trail-mix.jpg',
    quote: {
        person: 'Brianna',
        Quote: [
            `Do you love trail mix but don't love all the sugary items that are often added to it? This recipe is all thing indulgent, sweet, and salty! You'll never feel the need to buy a trail mix again when you can just easily mix up your own!`,
        ],
    },
    servings: '',
    servingSize: '',
    Ingredients: [
        <>1 container of mixed nuts</>,
        <>1 package of Lily's Salted Caramel Chips</>,
        <>1 bag of no sugar added Dried Blueberries (or other no sugar added Dried berry of choice)</>,
    ],
    Directions: (
        <>
            <p>Add all ingredients to a plastic bag and mix well. Enjoy with the whole family!</p>
        </>
    ),
    Notes: (
        <>
            <p>
                If you choose to add a dried fruit over berries, it will change the fuel type of the trail mix to{' '}
                <AcronymToggle>XO</AcronymToggle>
            </p>
        </>
    ),
};

export default recipe;
