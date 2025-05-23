import type { Recipe } from '../types/recipe';

const recipe: Recipe = {
    title: 'Pumpkin Spice Coffee',
    tags: ['THM FP'],
    dateAdded: new Date('2025-05-22'),
    brief: `Fall is here and so are the long lines for a PSL. Whip it up at home with Bri's Fall coffee recipe!`,
    image: 'pumpkin-spice-coffee.jpg',
    file: 'PumpkinSpiceCoffee.pdf',
    quote: {
        person: 'Brianna',
        Quote: [
            <>
                Where are my pumpkin spice coffee fanatics? There's nothing I love more than curling up with a warm cup of Pumpkin Spice
                flavored coffee on a crisp fall morning or afternoon. It feels so special! Unfortunately, getting that big ol' sugary treat
                at your local coffee shop can spike your blood sugar. Here is my budget and THM friendly version for you to enjoy!
            </>,
        ],
    },
    servings: 'One 12 Cup Pot',
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
    similar: ['pumpkin-spice-frappa', 'pumpkin-spice-syrup']
};

export default recipe;
