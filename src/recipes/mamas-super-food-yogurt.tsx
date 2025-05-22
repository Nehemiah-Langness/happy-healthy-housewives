import { AcronymToggle } from '../components/AcronymToggle';
import { AffiliateLink } from '../components/AffiliateLink';
import { LinkToRecipe } from '../components/LinkToRecipe';
import type { Recipe } from '../types/recipe';

const recipe: Recipe = {
    title: "Mama's Super Food Yogurt",
    tags: ['THM S', 'GF', 'DF Option'],
    dateAdded: new Date('2025-05-15'),
    brief: `Mama's know best when it comes to packing food with super nutrition! Whip up this simple yogurt bowl to for a healthy breakfast or snack!`,
    image: 'mamas-super-food-yogurt.jpg',
    quote: {
        person: 'Brianna',
        Quote: [
            <>
                Our wonderful Mother spent a few weeks with us after we had Baby #2. She quickly threw this yogurt snack together one day to
                provide me with all the health boosts and things to promote milk supply. Y’all, I ended up asking her to make me this every
                single day. My toddler and I are obsessed with it! I had her write down the recipe before she left and now I’m sharing it
                with all of you! Great for your taste buds AND your health, you have got to try this!
            </>,
        ],
    },
    servings: 'Single Serving',
    Ingredients: [
        <>
            1/2 cup of Plain Nonfat Greek Yogurt (or <LinkToRecipe recipe='dairy-free-yogurt'>Dairy Free Yogurt</LinkToRecipe>)
        </>,
        <>
            2 tsp <AffiliateLink>THM Super Sweet</AffiliateLink>
        </>,
        <>1/2 tsp chia seeds</>,
        <>1 Tbsp ground flax</>,
        <>1 Tbsp unsweetened coconut flakes</>,
        <>1/2 tsp baobab powder</>,
        <>1/4-1/2 tsp of sunflower lecithin</>,
        <>1/4 tsp coconut extract</>,
        <>1/4 cup frozen blueberries</>,
        <>2 pinches of mineral salt</>,
        <>
            1 Tbsp old fashioned oats (optional, this low amount will keep the fuel type in <AcronymToggle>S</AcronymToggle> mode)
        </>,
    ],
    Directions: (
        <>
            <p>Combine all ingredients in a bowl. Enjoy!</p>
        </>
    ),
};

export default recipe;
