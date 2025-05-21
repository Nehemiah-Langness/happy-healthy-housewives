import { Link } from 'react-router';
import type { Recipe } from '../types/recipe';

const recipe: Recipe = {
    title: "Brianna's Summer Salad",
    tags: ['THM S', 'THM XO', 'Keto Friendly', 'GF', 'DF'],
    dateAdded: new Date('2025-05-18'),
    brief: `Seasons are changing and most of the country is warming up; it's the perfect time to enjoy a fresh citrus salad!`,
    image: 'briannas-summer-salad.jpg',
    file: 'BriannasSummerSalad.pdf',
    quote: {
        person: 'Brianna',
        quote: `This is probably my all time favorite salad. It's equally indulgent as it is bursting with freshness! 
        To me, it screams summer is here! `,
    },
    servings: 'Single Serving',
    Ingredients: [
        '1 chicken breast  ',
        '1/4 tsp of mineral salt',
        '1/4 tsp of black pepper',
        '1/4 tsp of garlic powder',
        '1 to 2 cups of romaine lettuce or salad mix',
        '2 Tbsp goat cheese',
        '3-4 chopped strawberries (or other fruit as pictured for XO)',
        <span>
            1 Tbsp <Link to='/recipes/thm-fp/easy-balsamic-glaze/'></Link> (or sugar free balsamic vinegar if you like it to be less sweet){' '}
        </span>,
    ],
    Directions: (
        <>
            <p>Season your chicken breast with salt, pepper, and garlic powder and cook in a pan over medium high. Chop then set aside.</p>
            <p>
                In a large bowl or dinner plate, place lettuce, goat cheese, and fruit. Add the chopped chicken, and drizzle with the
                balsamic glaze.
            </p>
            <p>Enjoy!</p>
        </>
    ),
};

export default recipe;
