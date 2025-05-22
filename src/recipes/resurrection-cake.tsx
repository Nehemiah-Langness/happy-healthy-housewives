import { AcronymToggle } from '../components/AcronymToggle';
import { AffiliateLink } from '../components/AffiliateLink';
import { IngredientList } from '../components/IngredientList';
import type { Recipe } from '../types/recipe';

const recipe: Recipe = {
    title: 'Resurrection Cake',
    tags: ['THM S', 'Keto Friendly', 'GF', 'DF Option'],
    dateAdded: new Date('2025-05-15'),
    brief: `Easter is a great time for family get togethers. Bringing this Resurrection Cake will be a great reminder that Sunday has more to do with Jesus than bunnies!`,
    image: 'resurrection-cake.jpg',
    file: 'ResurrectionCake.pdf',
    quote: {
        person: 'Brianna',
        Quote: [
            <>
                Are you looking for a fun way to discuss the importance of Christ's death and resurrection this Easter? This easy and
                delicious Resurrection cake is a great way to do it! As a child, my mom would make a similar cake out of boxed cake mix and
                frosting. Cake or cupcakes always gets kids excited, and you can't beat the visual this cake brings!
            </>,
            <>
                <b>
                    The black layer represents our sin, which is then covered by the red layer or the blood of Christ making us all the
                    white layer “white as snow”.
                </b>
            </>,
            <>This recipe is easy enough that children of all ages can help make and enjoy it!</>,
        ],
    },
    servings: '12 servings',
    Ingredients: [
        <IngredientList
            title='Chocolate cake (Sin Layer)'
            Ingredients={[
                <>
                    There are so many amazing on plan chocolate cakes, I didn’t dare try to make my own! You can use any on plan chocolate
                    cake recipe. Pictured is the brownie layer from the <AffiliateLink>THF Brownie Cheesecake</AffiliateLink>, but there are
                    plenty of options to choose from! Some would be: The <b>Chocolate Mint Cupcakes</b> from <b>THF</b> (minus the mint),
                    The <AffiliateLink>THM Trimtastic Cake</AffiliateLink>, <AffiliateLink>THM Cry No More Brownies</AffiliateLink>, and
                    many more! Pick your family’s favorite!
                </>,
            ]}
        />,
        <IngredientList title='Strawberry Jelly (Christ’s Blood Layer)' 
            Ingredients={[
                <>2 cups frozen strawberries</>,
                <>2 tsp lemon juice</>,
                <>3 Tbsp <AffiliateLink>THM Gentle Sweet</AffiliateLink> (or Truvia)</>,
                <>2 tsp baobab powder</>,
                <>2 Tbsp gelatin</>,
            ]}
        />,
        <IngredientList title='Cream cheese frosting (White as Snow layer)' 
            Ingredients={[
                <>1 block of softened cream cheese (can use <b>KiteHill</b> brand for <AcronymToggle>DF</AcronymToggle>)</>,
                <>3 Tbsp <AffiliateLink>THM Gentle Sweet</AffiliateLink> (or Truvia)</>,
                <>1 tsp Vanilla Extract</>,
                <>4 Tbsp Nut Milk of choice</>,
            ]}
        />,
    ],
    Directions: (
        <>
            <p>Make and bake your chocolate cake layer according to the directions and let cool completely.</p>
            <p>
                <b>For the jelly layer:</b> In a small saucepan, add frozen strawberries, lemon juice, and sweetener. Bring to a boil, then
                simmer until well reduced. Mash with a potato masher or run through a blender or food processor, then return to pan. Add
                Baobab and stir. Slowly add the Gelatin while stirring vigorously. Remove from heat and spread on top of your chocolate
                layer. Let set in the fridge until cool and firm.
            </p>
            <p>
                <b>For the frosting layer:</b> Add all ingredients to your mixer. Mix on medium speed until well combined. Spread on top of
                cake and place in fridge to set.
            </p>
            <p>Once set, cut and enjoy!</p>
        </>
    ),
};

export default recipe;
