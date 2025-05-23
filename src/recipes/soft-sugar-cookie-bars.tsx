import { AcronymToggle } from '../components/AcronymToggle';
import { AffiliateLink } from '../components/AffiliateLink';
import { IngredientList } from '../components/IngredientList';
import type { Recipe } from '../types/recipe';

const recipe: Recipe = {
    title: 'Soft Sugar Cookie Bars',
    tags: ['THM S', 'Keto Friendly', 'GF', 'DF Option'],
    dateAdded: new Date('2025-05-15'),
    brief: `Melt in your mouth delicious, these make a perfect substitute for your store-bought soft cookies!`,
    image: 'soft-sugar-cookie-bars.jpg',
    file: 'SoftSugarCookieBars.pdf',
    quote: {
        person: 'Mandy',
        Quote: [
            <>
                Ya know those wonderfully delicious soft cookies that always show up at celebrations? Those are my Achilles heel. My whole
                childhood my sister and I were obsessed with those treats! Between being dairy free and sugar free, I am able to resist
                their sweet songs of temptation. Even so, I still missed enjoying those cookies with friends and family. So, here is my
                dairy free, sugar free, <AffiliateLink>Trim Healthy Mama</AffiliateLink> adaptation!
            </>,
            <>
                I was introduced to the concept of cookies baked as bars by <b>JoyFilled Eats</b>. Guys, it's life changing to not have to
                cut them out and ice them individually. Just bake, spread, and go! If you'd like to put in the extra work to turn these into
                cookies, feel free. Just make sure to cut back on the baking time!
            </>,
            <>
                <b>
                    P.S., I have made this using the dairy free subs multiple times and it's worked out fantastic. Just make sure you keep
                    the butter as cold as possible, since it's very unstable and will melt easily.
                </b>
            </>,
        ],
    },
    servings: 'Approximately 12 cookie squares',
    Ingredients: [
        <IngredientList
            title='Cookie Crust'
            Ingredients={[
                <>
                    1 1/2 cups <AffiliateLink>THM Baking Blend</AffiliateLink>
                </>,
                <>1/4 tsp mineral salt</>,
                <>1 tsp baking powder</>,
                <>
                    1/2 cup softened butter (or vegan butter for <AcronymToggle>DF</AcronymToggle>)
                </>,
                <>
                    1/2 cup powdered <AffiliateLink>THM Gentle Sweet</AffiliateLink> (or Pyrure)
                </>,
                <>2 eggs</>,
                <>2 tsp vanilla extract</>,
            ]}
        />,
        <IngredientList
            title='Frosting'
            Ingredients={[
                <>
                    1 cup powdered <AffiliateLink>THM Gentle Sweet</AffiliateLink> (or Pyure)
                </>,
                <>
                    1/2 cup softened butter (or vegan butter for <AcronymToggle>DF</AcronymToggle>)
                </>,
                <>Pinch of mineral salt</>,
                <>1 tsp vanilla extract</>,
                <>
                    1 Tbsp heavy whipping cream (or coconut cream for <AcronymToggle>DF</AcronymToggle>)
                </>,
                <>All natural food coloring (optional)</>,
            ]}
        />,
    ],
    Directions: (
        <>
            <p>Preheat oven to 350&deg; F. Grease an 8x8 pan with coconut oil spray.</p>
            <p>In a medium bowl, whisk together Baking Blend, salt, and baking powder.</p>
            <p>Cream together butter and sweetener until light and fluffy. Beat in the egg and vanilla extract.</p>
            <p>Combine dry and wet ingredients, mix well.</p>
            <p>
                Press cookie batter into the bottom of the pan until evenly spread and flat. Bake for 22 minutes (or until golden brown).{' '}
            </p>
            <p>Cool on a wire rack, making sure they are cooled completely before applying the frosting.</p>
            <p>
                <b>Make the frosting:</b> In a large mixing bowl, beat together butter, sweetener, and salt on low. Increase to medium and
                beat for 3 minutes. Add vanilla, heavy whipping cream (or coconut cream) and food coloring (if using).
            </p>
            <p>Evenly spread the frosting over the cooled cookie bars and top with optional sprinkles!</p>
        </>
    ),
};

export default recipe;
