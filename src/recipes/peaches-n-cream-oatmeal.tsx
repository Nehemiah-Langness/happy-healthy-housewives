import { AffiliateLink } from '../components/AffiliateLink';
import { Footnote } from '../components/Footnote';
import type { Recipe } from '../types/recipe';

const recipe: Recipe = {
    title: "Peaches n' Cream Oatmeal",
    tags: ['THM E'],
    dateAdded: new Date('2025-05-15'),
    brief: `Sweet juicy peaches n' cream poured atop a hot bowl of oatmeal, you'll be craving this all Summer long!`,
    image: 'peaches-n-cream-oatmeal.png',
    file: 'PeachesNCreamOatmeal.pdf',
    quote: {
        person: 'Brianna',
        Quote: [
            <>Summer brings with it delicious, juicy, peaches. Is there anything better than a good peach?</>,
            <>
                This bowl of oatmeal brings the classic flavor of peaches and cream, without creating a crossover! Your taste buds, and your
                waistline, will SING!
            </>,
        ],
    },
    servings: '1 Serving',
    Ingredients: [
        <>1/2 cup of old fashioned oats</>,
        <>
            1 cup unsweetened vanilla nut milk (or unsweetened nut milk
            <Footnote />)
        </>,
        <>
            1 ripe, fresh, Peach diced
            <Footnote count={2} />
        </>,
        <>1 tsp Whole Husk Psyllium Flakes</>,
        <>1 tsp Baobab</>,
        <>1 TBS Unflavored Whey Protein Powder</>,
        <>Pinch of mineral salt</>,
        <>
            1 TBS <AffiliateLink>THM Gentle Sweet</AffiliateLink> (or Truvia)
        </>,
    ],

    Directions: (
        <>
            <p>In a small sauce pan combine oats, psyllium flakes, almond milk, and baobab.</p>
            <p>Add the diced peaches, scraping your cutting board or dish to get as much juice as possible in the pot.</p>
            <p>Bring to a boil over high heat, then reduce to a simmer. Simmer for 3 minutes.</p>
            <p>Remove pot from stove and let sit for 5-10 minutes.</p>
            <p>Pour the oats into a bowl, and stir in the whey protein, salt, and gentle sweet. Sit down and enjoy!</p>
        </>
    ),
    Notes: (
        <>
            <p>
                <Footnote /> The vanilla flavor is very important in this dish. If you only have unflavored nut milk, add a teaspoon of
                vanilla extract to your pot before cooking.
            </p>
            <p>
                <Footnote count={2} /> Fresh peaches take this dish to the next level. You can try it with frozen peaches, but it will not
                have the same affect.
            </p>
        </>
    ),
    similar: ['apple-pie-oatmeal', 'superfood-oatmeal'],
};

export default recipe;
