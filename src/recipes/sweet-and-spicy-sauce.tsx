import { AcronymToggle } from '../components/AcronymToggle';
import type { Recipe } from '../types/recipe';
import { LinkToRecipe } from '../components/LinkToRecipe';

const recipe: Recipe = {
    title: 'Sweet and Spicy Sauce',
    tags: ['THM S', 'THM FP'],
    dateAdded: new Date('2025-05-15'),
    brief: `Are you a Spicy Mama? You'll love this dipping sauce paired with everything you can imagine!`,
    image: 'sweet-and-spicy-sauce.jpg',
    file: 'SweetAndSpicySauce.pdf',
    quote: {
        person: 'Brianna',
        Quote: [
            <span>
                When I was pregnant with my first, I was <b>OBSESSED</b> with the sweet and spicy combination. I loved making breakfast
                burritos, adding hot sauce, and then drizzling a very small amount of maple syrup on them. I was dead set on recreating this
                flavor profile in a more balanced and weight loss friendly way.
            </span>,
            <span>
                We particularly enjoy this with breakfast food and to top our BLT salads, but try this with my{' '}
                <LinkToRecipe recipe='bris-chicken-tendies'>Chicken Tendies</LinkToRecipe> or{' '}
                <LinkToRecipe recipe='cauliflower-chicken-tenders'>Cauliflower Chicken Tenders</LinkToRecipe> and you will <b>NOT</b> be
                disappointed!
            </span>,
        ],
    },
    servings: 'Multiple',
    Ingredients: [
        <span>
            1/2 cup Sugar Free Mayonnaise (Greek Yogurt or <LinkToRecipe recipe='dairy-free-yogurt'>Dairy Free Yogurt</LinkToRecipe> for{' '}
            <AcronymToggle>FP</AcronymToggle>)
        </span>,
        '1/4 cup Hot Sauce',
        <span>
            1 1/2 tsp of <b>THM Super Sweet</b> (or <b>Pyure</b>)
        </span>,
        '1/2 tsp of Vanilla extract.',
        '1 pinch mineral salt.',
    ],

    Directions: (
        <>
            <p>Mix all ingredients together in a small bowl and enjoy!</p>
        </>
    ),
    Notes: (
        <>
            <p>This is fairly spicy, reduce the amount of hot sauce if you if you or your family only enjoy lightly spicy.</p>
        </>
    ),
};

export default recipe;
