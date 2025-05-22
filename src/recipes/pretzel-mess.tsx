import { ExternalLink } from '../components/ExternalLink';
import type { Recipe } from '../types/recipe';

const recipe: Recipe = {
    title: 'Pretzel Mess',
    tags: ['THM XO', 'DF Option'],
    dateAdded: new Date('2025-05-15'),
    brief: `Sometimes the best recipes come from the biggest mistakes. Pretzel mess is a mix between a bark and a puppy chow, and entirely it's own thing!`,
    image: 'pretzel-mess.jpg',
    quote: {
        person: 'Brianna',
        Quote: [
            <>
                Oh boy, this recipe did not turn out how I planned but I am not mad about it! While trying to recreate these cute little
                pretzel treats my mother in law makes I found myself.. well.. making a mess. That didn’t stop my family from digging in!
                This recipe is all things salty, sweet, and good. Who needs sugar filled treat mixes?
            </>,
        ],
    },
    servingSize: '1/3 cup',
    Ingredients: [
        <>1/2 bag of Unique Sprouted Pretzels, crushed</>,
        <>
            1 full recipe of{' '}
            <ExternalLink to='https://wonderfullymadeanddearlyloved.com/white-chocolate-chips/'>
                Wonderfully Made and Dearly Loved white chocolate chips
            </ExternalLink>
        </>,
        <>1/2 bag of Lakanto Sugar-Free Chocolate Gems</>,
        <>3 Tbsp THM Gentle Sweet</>,
    ],
    Directions: (
        <>
            <p>Make the white chocolate chip recipe. Do not cool.</p>
            <p>Mix in the pretzels and chocolate candies.</p>
            <p>Spread out on a baking tray and cool in fridge.</p>
            <p>When partially cooled, remove and place in a bowl with THM Gentle Sweet. Shake well.</p>
            <p>Store in an airtight container.</p>
        </>
    ),
    Notes: (
        <>
            <p>If you’d like to make this dairy free, use this white chocolate recipe: <ExternalLink to='https://www.lowcarbsosimple.com/the-ultimate-dairy-free-sugar-free-white-chocolate/'>The Ultimate Diary Free/Sugar Free White Chocolate</ExternalLink></p>
        </>
    ),
};

export default recipe;
