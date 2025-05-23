import { AffiliateLink } from '../components/AffiliateLink';
import type { Recipe } from '../types/recipe';

const recipe: Recipe = {
    title: 'Fried Fish',
    tags: ['THM XO'],
    dateAdded: new Date('2025-05-22'),
    brief: `Toddlers, kids, teens, adults, who doesn't love a good piece of fried fish? Whip this up for your family and feel good about this healthier version of a deep fried favorite.`,
    image: 'fried-fish.jpg',
    file: 'FriedFish.pdf',
    quote: {
        person: 'Brianna',
        Quote: [
            <>Fried fish is one of those comfort foods we can all enjoy. It takes us back to times of fish fry's and family.</>,
            <>
                My mom loves fried fish, my husband loves fried fish, I love fried fish. After a rough day with my son, and fish on the menu
                for dinner, I felt the need for some comfort food. Not wanting to go off plan, I did some research on my trusty sourdough
                and this recipe was born!
            </>,
            <>
                It is simple, quick, easy, and takes no ferment time since it only uses discard! I hope it blesses your family as it has
                blessed mine!
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
