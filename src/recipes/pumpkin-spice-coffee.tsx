import type { Recipe } from '../types/recipe';

const recipe: Recipe = {
    title: 'Pumpkin Spice Coffee',
    tags: ['THM FP'],
    dateAdded: new Date('2025-05-22'),
    brief: `Pumpkin Spice Coffee`,
    image: 'pumpkin-spice-coffee.jpg',
    file: 'PumpkinSpiceCoffee.pdf',
    quote: {
        person: 'Nehemiah',
        Quote: [
            <>
                This Recipe was missing, so I pieced it together from the website files, but Mandy and Brianna need to put in a nice quote
                here. Until then, enjoy this nice quote from me.
            </>,
        ],
    },
    servings: 'One 12 Cup Pot',
    servingSize: '',
    Ingredients: [<>12 TBS of coffee grounds</>, <>2 TBS of Pumpkin Pie Spice </>],
    Directions: (
        <>
            <p>Place coffee grounds and pumpkin spice in zippy bag. Shake to mix well. </p>
            <p>Make coffee according to coffee maker directions.</p>
            <p>Use all at once or store leftover coffee for later. </p>
            <p>Enjoy!</p>
        </>
    ),
    Notes: (
        <>
            <p>Pumpkin Pie Spice is equal parts nutmeg, ginger, cinnamon, and clove.</p>
            <p>
                Enjoy this coffee as a latte by heating almond milk or cream with sweetener of choice for 15 seconds. Whip with a milk
                frother. Pour over coffee and top with cinnamon.
            </p>
        </>
    ),
};

export default recipe;
