import type { Recipe } from '../types/recipe';

const recipe: Recipe = {
    title: 'Iced Chai Tea Latte Sipper',
    tags: ['Drinks and Sippers', 'THM FP', 'Keto Friendly', 'GF', 'DF'],
    dateAdded: new Date('2025-05-17'),
    brief: `Feel bougie as you sip on this delicious (and slightly caffeinated) chai tea latte while reading your favorite classic novel.`,
    image: 'chai-tea-latte-sipper.jpg',
    file: 'IcedChaiTeaLatteSipper.pdf',
    quote: {
        person: 'Brianna',
        Quote: [
            "When I first started THM, I found myself missing the sweet treat type coffee I'd save up my money to go purchase at large chains that shall not be named.",
            'I was determined to stay on plan, and decided that I should no longer be deprived of my sweet treats! This sipper is a product of my determination to enjoy my beautiful coffee.',
        ],
    },
    servings: '1 Quart',
    Ingredients: [
        '1 cup cold coffee',
        '2 cups of your favorite chai tea, brewed',
        'Ice',
        '1 -2 doonks (1/32 tsp) pure stevia',
        'pinch of mineral salt',
        '1/4 cup unsweetened nut milk',
    ],
    Directions: (
        <>
            <p>In a quart size cup, combine coffee, stevia, and mineral salt.</p>
            <p>Pour in the chai tea and stir well.</p>
            <p>Add ice as desired and top off with the unsweetened nut milk. </p>
            <p>Mix and enjoy!</p>
        </>
    ),
    Notes: (
        <>
            <p>I personally love Bigelow's Vanilla Chai for this sipper, but feel free to use your favorite chai!</p>
            <p>Unsweetened vanilla almond milk is particularly delicious with this.</p>
        </>
    ),
};

export default recipe;
