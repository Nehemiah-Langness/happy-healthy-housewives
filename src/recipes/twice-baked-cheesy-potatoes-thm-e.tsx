import type { Recipe } from '../types/recipe';

const recipe: Recipe = {
    title: 'Twice Baked Cheesy Potatoes',
    tags: ['THM E', 'GF'],
    dateAdded: new Date('2025-05-20'),
    brief: `Trying to up your daily protein goals but also miss cheesy starchies? 
            All your dreams (and goals) are possible with Bri's Twice Baked Cheesy Potatoes!`,
    image: 'twice-baked-cheesy-potatoes.jpeg',
    quote: {
        person: 'Brianna',
        Quote: `Sometimes you just want to dive into a cheesy, decadent, delicious thing.  These twice baked potatoes allow you to do that AND meet your goals!
                These higher protein, lower calorie, THM E potatoes will leave you and your family completely satisfied!`,
    },
    Ingredients: [
        '8 Gold Yukon Potatoes',
        '1 cup low fat cottage cheese',
        '1/2 cup non-fat Greek yogurt',
        '2 TBS butter',
        '1/4 cup water',
        '2 tsp salt',
        '2 tsp pepper',
        '2 tsp garlic powder',
        '2 tsp onion powder',
        '1/2 cup - split of low skim mozzarella',
        'Optional add ins: cooked and diced turkey bacon or grilled chicken breasts',
    ],
    Directions: (
        <>
            <p>Preheat oven to 400&deg; F</p>
            <p>
                Gently spritz the potatoes with oil and sprinkle on salt. Poke each potato with a fork a few times. Bake in the oven for an
                hour or until soft to touch. (TIP: don't turn off the oven, you'll need it again!)
            </p>
            <p>Once baked, slice the potatoes in half. Gently scoop out the innards into a mixing bowl while leaving the skins intact.</p>
            <p>
                Combine all ingredients (minus mozzarella, potatoes, and add-ins) in a blender and blend well. Add to the mixing bowl with
                1/4 cup of mozzarella and optional chicken or turkey bacon. Stir until well combined.
            </p>
            <p>Spoon the mixture into the potato skins. Top with the remaining mozzarella and bake in the oven for 20-30 minutes.</p>
            <p>Serve warm and enjoy!</p>
        </>
    ),
};

export default recipe;
