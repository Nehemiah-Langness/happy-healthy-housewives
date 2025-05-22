import { AffiliateLink } from '../components/AffiliateLink';
import type { Recipe } from '../types/recipe';

const recipe: Recipe = {
    title: "Peaches n' Cream Oatmeal",
    tags: ['THM E'],
    dateAdded: new Date('2025-05-15'),
    brief: `Peaches n' Cream Oatmeal`,
    image: 'peaches-n-cream-oatmeal.png',
    file: 'PeachesNCreamOatmeal.pdf',
    quote: {
        person: 'Nehemiah',
        Quote: [
            <>
                This Recipe was missing, so I pieced it together from the website files, but Mandy and Brianna need to put in a nice quote
                here. Until then, enjoy this nice quote from me.
            </>,
        ],
    },
    servings: '1 Serving',
    Ingredients: [
    <>1/2 cup of old fashioned oats</>,
    <>1 cup unsweetened vanilla nut milk (or unsweetened nut milk please read note*)</>,
    <>1 ripe, fresh, Peach diced</>,
    <>1 tsp Whole Husk Psyllium Flakes</>,
    <>1 tsp Baobab</>,
    <>1 TBS Unflavored Whey Protein Powder</>,
    <>Pinch of mineral salt</>,
    <>1 TBS <AffiliateLink>THM Gentle Sweet</AffiliateLink> (or Truvia)</>,
],

    Directions: (
        <>
            <p>In a small sauce pan combine oats, psyllium flakes, almond milk, and baobab.</p>
            <p>Add the diced peaches, scraping your cutting board or dish to get as much juice as
            possible in the pot.</p>
            <p>Bring to a boil over high heat, then reduce to a simmer. Simmer for 3 minutes.</p>
            <p>Remove pot from stove and let sit for 5-10 minutes.</p>
            <p>Pour the oats into a bowl, and stir in the whey protein, salt, and gentle sweet.
            Sit down and enjoy!</p>
        </>
    ),
    Notes: (
        <>
            <p>
                *The vanilla flavor is very important in this dish. If you only have unflavored nut milk, add a teaspoon of vanilla extract
                to your pot before cooking.
            </p>
            <p>
                *Fresh peaches take this dish to the next level. You can try it with frozen peaches, but it will not have the same affect.
            </p>
        </>
    ),
};

export default recipe;
