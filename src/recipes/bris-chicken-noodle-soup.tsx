import { AcronymToggle } from '../components/AcronymToggle';
import { AffiliateLink } from '../components/AffiliateLink';
import { Optional } from '../components/Optional';
import type { Recipe } from '../types/recipe';

const recipe: Recipe = {
    title: "Bri's Chicken Noodle Soup",
    tags: ['THM S', 'THM XO'],
    dateAdded: new Date('2025-05-22'),
    brief: `Bri's Chicken Noodle Soup`,
    image: 'bris-chicken-noodle-soup.jpg',
    file: 'BrisChickenNoodleSoup.pdf',
    quote: {
        person: 'Nehemiah',
        Quote: [
            <>
                This Recipe was missing, so I pieced it together from the website files, but Mandy and Brianna need to put in a nice quote
                here. Until then, enjoy this nice quote from me.
            </>,
        ],
    },
    servings: '4-6 servings',
    Ingredients: [
        <>1 quart chicken bone broth</>,
        <>1 quart water</>,
        <>1 can chicken</>,
        <>1 large carrot, chopped</>,
        <>2 stalks celery, chopped</>,
        <>1 small onion, chopped</>,
        <>1 tsp olive oil</>,
        <>2 tsp mineral salt</>,
        <>1 tsp garlic powder</>,
        <>1/2 tsp onion powder</>,
        <>2 1/2 Tbsp nutritional yeast</>,
        <>1 Tbsp parsley</>,
        <>Pinch of cayenne pepper</>,
        <>
            1/2 Box of on plan pasta (use <b>Dreamfields</b> for <AcronymToggle>S</AcronymToggle> or brown rice and quinoa for{' '}
            <AcronymToggle>XO</AcronymToggle>)
        </>,
        <>
            1 healing tsp Baobab powder and 1/2 tsp <AffiliateLink>THM Duo Greens</AffiliateLink>. <Optional />
        </>,
    ],

    Directions: (
        <>
            <p>
                Over high heat in a soup pot, saute the onion, carrot, and celery with the olive oil until tender. Add the rest of the
                ingredients, except the pasta, to the pot.
            </p>
            <p>Bring to a boil then reduce to a simmer for 10 minutes.</p>
            <p>Bring the soup back up to a light boil and add the pasta. Cook as directed by the box, stirring occasionally.</p>
            <p>Once the pasta is tender, the soup is ready to serve! Enjoy!</p>
        </>
    ),
};

export default recipe;
