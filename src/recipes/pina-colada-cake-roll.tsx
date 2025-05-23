import { AffiliateLink } from '../components/AffiliateLink';
import { IngredientList } from '../components/IngredientList';
import { LinkToRecipe } from '../components/LinkToRecipe';
import type { Recipe } from '../types/recipe';

const recipe: Recipe = {
    title: 'Piña Colada Cake Roll',
    titleAlt: 'Pina Colada Cake Roll',
    tags: ['THM S', 'Keto Friendly', 'DF Option', 'GF'],
    dateAdded: new Date('2025-05-15'),
    brief: `Do you like Piña Coladas and a trim waistline? This Summer treat will have you singing all day long.`,
    image: 'pina-colada-cake-roll.jpg',
    file: 'PinaColadaCakeRoll.pdf',
    quote: {
        person: 'Mandy',
        Quote: [
            <>
                Cake rolls are my absolute favorite dessert to make. They're beautiful and impress everyone who sees them! So when I saw
                this concept on a baking TV show, I went straight to my computer to create this recipe for all you mamas (and papas) out
                there.
            </>,
            <>
                If you've never made a cake roll before, don't let yourself be intimidated. They look complicated but they're truly easy and
                simple! Make this for your next function and impress everyone with your mad baking skills!
            </>,
        ],
    },
    servings: '12 servings',
    Ingredients: [
        <IngredientList
            title='Cake'
            Ingredients={[
                <>
                    3/4 cup <AffiliateLink>THM Baking Blend</AffiliateLink>
                </>,
                <>
                    1 cup <LinkToRecipe recipe='dairy-free-yogurt'>Dairy Free Yogurt</LinkToRecipe>
                </>,
                <>4 large eggs</>,
                <>4 Tbsp melted coconut oil</>,
                <>
                    3/4 cup <AffiliateLink>THM Gentle Sweet</AffiliateLink> (or Truvia)
                </>,
                <>1 tsp baking powder</>,
                <>1 tsp baking soda</>,
                <>2 pinches mineral salt</>,
                <>2 tsp rum extract</>,
            ]}
        />,
        <IngredientList title='Filling' Ingredients={[<>1 and 2/3 cup coconut cream</>, <>1/2 tsp vanilla extract</>]} />,
        <IngredientList
            title='Frosting'
            Ingredients={[
                <>8 Tbsp butter, softened (or softened vegan butter)</>,
                <>2 tsp Pineapple extract</>,
                <>1 Tbsp coconut cream</>,
                <>1 tsp vanilla extract</>,
                <>1 1/2 cup powdered erythritol</>,
                <>Yellow all-natural food coloring (optional)</>,
            ]}
        />,
    ],
    Directions: (
        <>
            <p>Preheat the oven to 375&deg; F. Line a cookie sheet with parchment paper, spritz with coconut oil spray.</p>
            <p>In a large bowl, combine yogurt, eggs, rum extract, and coconut oil until well combined. </p>
            <p>
                In a medium mixing bowl, combine baking blend, gentle sweet, baking powder, baking soda, and mineral salt. Once mixed, add
                to the wet ingredients.{' '}
            </p>
            <p>Pour batter onto the cookie sheet, spreading evenly across. Bake for 14-15 minutes. </p>
            <p>While the cake is baking, prepare a dampened tea towel on your counter. </p>
            <p>
                Once the cake is fully baked, quickly flip cake side down onto the tea towel and remove the parchment paper. Roll the cake,
                with the towel, from the shorter end to create several rolls. Place onto a cooling rack until fully cool.
            </p>
            <p>
                <b>Make the whipped cream filling:</b> Place the mixing bowl in the fridge (with the beater) for 5 minutes. Remove, add
                coconut cream and beat on high until stiff peaks form. Add vanilla extract and gently stir to combine. Place in the fridge
                until cake is cool.
            </p>
            <p>
                <b>Make the frosting:</b> Beat together softened butter, pineapple extract, cream of coconut, and vanilla until fluffy.
                Slowly beat in the sweetener. Mix in the food coloring (if using). Place in fridge until ready to ice the cake roll.
            </p>
            <p>
                <b>Assemble the cake roll:</b> Unroll the fully cooled cake roll and evenly spread the coconut whipped cream. Reroll the
                cake as tight as you can, be careful not to smush out all the whipped cream. Place onto a serving tray. Spread the icing
                over the top and the sides, leaving the end open to show your beautiful rolls.
            </p>
        </>
    ),
    Notes: (
        <>
            <p>This cake roll does like to melt, so it is in your best interest to refrigerate until serving.</p>
            <p>
                To get coconut cream, just buy a can of coconut milk and place in the fridge overnight. This causes the cream to separate
                from the water and rise to the top, which is the part you want.
            </p>
        </>
    ),
    redirects: [
        'piña-colada-cake-roll'
    ]
};

export default recipe;
