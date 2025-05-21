import type { Recipe } from '../types/recipe';

const recipe: Recipe = {
    title: 'Tropical Good Girl Moonshine',
    tags: ['Drinks and Sippers', 'THM FP', 'Keto Friendly', 'DF', 'GF'],
    dateAdded: new Date('2025-05-15'),
    brief: `The perfect drink for hot summer days! Filled with superfood hydration, Brianna's take on the classic GGMS is sure to rock your world!`,
    image: 'tropical-ggms.jpg',
    file: 'TropicalGoodGirlMoonshine.pdf',
    quote: {
        person: 'Brianna',
        Quote: [
            <span>
                Good Girl Moonshine is probably my favorite sipper from the <b>Trim Healthy Mama</b> cookbooks. You can make it different
                every day, it’s great for your skin, and aids in digestion. This variation was created out of a need for an extra boost in
                hydration! Coconut water is extremely hydrating, and the tropical theme of this variation followed. Sip on this{' '}
                <b>Tropical GGMS</b> this summer and be transported straight to the beach!
            </span>,
        ],
    },
    servings: '32oz All Day Sipper',
    Ingredients: [
        '1 to 2 TBS apple cider vinegar (with the Mother)',
        '1 tsp ground ginger',
        '1/4 cup of coconut water',
        '2 doonks (1/32tsp) pure stevia',
        '1/2 tsp of Pineapple extract',
        '1/2 tsp of coconut extract',
        '1/2 tsp of cherry or strawberry extract',
        '1 tsp of Baobab powder',
        'Water',
        'Ice',
    ],
    Directions: (
        <>
            <p>
                Place apple cider vinegar, ginger, baobab, stevia, and coconut water into a large mason jar or cup. Mix well. Add water and
                ice until glass is full.
            </p>
            <p>Sip on all day and enjoy!</p>
        </>
    ),
};

export default recipe;
