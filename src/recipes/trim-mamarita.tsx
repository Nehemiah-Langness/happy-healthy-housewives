import type { Recipe } from '../types/recipe';
import { ExternalLink } from '../components/ExternalLink';

const recipe: Recipe = {
    title: 'Trim Mamarita',
    tags: ['Drinks and Sippers', 'THM FP', 'Keto Friendly', 'DF', 'GF'],
    dateAdded: new Date('2025-05-15'),
    brief: `Summer time means having a cocktail in your hand and your toes in the sand! Who says that drink can't trim you down?`,
    image: 'trim-mamarita.webp',
    file: 'TrimMamarita.pdf',
    quote: {
        person: 'Mandy',
        Quote: [
            `Oh mamas, I am so excited to finally get to share this recipe. I created it one night when my husband and I were 
            looking for an  excuse to go out to a Mexican restaurant just so we can indulge in their sugar-laden margaritas. 
            Neither one of us like to dine-out, so this craving was a serious deal! We went to multiple grocery stores to get 
            the goods (everywhere was sold out of orange bitters!), and we both agree it was worth the trials. `,
            <span>
                Tequila is the best “on-plan” alcohol for the <b>Trim Healthy Mama Lifestyle</b>. The sugars used to make tequila are called
                “agavins”, which have been shown in{' '}
                <ExternalLink to='https://pubmed.ncbi.nlm.nih.gov/25367106/'>clinical trials</ExternalLink> to not raise your blood sugar.
                It's also a pro-biotic and a pre-biotic, meaning it provides the nutrients for the probiotics to grow!
            </span>,
            `There are many other health benefits to tequila, but I don't think I need to give you any reason to love this drink!`,
        ],
    },
    servings: 'Single Serving',
    Ingredients: [
        '1-2 fl oz Tequila',
        '2 fl oz lime juice',
        '5 drops of orange bitters',
        '1-2 doonks (1/32 tsp) pure stevia',
        '1 cup ice cubes (or 1/2 cup water for on the rocks)',
    ],
    Directions: (
        <>
            <p>In a large wine glass, combine Tequila, lime juice, orange bitters, and Stevia.</p>
            <p>If enjoying a frozen margarita, throw into a blender with ice until smooth.</p>
            <p>If enjoying on the rocks, add water and mix well. Add ice to the glass.</p>
            <p>Enjoy!</p>
        </>
    ),
    Notes: (
        <>
            <p>
                You can rub a lime over the lip of your glasses and roll through Erythritol to enjoy a “sugared” rim, or mineral salt for a
                salted rim.
            </p>
            <p>If you're making this on the rocks, taste and see if it's too strong. If so, just add more water!</p>
        </>
    ),
    redirects: ['mamaritas'],
    similar: ['trim-sangarita']
};

export default recipe;
