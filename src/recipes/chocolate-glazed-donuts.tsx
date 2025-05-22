import { AffiliateLink } from '../components/AffiliateLink';
import { IngredientList } from '../components/IngredientList';
import type { Recipe } from '../types/recipe';

const recipe: Recipe = {
    title: 'Chocolate Glazed Donuts',
    tags: ['THM FP', 'Keto Friendly', 'DF', 'GF'],
    dateAdded: new Date('2025-05-15'),
    brief: `Hold the phone, chocolate glazed donuts that are both low carb and low fat? Try this recipe and you'll believe anything is possible!`,
    image: 'chocolate-glazed-donuts.jpg',
    file: 'ChocolateGlazedDonuts.pdf',
    quote: {
        person: 'Mandy',
        Quote: [
            <>
                My husband loves donuts from a certain famous chain restaurant. There’s a few times a year that he demands it. I wanted to
                enjoy these times him, but wanted to find a way to stay “on plan”. So, I set out to create my own recipe!
            </>,
            <>
                Now, I’m not saying these are a “copycat” recipe. Nothing I make will ever taste like store-bought terrible for you donuts.
                These work well for me and I love that I can have them with any meal.
            </>,
            <>When I sit down to enjoy these with a cup of coffee, it’s hard to believe that I’m making great choices for my health!</>,
        ],
    },
    servings: 'Approximately 6 donuts',
    Ingredients: [
        <IngredientList
            title='Donuts'
            Ingredients={[
                <>
                    2.5 Tbsp <AffiliateLink>THM Super Sweet</AffiliateLink> (or Pyure)
                </>,
                <>2 Tbsp egg whites</>,
                <>4 tsp MCT oil</>,
                <>
                    3/4 cup <AffiliateLink>THM Baking Blend</AffiliateLink>
                </>,
                <>2 tsp baking powder</>,
                <>4 pinch mineral salt</>,
                <>1/2 – 1 cup water</>,
            ]}
        />,
        <IngredientList
            title='Icing'
            Ingredients={[
                <>1/2 cup cocoa powder</>,
                <>1/4 tsp mineral salt</>,
                <>2 1/2 Tbsp THM Gentle Sweet (or Truvia)</>,
                <>1 tsp vanilla extract</>,
                <>1/2 cup almond milk</>,
                <>1/2 tsp instant espresso powder</>,
            ]}
        />,
    ],
    Directions: (
        <>
            <p>Preheat oven to 375&deg; F</p>
            <p>Add all donut ingredients to a bowl and mix well. (You want a very wet batter)</p>
            <p>Spoon batter into silicone donut molds. Bake for 25 minutes, or until brown. </p>
            <p>Remove from oven and place the silicone molds with the donuts on a cooling rack.</p>
            <p>While the donuts are cooling, mix icing ingredients until smooth. (You want a smooth liquid texture)</p>
            <p>
                Once cool, carefully remove the donuts from their molds. Dip the tops of the donuts in the icing, moving around the bowl to
                coat the whole top and some of the sides. Place to the side.
            </p>
        </>
    ),
    Notes: (
        <>
            <p>
                Depending on the humidity, your flour may be extra “thirsty”. You may have to use more water than what is called for. Just
                continue to add water in small increments until you achieve a wet batter.
            </p>
        </>
    ),
    redirects: ['fp-chocolate-glazed-donuts'],
};

export default recipe;
