import type { Recipe } from '../types/recipe';

const recipe: Recipe = {
    title: 'Crunchwrap',
    tags: ['THM S', 'THM XO', 'Keto Friendly', 'DF Option'],
    dateAdded: new Date('2025-05-15'),
    brief: `Who doesn't love this crunchy, cheesy (or not if you're DF), deep fried meal from the bell? Now you can enjoy a healthier option at home created by Bri!`,
    image: 'crunchwrap.jpg',
    file: 'Crunchwrap.pdf',
    quote: {
        person: 'Brianna',
        Quote: [
            `When I started my Trim Healthy journey, I really loved finding my former favorites and recreating them in a healthier (and cheaper) way! This crunchwrap 
            was one of the very first recipes I attempted, and I'm quite proud with the turn out! No need to hit up that drive thru!`,
        ],
    },
    servings: 'Single Serving',
    Ingredients: [
        <>2 Low carb tortillas</>,
        <>Beef, cooked and seasoned to liking</>,
        <>Shredded cheddar (or a baked tostada for the XO option)</>,
        <>Taco toppings (such as chopped tomatoes, lettuce, salsa, sour cream, etc)</>,
    ],
    Directions: (
        <>
            <p>
                Place a fry pan over medium high heat and let get hot. If using, add shredded cheddar to the pan to form a disk. Let it cook
                until browned, then flip. Place fried cheese disk on paper towels to blot off excess oil, then let cool completely. (For XO
                option, skip cheese frying step)
            </p>
            <p>
                In a low carb tortilla, layer your crunchwrap. Beef, cheese, or baked tostada, and then your toppings as you'd like. Be sure
                not to overfill, or you'll have a hard time folding.
            </p>
            <p>
                Take another low carb tortilla and cut a small circle out of it. Place in the middle of your unfolded crunch wrap, then
                crimp the edges in a hexagonal pattern to form the crunch wrap.
            </p>
            <p>
                Spray the pan with a little oil, and carefully place the crunch wrap top down. Let it crisp up by cooking for about 5
                minutes or until nice and browned. Spray the bottom of the crunch wrap with a little oil then flip and let that brown.
            </p>
            <p>Serve and enjoy!</p>
        </>
    ),
};

export default recipe;
