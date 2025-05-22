import { IngredientList } from '../components/IngredientList';
import type { Recipe } from '../types/recipe';
import { LinkToRecipe } from '../components/LinkToRecipe';
import { ExternalLink } from '../components/ExternalLink';
import { AffiliateLink } from '../components/AffiliateLink';
import { Optional } from '../components/Optional';

const recipe: Recipe = {
    title: 'Allergen Friendly Texas Chocolate Brownies',
    tags: ['THM S', 'Keto Friendly', 'GF', 'DF', 'Nut Free Option', 'Egg Free', 'Apple Free'],
    dateAdded: new Date('2025-05-19'),
    brief: `Families with allergies rejoice! Finally a deliciously fudgy brownie recipe you can enjoy 
            whether you're gluten free, dairy free, nut free, egg free, apple free, or not!`,
    image: 'allergen-friendly-texas-chocolate-brownies.jpg',
    quote: {
        person: 'Mandy',
        Quote: [
            `Mamas, I pray most of you will never have a need to find a brownie recipe that's free 
            from a whole laundry list of allergens. It can be frustrating, exhausting, and cake just 
            isn't the same without eggs! But for you strong woman who are doing your honest-to-God best 
            for your family, I made this for you.`,
            `Recently we made a big life-changing move back to my husband's home town. We felt (and still feel) 
            a call to live closer to more family. Just recently, some of us have had to make some big 
            changes to our regular diets to heal some pesky gut issues. So, determined as I ever am to 
            make things as normal as possible, I whipped up this Allergen Friendly Texas Chocolate Brownie!`,
            'I hope those of you who need this will feel blessed, and those of you who have iron guts will enjoy this nonetheless!',
            '(PS. Check the notes for tips on making this nut free)',
        ],
    },
    Ingredients: [
        <IngredientList
            title='Brownies'
            Ingredients={[
                <>
                    1 cup <AffiliateLink>THM Baking Blend</AffiliateLink> or{' '}
                    <ExternalLink to='https://www.briana-thomas.com/brianas-baking-mix/'>Briana Thomas Baking Mix</ExternalLink> (for Nut
                    Free)
                </>,
                '1/2 cup Erythritol',
                '1/2 cup cocoa powder (Dutch pressed is best)',
                '1.5 tsp baking powder',
                '1/4 tsp mineral salt',
                <>1 1/2 cup unsweetened milk of choice <Optional reason='See Notes' /></>,
                '1/2 tsp apple cider vinegar or white vinegar',
                '1/2 tsp vanilla extract',
                <>
                    2 Tbsp yogurt (my <LinkToRecipe recipe='dairy-free-yogurt'>Dairy Free Yogurt</LinkToRecipe> works great!)
                </>,
                '1/4 cup measured, then melted coconut oil',
            ]}
        />,
        <IngredientList
            title='Topping'
            Ingredients={[
                <>1 oz unsweetened baking chocolate</>,
                <>2 Tbsp extra virgin coconut oil</>,
                <>1/4 cup + 2 Tbsps unsweetened milk of choice <Optional reason='See Notes' /></>,
                <>2 pinches mineral salt</>,
                <>
                    2 Tbsp <AffiliateLink>THM Gentle Sweet</AffiliateLink>
                </>,
                <>2 doonks stevia</>,
                <>1/8 tsp caramel extract</>,
                <>
                    1/3 cup chopped Pecans <Optional reason='Optional, but is more authentic for a Texas Chocolate cake' />
                </>,
            ]}
        />,
    ],
    Directions: (
        <>
            <p>Preheat oven to 350&deg; F. Grease an 8×8 baking pan with coconut oil.</p>
            <p>
                <b>Make the Brownies:</b> Whisk together baking blend, erythritol, cocoa, baking powder, and mineral salt in a large bowl.
                Add milk, vinegar, vanilla, yogurt, and coconut oil and mix until well combined. Pour into baking pan.
            </p>
            <p>Bake for 40-45 minutes or until a toothpick punctured in the center comes out clean.</p>
            <br />
            <p>
                <b>While baking, make the topping:</b> Combine all ingredients in a double boiler and melt together. When brownies are
                removed the oven, pour on the topping.
            </p>
            <p>Place in fridge overnight for a great fudgey texture!</p>
        </>
    ),
    Notes: (
        <>
            <p>
                I have made this with almond milk, cashew milk, coconut milk, and flax milk (if you’re nut free) and all have turned out
                fantastic. Oat milk and rice milk are considered Not On Plan because of the high sugars from the carbohydrates.
            </p>
            <p>Whatever you decide to use for your family, make sure it has no added sugar.</p>
        </>
    ),
};

export default recipe;
