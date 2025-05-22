import { AcronymToggle } from '../components/AcronymToggle';
import { Optional } from '../components/Optional';
import type { Recipe } from '../types/recipe';

const recipe: Recipe = {
    title: 'Grilled Burritos',
    tags: ['THM E', 'THM S', 'THM XO'],
    dateAdded: new Date('2025-05-22'),
    brief: `Grilled Burritos`,
    image: 'grilled-burritos.jpg',
    file: 'GrilledBurritos.pdf',
    quote: {
        person: 'Nehemiah',
        Quote: [
            <>
                This Recipe was missing, so I pieced it together from the website files, but Mandy and Brianna need to put in a nice quote
                here. Until then, enjoy this nice quote from me.
            </>,
        ],
    },
    servings: '6 burritos',
    Ingredients: [
        <>1 pound of ground beef</>,
        <>Low Carb tortillas (or sourdough for <AcronymToggle>E</AcronymToggle> or <AcronymToggle>XO</AcronymToggle>)</>,
        <>1/2 tsp Salt</>,
        <>1/2 tsp Black pepper</>,
        <>1 tsp Chili Powder</>,
        <>1 tsp Garlic powder</>,
        <>1 tsp Onion powder</>,
        <>1 tsp Paprika</>,
        <>1 tsp Cumin</>,
        <>1 dash of Cayenne Pepper</>,
        <>1 can of Green Enchilada Sauce</>,
        <>
            1 can of low-fat Refried Beans (optional for <AcronymToggle>E</AcronymToggle> or <AcronymToggle>XO</AcronymToggle>)
        </>,
        <>
            Favorite Burrito Toppings <Optional reason='See note below' />
        </>,
        <></>,
    ],
    Directions: (
        <>
            <p>
                In a large saucepan, brown the ground beef over high heat. Drain off some of the grease if needed. Add salt, pepper, chili,
                garlic, onion, paprika, cumin, and cayenne. Mix well.
            </p>
            <p>
                Place meat and optional Refried Beans in tortillas, fold by tucking two tail ends in and rolling over while tucking the top
                in. Spray a fry pan with cooking oil and set to medium heat. Place filled tortilla seam side down on the pan. Once browned,
                flip over and brown other side.{' '}
            </p>
            <p>
                When both sides are browned, remove from pan and top with enchilada sauce and cheese (if using). Microwave for 20 seconds,
                or until cheese is melted. Top with favorite toppings and veggies.{' '}
            </p>
        </>
    ),
    Notes: (
        <>
            <p>
                Favorite toppings may include cheese, sour cream, lettuce, tomatoes, salsa, guacamole, or anything else your heart desires!
            </p>
        </>
    ),
};

export default recipe;
