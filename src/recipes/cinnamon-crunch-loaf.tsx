import { AcronymToggle } from '../components/AcronymToggle';
import { AffiliateLink } from '../components/AffiliateLink';
import { ExternalLink } from '../components/ExternalLink';
import { IngredientList } from '../components/IngredientList';
import type { Recipe } from '../types/recipe';

const recipe: Recipe = {
    title: 'Cinnamon Crunch Loaf',
    tags: ['THM S', 'Keto Friendly', 'GF', 'DF'],
    dateAdded: new Date('2025-05-15'),
    brief: `Feeling tempted by a bagel shop treat? Whip up this easy loaf version for family breakfast (or hide for yourself)!`,
    image: 'cinnamon-crunch-loaf.jpg',
    file: 'CinnamonCrunchLoaf.pdf',
    quote: {
        person: 'Mandy',
        Quote: [
            `My husband loves the Cinnamon Crunch Bagel from a special bagel place. It's his special birthday treat every year 
            (and sometimes on Bagel Tuesday)! I enjoy my sprouted grain bagels, but looking over at the big crunchy deliciousness 
            was making me weak in the knees. So, as is the case whenever I get a temptation, into the kitchen I went for some mad 
            experimenting!`,
            <>
                This time worked out better than ever! All the deliciousness without the junk. I even like to whip up a batch of{' '}
                <a href='#wmdl-sfcbc'>Wonderfully Made and Dearly Loved‘s Sugar Free Cinnamon Baking Chips</a> (recipe linked below) to
                avoid any needless fillers.
            </>,
            `Nothing but slimming goodness here!`,
        ],
    },
    servings: 'Multiple Servings',
    Ingredients: [
        <IngredientList
            title='Topping'
            Ingredients={[
                <>1/4 cup <AffiliateLink>THM Gentle Sweet</AffiliateLink></>,
                '1/4 tsp black strap molasses',
                '1/8 tsp mineral salt',
                '3 Tbsp unsweetened almond milk',
                '1 Tbsp coconut oil',
                '2 tsp vanilla extract',
                '1 Tbsp cinnamon',
            ]}
        />,
        <IngredientList
            title='Bread'
            Ingredients={[
                <>2 cups <AffiliateLink>THM Baking Blend</AffiliateLink></>,
                <>1/2 cup <AffiliateLink>THM Super Sweet</AffiliateLink></>,
                '2 tsp baking powder',
                <>1 doonk of <AffiliateLink>THM Pure Stevia</AffiliateLink></>,
                <>
                    1/3 cup <AffiliateLink>THM Unflavored Whey Protein</AffiliateLink> (or Collagen for <AcronymToggle>DF</AcronymToggle>)
                </>,
                <span id='wmdl-sfcbc'>
                    3/4 &ndash; 1 cup <ExternalLink to='https://wonderfullymadeanddearlyloved.com/sugar-free-cinnamon-baking-chips-dairy-free-thms/'>Cinnamon Baking Chips</ExternalLink>
                </span>,
                '4 large eggs',
                '1 cup unsweetened almond milk',
                '1/2 cup yogurt',
                '1 tsp vanilla extract ',
            ]}
        />,
    ],
    Directions: (
        <>
            <p>
                Make the topping! Combine all ingredients except cinnamon in a saucepan. Cook until crystalized and bubbly. Pour onto baking
                sheet lined with parchment paper and freeze.
            </p>
            <p>
                When ready to make your loaf, take out of the freezer and place topping mixture into a food processor with the cinnamon.
                Pulse until well mixed but still chunky. Set aside.{' '}
            </p>
            <p>Make the loaf! Set oven to 350&deg; F. </p>
            <p>
                Combine all dry ingredients and mix well. In a separate bowl, combine the wet ingredients. Then, slowly combine the dry
                mixture into the wet mixture.{' '}
            </p>
            <p>
                Spray a bread pan with coconut oil spray. Pour bread mixture into bread pan and use the back of the spoon to smooth. Top
                with the Cinnamon Crunch topping.{' '}
            </p>
            <p>Tent the pan with aluminum foil and bake for 1 hour, or until a toothpick poked into the center comes out clean. </p>
            <p>Enjoy with your favorite low fat cream cheese! </p>
        </>
    ),
};

export default recipe;
