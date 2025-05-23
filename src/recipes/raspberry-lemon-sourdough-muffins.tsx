import { AffiliateLink } from '../components/AffiliateLink';
import type { Recipe } from '../types/recipe';

const recipe: Recipe = {
    title: 'Raspberry Lemon Sourdough Muffins',
    tags: ['THM E'],
    dateAdded: new Date('2025-05-22'),
    brief: `Sweet berries balance perfectly with a tart lemon and a good sourdough. Whip this up for your morning breakfast with no ferment time!`,
    image: 'raspberry-lemon-sourdough-muffins.jpg',
    file: 'RaspberryLemonSourdoughMuffins.pdf',
    quote: {
        person: 'Mandy',
        Quote: [
            <>
                I love sourdough, but I hate the planning of sourdough. I made this recipe using discard specifically to avoid the "Oh
                shoot!" feeling of not planning your breakfast a day in advance. You can use whatever mix ins you like, but Raspberry and
                lemon make a delicious flavor profile.
            </>,
        ],
    },
    servings: '8 large muffins',
    Ingredients: [
        <>2 cups ACTIVE sourdough starter</>,
        <>3 Tbsp egg whites</>,
        <>1 tsp vanilla extract</>,
        <>1 tsp lemon extract</>,
        <>1/4 tsp mineral salt</>,
        <>1/4 cup unsweetened applesauce </>,
        <>
            1/2 cup <AffiliateLink>THM Gentle Sweet</AffiliateLink> (or 1/2 tsp pure stevia){' '}
        </>,
        <>1 tsp aluminum free baking soda</>,
        <>1/4 cup fresh or frozen raspberries (I like to do a mix of black and red) </>,
        <>1 tsp coconut oil </>,
        <>
            Sprinkle of <AffiliateLink>THM Gentle Sweet</AffiliateLink> (to top the muffins){' '}
        </>,
    ],
    Directions: (
        <>
            <p>Preheat oven to 400&deg; F. Grease a muffin tin with cooking spray.</p>
            <p>
                Add sourdough starter, egg whites, extracts, salt and sweetener to mixing bowl and beat on low until combined. Add in
                applesauce, mixing on low until combined. Add baking soda and mix on low until batter begins to bubble up and grow in size.
                Gently fold in the raspberries.{' '}
            </p>
            <p>Pour the mixture into the muffin tin, filling each cup about 3/4 of the way.</p>
            <p>Bake for 15 minutes, or until a toothpick poked into the center comes out clean.</p>
            <p>
                Remove from oven, brush melted coconut oil and a sprinkle of THM Gentle Sweet on top of the muffins. Place back into the
                oven for 2 minutes, or until the tops are crisp.{' '}
            </p>
            <p>Remove from oven and allow to cool for 2 minutes, then remove muffins from tin and allow them to fully cool on a rack.</p>
        </>
    ),
};

export default recipe;

// Ingredients:
// • 2 cups ACTIVE sourdough starter
// • 3 Tbsp egg whites
// • 1 tsp vanilla extract
// • 1 tsp lemon extract
// • ¼ tsp mineral salt
// • ¼ cup unsweetened applesauce
// • ½ cup THM Gentle Sweet (or ½ tsp pure stevia)
// • 1 tsp aluminum free baking soda
// • ¼ cup fresh or frozen raspberries (I like to do a mix of black and red)
// • 1 tsp coconut oil
// • Sprinkle of THM Gentle Sweet (to top the muffins)

// Instructions:
// Preheat oven to 400℉. Grease a muffin tin with cooking spray.
// Add sourdough starter, egg whites, extracts, salt and sweetener to mixing bowl and
// beat on low until combined. Add in applesauce, mixing on low until combined.
// Add baking soda and mix on low until batter begins to bubble up and grow in size.
// Gently fold in the raspberries.
// Pour the mixture into the muffin tin, filling each cup about ¾ of the way.
// Bake for 15 minutes, or until a toothpick poked into the center comes out clean.
// Remove from oven, brush melted coconut oil and a sprinkle of THM Gentle Sweet
// on top of the muffins. Place back into the oven for 2 minutes, or until the tops are
// crisp.
// Remove from oven and allow to cool for 2 minutes, then remove muffins from tin
// and allow them to fully cool on a rack.
