import { AcronymToggle } from '../components/AcronymToggle';
import { LinkToRecipe } from '../components/LinkToRecipe';
import type { Recipe } from '../types/recipe';

const recipe: Recipe = {
    title: 'Mocha Icebox Ice Cream',
    tags: ['THM FP', 'Keto Friendly', 'DF', 'GF'],
    dateAdded: new Date('2025-05-15'),
    brief: `Coffee and chocolate, a match made in heaven! Try out this Dairy Free, no electric churner required, recipe tonight!`,
    image: 'mocha-icebox-ice-cream.jpg',
    file: 'MochaIceboxIceCream.pdf',
    quote: {
        person: 'Mandy',
        Quote: [
            <>
                One of the hardest parts of going Dairy Free for me was giving up deliciously creamy ice cream. For almost a year I went
                without (there is a good DF/SF store bought option, but it is way too expensive!) until I created my Icebox Ice Cream
                recipe.
            </>,
            <>Now I'm having a blast trying out a whole list of new flavors! Of course, I had to nail down my favorite first!</>,
            <>This recipe is Dairy Free, instant. and filled with wonderful chocolate and coffee flavor!</>,
            <>
                <b>
                    P.S. This recipe is delicious topped with Sugar Free Chocolate Chips, making it a THM <AcronymToggle>S</AcronymToggle>!
                </b>
            </>,
        ],
    },
    servings: 'Single Serving',
    Ingredients: [
        <>1 cup of nut milk ice cubes</>,
        <>1 Tbsp coconut cream</>,
        <>
            1/2 cup <LinkToRecipe recipe='dairy-free-yogurt'>Dairy Free Yogurt</LinkToRecipe>
        </>,
        <>3 doonks (1/32 tsp) pure stevia</>,
        <>1 tsp decaf instant coffee</>,
        <>1 Tbsp cocoa powder</>,
        <>Pinch of mineral salt</>,
    ],
    Directions: (
        <>
            <p>Place all ingredients into a blender and blend until smooth!</p>
        </>
    ),
    Notes: (
        <>
            <p>You can make almond milk ice cubes by placing unsweetened almond milk into ice cube molds and freezing.</p>
            <p>I use a Vitamix blender and it works great. I cannot assure this will work with any blender.</p>
            <p>
                If you enjoy this recipe, check out <LinkToRecipe recipe='vanilla-icebox-ice-cream'>Vanilla Icebox Ice Cream</LinkToRecipe>
            </p>
        </>
    ),
    redirects: ['mocha-icebox-ice-cream-2'],
};

export default recipe;
