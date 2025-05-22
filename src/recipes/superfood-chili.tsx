import type { Recipe } from '../types/recipe';

const recipe: Recipe = {
    title: 'Superfood Chili',
    tags: ['THM S', 'GF', 'DF'],
    dateAdded: new Date('2025-05-15'),
    brief: `As the weather gets cooler, there's nothing better than a big pot of chili simmering on the stove. Why not take that chance to give yourself a superfood boost?`,
    image: 'superfood-chili.jpg',
    file: 'SuperfoodChili.pdf',
    quote: {
        person: 'Mandy',
        Quote: [
            <>
                This has easily become one of my family’s favorite meals. With all the goodness jam packed, I can rest assured knowing my
                family is getting their nutrition in!
            </>,
            <>
                In each bowl, you’re getting cauliflower, mushrooms, baobab, and gelatin. All amazing immune boosters (making this a great
                dish for Flu season!).
            </>,
            <>
                Of course, you can leave out the superfoods in this recipe and have a wonderful bowl of chili. But, this makes a super easy
                way to sneak some veggies into your kids (or hubs, in my case)!
            </>,
        ],
    },
    servings: '4 servings',
    Ingredients: [
        <>1lb ground beef</>,
        <>8oz mushrooms</>,
        <>1 green bell pepper, diced</>,
        <>1 yellow onion, diced</>,
        <>1 12oz package of frozen cauliflower rice</>,
        <>2 Tbsp chili powder</>,
        <>2 tsp onion powder</>,
        <>2 squirts of liquid aminos</>,
        <>Dash of cayenne pepper</>,
        <>1/8 tsp mineral salt</>,
        <>1/8 tsp black pepper</>,
        <>1 14oz can diced tomatoes</>,
        <>1 14oz can of Dark Red Kidney Beans</>,
        <>16 oz water</>,
        <>1 Tbsp Baobab powder</>,
        <>2 tsp gelatin</>,
    ],
    Directions: (
        <>
            <p>In a large pot, cook the ground beef and mushrooms together until the meat is browned. Drain the fat.</p>
            <p>
                Add in the diced onion, bell pepper, cauliflower rice, chili powder, onion powder, liquid aminos, mineral salt, black
                pepper, and cayenne pepper. Cook until the onion is translucent.
            </p>
            <p>Add in the cans of tomato, kidney beans, and water. Bring to a boil.</p>
            <p>Add in the gelatin and Baobab, stirring until well combined. Allow to simmer for 20 minutes.</p>
            <p>Enjoy!</p>
        </>
    ),
};

export default recipe;
