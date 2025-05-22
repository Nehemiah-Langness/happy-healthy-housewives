import { AcronymToggle } from '../components/AcronymToggle';
import { AffiliateLink } from '../components/AffiliateLink';
import { RecipeHeader } from '../components/RecipeHeader';
import type { Recipe } from '../types/recipe';

const recipe: Recipe = {
    title: 'Dairy Free Yogurt',
    tags: ['THM FP'],
    dateAdded: new Date('2025-05-15'),
    brief: `Making your own dairy free yogurt is considerably cheaper than buying from the store (and even more delicious!)`,
    image: 'dairy-free-yogurt.jpg',
    file: 'DairyFreeYogurt.pdf',
    quote: {
        person: '',
        Quote: [
            <>
                I created this recipe a few months ago when I noticed a lack in our community! I was tired of paying the prices for store
                bought <AcronymToggle>DF</AcronymToggle> yogurt that was filled with not ideal fillers. My search online showed me tons of
                recipes where creators used corn starch to help thicken their yogurt. Here’s the thing: a dairy free milk won’t thicken on
                its own. You have to use something, but that something doesn’t need to hurt your healthy body! So, here is my creation (that
                I’m proud to say has been asked for by many). The thickeners in this recipe will bless your body rather than cause damage,
                and that’s what the <b>Trim Healthy Mama</b> lifestyle is all about!
            </>,
            <>
                Also, I say here that I make my own almond milk. My version is an <AcronymToggle>ultra FP</AcronymToggle>, coming in at less
                than <b>1g of fat per cup</b>. It’s really simple and I suggest you give it a try!
            </>,
        ],
    },
    servings: '8 servings',
    Ingredients: [
        '2 quarts of almond or cashew milk (I made my own to make this extra budget friendly, see below)',
        '5 tsp gluccie (Glucomannan powder), *optional, see notes',
        '5 tsp baobob, *optional, see notes',
        '1 tsp raw local honey (this provides food for the cultures to feed on)',
        <>
            Vegan yogurt cultures (I bought the brand{' '}
            <a
                href='https://www.amazon.com/Cultures-Health-Starter-delicious-nutrient-dense/dp/B012PNMB7O/ref=sxts_sxwds-bia-wc-rsf-lq2a1_0?crid=1CY5LI6NNJOL9&cv_ct_cx=cultures+for+health+vegan+yogurt+starter&dchild=1&keywords=cultures+for+health+vegan+yogurt+starter&pd_rd_i=B012PNMB7O&pd_rd_r=055f4872-5c92-487e-869c-7868862ca2eb&pd_rd_w=XmhJh&pd_rd_wg=PG9nr&pf_rd_p=26b0e770-de1c-4342-bf97-c57fd874dbaf&pf_rd_r=BWSEK54A4PZ75DNWH15S&psc=1&qid=1621375592&sprefix=cultures+for+health+vegan+yogurt%2Caps%2C200&sr=1-1-49946e88-733b-44df-869b-c05699555c56'
                target='_blank'
                rel='noreferrer'
            >
                Cultures For Health
            </a>
            )
        </>,
    ],
    IngredientNotes: (
        <div className='mt-5'>
            <RecipeHeader>Make Your Own Almond or Cashew Milk</RecipeHeader>
            <div className='ps-2'>
                <b>Almond Milk</b>
                <p>Soak 1/4 cup of raw almonds overnight (or 8-12 hours)</p>
                <p>Drain and rinse the almonds then place into a blender with 8 cups of water.</p>
                <p>Pulverize the almonds, then strain into the pot through a milk bag.</p>
                <p>
                    (or if you’re making this to drink, pour back into blender with a pinch of salt, dash of vanilla extract, 1 doonk{' '}
                    <AffiliateLink>THM Stevia</AffiliateLink> (or sweetener equivalent), and 1/2 tsp of gluccie or xanthem gum)
                </p>
                <b>Cashew Milk</b>
                <p>About 2g of fat per cup</p>
                <p>Place 1/4 cup of raw cashews into a blender with 8 cups of water.</p>
                <p> Pulverize the cashews, then pour into a pot. </p>
                <p>
                    (or if you’re making this to drink, pour back into blender with a pinch of salt, dash of vanilla extract, 1 doonk{' '}
                    <AffiliateLink>THM Stevia</AffiliateLink> (or sweetener equivalent), and 1/2 tsp of gluccie or xanthem gum)
                </p>
            </div>
        </div>
    ),
    Directions: (
        <>
            <p>Take your Crock-Pot and place it on top of a large towel, place lid on top and turn on low.*</p>
            <p>Place milk in a large pot on your stovetop and SLOWLY heat up to 180F, whisking occasionally. (Do not boil!)</p>
            <p>Add gluccie and baobab (or xanthem gum), whisk.</p>
            <p>Remove from burner, allow to cool to 100F, whisking occasionally. </p>
            <p>Add honey and 1 packet of cultures (or 1/4 cup of your last batch), place into mason jars. (do not tighten the lids.)</p>
            <p>Wrap the jars in cloth and place inside Crock-Pot.*</p>
            <p>Turn off and unplug the Crock-Pot, wrap it all in the large towel. *</p>
            <p>Incubate for 24 hours. </p>
            <p>Remove from Crock-Pot, tighten lids, and place in fridge for 6 hours. </p>
            <p>Your yogurt is now ready! If the consistency is not to your liking, you can add more baobab and/or gluccie to thicken. </p>
        </>
    ),
    Notes: (
        <>
            <p>If you don’t have baobab or “gluccie” on hand, you replace both with 5 tsp of xanthem gum.</p>
            <p>This yogurt is unsweetened, so if you want to enjoy a bowl, I suggest you sweeten to your liking. </p>
            <p>
                If you end up with clumps after it cools, just use your immersion blender (or throw it in your regular blender) to break
                them up.
            </p>
            <p>
                When making your next batch, leave 1/4c of your yogurt and use that instead of the cultures. This can be done 7 times. Helps
                your budget!
            </p>

            <p className='fst-italic'>*if you have an Instapot, just place jars in there and hit the yogurt setting, set for 24 hours.</p>
        </>
    ),
};

export default recipe;
