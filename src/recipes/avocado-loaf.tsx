import { AffiliateLink } from '../components/AffiliateLink';
import { Optional } from '../components/Optional';
import type { Recipe } from '../types/recipe';

const recipe: Recipe = {
    title: 'Avocado Loaf',
    tags: ['THM S'],
    dateAdded: new Date('2025-05-22'),
    brief: `Avocado Loaf`,
    image: 'avocado-loaf.jpg',
    file: 'AvocadoLoaf.pdf',
    quote: {
        person: 'Nehemiah',
        Quote: [
            <>
                This Recipe was missing, so I pieced it together from the website files, but Mandy and Brianna need to put in a nice quote
                here. Until then, enjoy this nice quote from me.
            </>,
        ],
    },
    servings: '8 servings',
    Ingredients: [
        <>2 ripe avocados</>,
        <>
            3/4-1 cup <AffiliateLink>THM Gentle Sweet</AffiliateLink> or Truvia (depending on how sweet you like things)
        </>,
        <>3 Eggs</>,
        <>1 tsp Vanilla Extract</>,
        <>
            1 cup <AffiliateLink>THM Baking Blend</AffiliateLink> (or equal parts coconut flour, almond flour, and ground flax)
        </>,
        <>1/4 cup Integral Collagen</>,
        <>1 1/2 tsp Baking Powder</>,
        <>1 pinch of mineral salt</>,
        <>
            1/4-1/2 cup of on plan chocolate chips <Optional />
        </>,
    ],

    Directions: (
        <>
            <p>Preheat oven to 350 degrees and grease a loaf tin.</p>
            <p>In a mixing bowl, cream together avocado and sweetener. Add in eggs and vanilla and mix well.</p>
            <p>
                In a separate bowl, combine <AffiliateLink>THM Baking Blend</AffiliateLink>, Collagen, baking powder, and salt. Slowly fold
                the dry into the wet ingredients until well combined. Fold in the chocolate chips too, if adding.
            </p>
            <p>Bake for 35-40 minutes. Allow to fully cool before cutting into slices.</p>
        </>
    ),
    Notes: (
        <>
            <p>
                I always find gluten free treats taste better after spending the night in the fridge. If you don't like it fresh out of the
                oven, put it in the fridge for a night and see if you like it then!
            </p>
        </>
    ),
};

export default recipe;
