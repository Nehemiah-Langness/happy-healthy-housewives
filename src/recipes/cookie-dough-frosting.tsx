import { AffiliateLink } from '../components/AffiliateLink';
import type { Recipe } from '../types/recipe';

const recipe: Recipe = {
    title: 'Cookie Dough Frosting',
    tags: ['THM S', 'Keto Friendly', 'GF', 'DF Option'],
    dateAdded: new Date('2025-05-15'),
    brief: `Satisfy your cookie dough cravings without jeopardizing your health with this frosting recipe!`,
    image: 'cookie-dough-frosting.jpg',
    file: 'CookieDoughFrosting.pdf',
    quote: {
        person: 'Brianna',
        Quote: [
            `Ok… It’s probably just this pregnancy, but making a Cookie Dough Frosting that is on plan had 
            been all I could think about for weeks! I’m so proud of this recipe. This frosting is fluffy, 
            indulgent, and tastes JUST like chocolate chip cookie dough! It will make an excellent middle 
            layer filling for cake, and is an amazing topping for your S cupcakes. BUT we won’t judge if you 
            just want to eat it out of the bowl!`,
        ],
    },
    servings: 'Multiple Servings',
    Ingredients: [
        <>2 sticks butter, softened (you may use a vegan butter replacement)</>,
        <>
            1/2 cup <AffiliateLink>THM Gentle Sweet</AffiliateLink> (or <b>Truvia</b>), powdered
        </>,
        <>4 Tbsp of nut milk</>,
        <>
            3 Tbsp of <AffiliateLink>THM Baking Blend</AffiliateLink>
        </>,
        <>1 tsp black strap molasses</>,
        <>1 tsp vanilla extract</>,
        <>Pinch of mineral salt</>,
        <>
            1/4-1/2 cup of sugar free chocolate chips (like <b>Lilys</b> or <b>Trim Healthy Mama brands</b>)
        </>,
    ],
    Directions: (
        <>
            <p>In your mixer or with a hand mixer, beat together butter and sweetener until well combined.</p>
            <p>
                Add the remaining ingredients (excluding chocolate chips) and whip on medium to medium high speed until the mixture is light
                in color, well combined, and easily spreadable.
            </p>
            <p>Slowly fold in the chocolate chips.</p>
            <p>Spread over your favorite dessert!</p>
        </>
    ),
    Notes: (
        <>
            <p>I used a paddle attachment on my kitchen aid mixer and it worked beautifully! I highly recommend using that. </p>
            <p>
                You can powder your sweetener by placing it in a coffee grinder and grinding until it is a fine powder. This helps the
                frosting not become grainy.{' '}
            </p>
        </>
    ),
};

export default recipe;
