import { LinkToRecipe } from '../components/LinkToRecipe';
import type { Recipe } from '../types/recipe';

const recipe: Recipe = {
    title: 'Cauliflower Chicken Tenders',
    tags: ['THM S', 'Keto Friendly', 'DF', 'GF'],
    dateAdded: new Date('2025-05-15'),
    brief: `Get ready to crunch into these deliciously crispy chicken tenders! (Just don't let your family see the hidden veggies!)`,
    image: 'cauliflower-chicken-tenders.jpg',
    file: 'CauliflowerChickenTenders.pdf',
    quote: {
        person: 'Mandy',
        Quote: [
            `I love the taste of a good fried chicken tender. As a toddler, I begged my mom for “chicken and ketchup” everyday! 
            I even had a special song and dance to express my pure love (okay, a bit of an exaggeration but I really did sing and 
            dance for this. Anything to get a taste of the good stuff!)`,
            `After the complete overhaul of my nasty diet (see blog posts if you're wanting more detail!), I was never satisfied 
            with the healthier versions of my childhood favorite. Maybe they work if you can use parmesan, but I am currently 
            rocking a dairy free stage in my life. Turns out, the answer came from the simplest of places: cauliflower.`,
            `Now you can enjoy this truly guilt free treat while getting in a serving of veggies! Best of both worlds!`,
            <>
                TIP: try these out with Bri's <LinkToRecipe recipe='sweet-and-spicy-sauce'>Sweet and Spicy Sauce</LinkToRecipe> or{' '}
                <LinkToRecipe recipe='honey-mustard'>“Honey” Mustard</LinkToRecipe>. Then you can truly relive your childhood!
            </>,
        ],
    },
    servings: '4 servings',
    Ingredients: [
        '32 oz frozen cauliflower -dehydrated and ground into flour',
        '1/4 tsp baking powder',
        '1/4 c almond flour',
        '1/2 cup coconut flour',
        '1/2 tsp mineral salt',
        '1 tsp ground paprika',
        '1/2 tsp onion powder',
        '1/2 tsp garlic powder',
        '2 eggs',
        '4 chicken breasts, sliced into strips',
        '2 Tbsps coconut oil',
    ],
    Directions: (
        <>
            <p>
                PLAN AHEAD. Spread the frozen cauliflower on a parchment lined baking sheet in a single layer. Place in oven at 200F until
                dehydrated. Remove from oven and allow to cool. Place in food processor and grind until a fine powder.{' '}
            </p>
            <p>Set oven to 430&deg; F. Preheat a baking sheet in the oven with 1 Tbsp coconut oil. Leave in the oven while you work.</p>
            <p>
                To the cauliflower powder, add baking powder, almond flour, coconut flour, salt, paprika, onion powder, and garlic powder.
                Mix until well combined.
            </p>
            <p>In a separate bowl, beat the eggs. </p>
            <p>
                First, dip the chicken into the breading and coat. Then coat chicken with the egg. Finally, coat the chicken with another
                layer of breading (make sure it really sticks!). Set the tenders on a separate dish as you finish them.{' '}
            </p>
            <p>
                Carefully place the chicken tenders onto the heated baking sheet in a single layer. Cook for 10 minutes. Flip all the
                chicken tenders and add another Tbsp of coconut oil. Cook for 5-10 minutes (or until the coating is crisp and the chicken is
                cooked through).
            </p>
            <p>After removing from the oven, allow the tenders to rest on the pan for 5 minutes.</p>
            <p>
                Serve with our <LinkToRecipe recipe='sweet-and-spicy-sauce'>Sweet and Spicy Sauce</LinkToRecipe> or{' '}
                <LinkToRecipe recipe='honey-mustard'>“Honey” Mustard</LinkToRecipe> and your favorite sides!
            </p>
        </>
    ),
};

export default recipe;
