import { AcronymToggle } from '../components/AcronymToggle';
import { AffiliateLink } from '../components/AffiliateLink';
import type { Recipe } from '../types/recipe';

const recipe: Recipe = {
    title: "Trim Mama Bailey's",
    tags: ['Drinks and Sippers', 'THM S', 'Keto Friendly', 'DF', 'GF'],
    dateAdded: new Date('2025-05-15'),
    brief: `No need to miss out on sugary sweet adult drinks! Whip up a batch of this Trim Mama Bailey's and enjoy your Irish Coffee without the guilt!`,
    image: 'trim-mama-baileys.jpg',
    file: 'TrimMamaBaileys.pdf',
    quote: {
        person: 'Mandy',
        Quote: [
            `As St. Patrick’s Day approaches, I’m embracing all things in my Irish Heritage. Celtic Christian music has been on repeat and we may or may 
            not have had corned beef multiple weeks in a row. The one thing I was missing out on was a delicious afternoon cuppa with some Bailey’s.  
            Fun fact, Bailey’s Coffee was the first drink I had on my 21st birthday!`,
            `So, like many times before, I went into my kitchen and began experimenting to make a healthier version of my favorite treat. You bet I 
            danced when I finally found the magical mix! If you feel like you’ve been missing out, or even if you’ve been splurging on the store bought 
            sugar filled version, this is for you. Simple to whip up and delicious all the time.`,
            `Besides, who doesn’t love a good Irish coffee?`,
        ],
    },
    servings: 'Multiple Servings',
    Ingredients: [
        <>
            1/3 cup of <AffiliateLink>THM Gentle Sweet</AffiliateLink> (or Truvia)
        </>,
        '1/4 tsp instant espresso powder',
        '1/2 Tbsp cocoa powder',
        <>1 cup of heavy cream (see note for <AcronymToggle>DF</AcronymToggle> version)</>,
        '1/2 tsp almond extract',
        '1/4 tsp vanilla extract',
        '3/4 cup Irish Whiskey',
    ],
    Directions: (
        <>
            <p>
                Add sweetener, espresso powder, cocoa powder, and heavy cream to a saucepan and bring to a boil. Allow to simmer for 10-15
                minutes.
            </p>
            <p>Remove from heat, add whiskey and extracts. Allow to cool before enjoying.</p>
        </>
    ),
    Notes: (
        <>
            <p>For a Dairy Free version, you can use Silk Heavy Whipping Cream or use 1 cup of almond milk, 1/3 cup of coconut oil.</p>
            <p>
                Store this in your fridge to prevent spoiling. You may notice it settles into a pudding like consistency. Just spoon a bit
                into your drink and enjoy!
            </p>
        </>
    ),
};

export default recipe;
