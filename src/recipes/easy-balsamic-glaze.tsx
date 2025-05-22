import { AffiliateLink } from '../components/AffiliateLink';
import type { Recipe } from '../types/recipe';

const recipe: Recipe = {
    title: 'Easy Balsamic Glaze',
    tags: ['THM FP', 'Keto Friendly', 'GF', 'DF'],
    dateAdded: new Date('2025-05-15'),
    brief: ``,
    image: 'easy-balsamic-glaze.jpg',
    file: 'EasyBalsamicGlaze.pdf',
    quote: {
        person: 'Brianna',
        Quote: [
            <>
                Have you ever been to a restaurant and had that ooey gooey, sweet, Balsamic added to your dish? Well, unfortunately, we love
                it so much because it’s laden with sugar! Not to worry, I got you covered with something just as delicious. Introducing this
                super easy Balsamic Glaze!
            </>,
        ],
    },
    servings: 'Multiple Servings',
    Ingredients: [
        <>1 cup No sugar added Balsamic Vinegar</>,
        <>
            1/4 cup of <AffiliateLink>THM Gentle Sweet</AffiliateLink> (or Truvia)
        </>,
    ],
    Directions: (
        <>
            <p>In a small sauce pan, add the Balsamic Vinegar and sweetener.</p>
            <p>
                Bring to a boil over high heat, then reduce to a simmer. Let simmer for 10-20 minutes. Take off heat and let cool
                completely.
            </p>
            <p>Store in a jar in the fridge and enjoy!</p>
        </>
    ),
};

export default recipe;
