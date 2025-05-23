import { AcronymToggle } from '../components/AcronymToggle';
import { AffiliateLink } from '../components/AffiliateLink';
import { IngredientList } from '../components/IngredientList';
import type { Recipe } from '../types/recipe';

const recipe: Recipe = {
    title: 'Pumpkin Cheesecake Swirl',
    tags: ['THM S', 'Keto Friendly', 'GF', 'DF Option'],
    dateAdded: new Date('2025-05-15'),
    brief: `Wow your friends and family with this beautiful AND delicious Pumpkin Cheesecake Swirl! So simple and easy, it's sure to be your favorite Thanksgiving dessert!`,
    image: 'pumpkin-cheesecake-swirl.jpg',
    file: 'PumpkinCheesecakeSwirl.pdf',
    quote: {
        person: 'Mandy',
        Quote: [
            <>
                I love making Pumpkin Rolls with delicious cream cheese frosting. It's actually a specialty of mine to show up with a
                Pumpkin Roll for the holidays! Sometimes, though, you just don't have the time (or you want something a little different).
            </>,
            <>
                Here is my new favorite creation: <b>Pumpkin Cheesecake Swirl</b>! All the wonderful flavors of a pumpkin roll in a whole
                new look.{' '}
            </>,
        ],
    },
    servings: '2 pies for multiple servings',
    Ingredients: [
        <IngredientList
            title='Cake'
            Ingredients={[
                <>1 1/2 cups canned pumpkin puree</>,
                <>4 large eggs</>,
                <>4 Tbsp butter (or coconut oil), softened</>,
                <>
                    3/4 <AffiliateLink>THM Baking Blend</AffiliateLink>
                </>,
                <>
                    3/4 cup <AffiliateLink>THM Gentle Sweet</AffiliateLink> (or Truvia)
                </>,
                <>
                    1/8 tsp <AffiliateLink>THM Pure Stevia</AffiliateLink>
                </>,
                <>1 1/2 tsp vanilla extract</>,
                <>1 tsp baking powder</>,
                <>2 pinches mineral salt</>,
                <>1 Tbsp pumpkin pie spice (equal mix of cinnamon, nutmeg, cloves, and ginger)</>,
            ]}
        />,
        <IngredientList
            title='Cheesecake Batter'
            Ingredients={[
                <>
                    1/2 cup <AffiliateLink>THM Gentle Sweet</AffiliateLink> (or Truvia)
                </>,
                <>
                    1/4 tsp <AffiliateLink>THM Glucomannan</AffiliateLink> (or xanthan gum)
                </>,
                <>1 egg</>,
                <>
                    8 oz cream cheese (or a <AcronymToggle>DF</AcronymToggle> sub), softened{' '}
                </>,
                <>1/2 tsp caramel extract </>,
                <>1/4 cup unsweetened nut milk</>,
            ]}
        />,
    ],
    Directions: (
        <>
            <p>Preheat oven to 375&deg; F. Spray a pie dish with coconut oil (or olive oil).</p>
            <p>
                <b>For the cake:</b> in a medium bowl, mix together pumpkin puree, eggs, butter, and vanilla. Set aside.
            </p>
            <p>In another bowl, mix together Baking Blend, Gentle Sweet, Stevia, baking powder, mineral salt, and pumpkin pie spice. </p>
            <p>Mix the dry ingredients with the wet ingredients until well combined.</p>
            <p>Set aside.</p>
            <p>
                <b>For the Cheesecake batter:</b> Using a mixer, beat together the cream cheese and egg. Add in Gentle Sweet, Glucomannan,
                caramel extract, and almond milk. Mix until well combined.
            </p>
            <p>
                In two pie dishes, equally pour the cake batter into the bottom of the pans and smooth. Spoon the cheesecake batter over the
                tops.
            </p>
            <p>Using a knife, gently swirl the two layers together.</p>
            <p>Bake for 20-25 minutes and allow to cool on the counter before placing in the fridge overnight to set up fully.</p>
        </>
    ),
    Notes: (
        <>
            <p>You can use any <AcronymToggle>DF</AcronymToggle> sub for the cream cheese. I particularly like the Kite Hill brand, as their ingredients are the best you'll find.</p>
            <p>I had to split this recipe between two pie dishes, as mine are rather small. If your pie dish is larger, you can use just one!</p>
        </>
    ),
};

export default recipe;
