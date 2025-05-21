import { AcronymToggle } from '../components/AcronymToggle';
import { LinkToRecipe } from '../components/LinkToRecipe';
import type { Recipe } from '../types/recipe';

const recipe: Recipe = {
    title: '"Honey" Mustard',
    tags: ['THM FP', 'Keto Friendly', 'DF', 'GF'],
    dateAdded: new Date('2025-05-15'),
    brief: `If you love the sweetness of honey mustard but you also love your thin waistline, this sauce is for you!`,
    image: 'honey-mustard.jpg',
    file: 'HoneyMustard.pdf',
    quote: {
        person: 'Brianna',
        Quote: [
            `As a child I was a huge honey mustard nut. I loved it so much I couldn’t stand to have it run out and would “make my own” by just mixing pure honey and mustard!`,
            <span>
                This is a much more blood sugar friendly version, and most importantly, can be paired with all fuels! Enjoy this drizzled on
                a salad, dunking your <LinkToRecipe recipe='bris-chicken-tendies'>Chicken Tendies</LinkToRecipe>, or even on your{' '}
                <AcronymToggle>E</AcronymToggle> sandwich!{' '}
            </span>,
        ],
    },
    servings: 'Multiple Servings',
    Ingredients: [
        '1/2 cup of Yellow Mustard',
        <span>
            4 TBS of Low Fat Greek Yogurt (or <LinkToRecipe recipe='dairy-free-yogurt'>Dairy Free Yogurt</LinkToRecipe> for{' '}
            <AcronymToggle>DF</AcronymToggle>)
        </span>,
        '1 tsp of THM Super Sweet (or Pyure)',
        '1/4  tsp of Garlic Powder',
        '1/2 tsp of Onion Powder',
        '2 pinches of salt',
    ],

    Directions: (
        <>
            <p>Mix all ingredients together in a small bowl, and enjoy!</p>
        </>
    ),
};

export default recipe;
