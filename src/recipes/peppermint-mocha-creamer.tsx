import { AcronymToggle } from '../components/AcronymToggle';
import { AffiliateLink } from '../components/AffiliateLink';
import type { Recipe } from '../types/recipe';

const recipe: Recipe = {
    title: 'Peppermint Mocha Creamer',
    tags: ['THM S', 'THM FP'],
    dateAdded: new Date('2025-05-22'),
    brief: `It's that time of year again when coffee shops are filled with sugar laden Peppermint Mochas. Whip this up at home and save your waistline (and your budget)!`,
    image: 'peppermint-mocha-creamer.jpg',
    file: 'PeppermintMochaCreamer.pdf',
    quote: {
        person: 'Brianna',
        Quote: [
            <>
                The holiday season is here, and with it comes those wonderful holiday flavors! You all already know I'm a huge coffee nut I
                used to be that girl in love with the specialty holiday drinks! So here is my version of a Peppermint Mocha Creamer that is
                totally supporting of your goals and health!
            </>,
        ],
    },
    servings: 'Multiple Servings',
    Ingredients: [
        <>
            1 half gallon of half and half (or equal amounts of nut milk for <AcronymToggle>DF</AcronymToggle> or{' '}
            <AcronymToggle>FP</AcronymToggle> option)
        </>,
        <>2 Tbsp Cocoa Powder</>,
        <>1 tsp Peppermint Extract</>,
        <>
            1/4 cup <AffiliateLink>THM Gentle Sweet</AffiliateLink>
        </>,
    ],
    Directions: (
        <>
            <p>
                In a small saucepan heat the half and half (or nut milk) over medium low heat, stirring constantly to make sure it doesn't
                burn.
            </p>
            <p>
                Once hot, add in the cocoa, peppermint extract, and Gentle Sweet. Use a milk frother, immersion blender, or a whisk to
                combine.
            </p>
            <p>Taste and add more sweetener or peppermint if necessary.</p>
            <p>Remove from heat and let cool.</p>
            <p>Store in the fridge and enjoy!</p>
        </>
    ),
    Notes: (
        <>
            <p>Make sure to give your creamer a shake before pouring in your coffee.</p>
            <p>
                I like to make mine fairly sweet so I don't need to add anymore sweetener, but you can make it without sweetener and add it
                to individual cups if you'd like.
            </p>
        </>
    ),
};

export default recipe;
