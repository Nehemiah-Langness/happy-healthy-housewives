import type { Recipe } from '../types/recipe';

const recipe: Recipe = {
    title: 'Sweetie Lentil Soup',
    tags: ['THM E', 'GF', 'DF'],
    dateAdded: new Date('2025-05-15'),
    brief: `Need a dish that's comforting and filled with nutrients? Turn your methylation system on with the humble superfood, lentils!`,
    image: 'sweetie-lentil-soup.jpg',
    file: 'SweetieLentilSoup.pdf',
    quote: {
        person: 'Mandy',
        Quote: [
            <span>
                If you've been listening to the <b>Trim Healthy Mama Podcast</b>, you'll know how amazing lentils are for the body. For you
                new peeps, lentils are a methylation superfood! They are chock full of bioavailable folates which support your body's detox
                system.
            </span>,
            `This soup has been my obsession since my mother-in-law whipped this together a few months ago. I cook up a batch weekly to have 
        on hand for lunches or snacks! It's the perfect thing for these cold days after fake Spring.`,
        ],
    },
    servings: '6-8 servings',
    Ingredients: [
        '2 Tbsp. coconut oil',
        '1 tsp. cumin',
        '1 tsp. turmeric',
        '1 Tbsp. curry powder',
        '1 large yellow onion, diced',
        '3 pinches of mineral salt and black pepper',
        '4 tsp. chopped garlic',
        '2 Tbsp. fresh ginger, minced',
        '2 sweet potatoes, diced',
        '1 red bell pepper, diced',
        '2 cups red lentils, soaked and rinsed',
        '6 cups vegetable broth',
        'Chopped cilantro',
    ],
    IngredientNotes: (
        <>
            <b></b>
        </>
    ),
    Directions: (
        <>
            <p>
                In a large pot, heat coconut oil, cumin, turmeric, and curry until fragrant. Add diced onion, salt, and pepper. Sauté until
                translucent.
            </p>
            <p>Add garlic, ginger, sweet potatoes, and bell pepper. Cook until tender.</p>
            <p>Add lentils and broth. Bring stew to a boil then simmer for 20 minutes.</p>
            <p>Finally, add the chopped cilantro to garnish each bowl.</p>
            <p>Enjoy on its own or with your favorite E bread!</p>
        </>
    ),
    Notes: (
        <>
            <p>
                The lentils may provide enough protein for the majority. However, you may add some collagen and/or baobab to the individual
                bowls if you feel imbalanced.
            </p>
        </>
    ),
};

export default recipe;
