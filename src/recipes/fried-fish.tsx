import { AffiliateLink } from '../components/AffiliateLink';
import type { Recipe } from '../types/recipe';

const recipe: Recipe = {
    title: 'Fried Fish',
    tags: ['THM XO'],
    dateAdded: new Date('2025-05-22'),
    brief: `Fried Fish`,
    image: 'fried-fish.jpg',
    file: 'FriedFish.pdf',
    quote: {
        person: 'Nehemiah',
        Quote: [
            <>
                This Recipe was missing, so I pieced it together from the website files, but Mandy and Brianna need to put in a nice quote
                here. Until then, enjoy this nice quote from me.
            </>,
        ],
    },
    servings: 'Approximately 8 fillets',
    Ingredients: [
        <>1 bag of white fish fillets, defrosted</>,
        <>1 cup sourdough discard</>,
        <>1/2 tsp Baking Soda</>,
        <>2 tsp Salt</>,
        <>2 tsp Pepper</>,
        <>2 tsp chili powder</>,
        <>2 tsp paprika</>,
        <>2 tsp onion powder</>,
        <>Avocado oil (or other on plan high heat oil)</>,
    ],
    Directions: (
        <>
            <p>Lay out your white fish fillets and pat dry with a paper towel.</p>
            <p>
                In a small bowl mix 1 tsp each of salt, pepper, chili powder, paprika, and onion powder. Sprinkle on each side of the fish
                and rub in.
            </p>
            <p>In a medium to large size bowl, mix the discard, baking soda, and remaining seasonings.</p>
            <p>In a fry pan over high heat, pour in the avocado oil just enough to cover the bottom of the pan.</p>
            <p>Take your fish filet and place in the discard mixture. Swirl around until the filet is well coated.</p>
            <p>
                Once your oil is hot, place the filet in the oil. Fry each side for 2-5 minutes. Serve with a delicious sauce (Try our Sweet
                and Spicy sauce!) and some non-starchie veggies!
            </p>
        </>
    ),
    Notes: (
        <>
            <p>
                Frying is a part of life and can be used in the <AffiliateLink>Trim Healthy Mama</AffiliateLink> plan. However, it is not
                recommended you eat fried food often. Enjoy this dish as a once or twice a month treat!
            </p>
        </>
    ),
};

export default recipe;
