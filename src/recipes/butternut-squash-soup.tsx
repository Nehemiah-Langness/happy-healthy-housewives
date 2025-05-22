import { AcronymToggle } from '../components/AcronymToggle';
import { AffiliateLink } from '../components/AffiliateLink';
import { Optional } from '../components/Optional';
import type { Recipe } from '../types/recipe';

const recipe: Recipe = {
    title: 'Butternut Squash Soup',
    tags: ['THM E'],
    dateAdded: new Date('2025-05-22'),
    brief: `Butternut Squash Soup`,
    image: 'butternut-squash-soup.jpg',
    file: 'ButternutSquashSoup.pdf',
    quote: {
        person: 'Nehemiah',
        Quote: [
            <>
                This Recipe was missing, so I pieced it together from the website files, but Mandy and Brianna need to put in a nice quote
                here. Until then, enjoy this nice quote from me.
            </>,
        ],
    },
    servings: 'Multiple servings',
    Ingredients: [
        <>1 medium butternut squash, cut in half</>,
        <>Spritz of coconut oil cooking spray</>,
        <>1 large onion, diced</>,
        <>2 stalks of celery, diced</>,
        <>1 Tbsp of butter (or coconut oil)</>,
        <>5 cups of bone broth</>,
        <>1 tsp of <AffiliateLink>THM Super Sweet</AffiliateLink></>,
        <>1 tsp of garlic powder</>,
        <>1 tsp onion powder</>,
        <>1 tsp mineral salt</>,
        <>1 tsp black pepper</>,
        <>1/4 tsp cayenne pepper</>,
        <>1 tsp <AffiliateLink>THM Duo Greens Powder</AffiliateLink> <Optional/></>,
        <>2 tsp Baobab powder <Optional/></>,
        <>1 tsp Just Gelatin</>,
        <>1 scoop Whey Protein (or <AffiliateLink>THM Creamy Dreamy</AffiliateLink> protein for <AcronymToggle>DF</AcronymToggle>)</>,
    ],
    Directions: (
        <>
            <p>
                Preheat oven to 400 degrees. Cut the butternut squash in half and remove the seeds. Spritz the inside of the squash lightly
                with the cooking oil, and place meat side down on a baking sheet.
            </p>
            <p>Roast in the oven for 45 minutes to an hour.</p>
            <p>
                When the squash is close to being finished, place a large pot on your stove top over medium high heat. Add butter (or
                coconut oil), onion, and celery. Cook until tender. Remove from stove top and set aside.
            </p>
            <p>
                When the squash is soft, remove from the oven. Scrape out the squash with a spoon and place in that same large pot. Make
                sure to get all the goodies out!
            </p>
            <p>
                Once the squash is added, place pot back on the stove top and add broth, Super Sweet, onion powder, garlic powder, salt,
                pepper, cayenne, duo, Baobab, Whey, and gelatin.
            </p>
            <p>Take an immersion blender and blend it all until it's beautifully creamy! We want no chunks left behind! </p>
            <p>Bring to a soft boil, and then reduce to a simmer. Let simmer for 15 minutes and then serve hot. </p>
            <p>Enjoy!</p>
        </>
    ),
    Notes: (
        <>
            <p>
                If you do not have an immersion blender, you can place all items in a blender, blend, and then return to the pot to simmer.
            </p>
        </>
    ),
};

export default recipe;
