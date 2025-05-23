import { AcronymToggle } from '../components/AcronymToggle';
import { AffiliateLink } from '../components/AffiliateLink';
import { LinkToRecipe } from '../components/LinkToRecipe';
import type { Recipe } from '../types/recipe';

const recipe: Recipe = {
    title: 'Pumpkin Spice Frappa',
    tags: ['THM FP', 'Keto Friendly', 'DF', 'GF'],
    dateAdded: new Date('2025-05-15'),
    brief: `Nothings better than a warm cup of pumpkin spice coffee, except when it's a hot fall day. Say hello to our Pumpkin Spice Frappa! Perfect for when you're sweating outside but can't wait for Fall!`,
    image: 'pumpkin-spice-frappa.jpg',
    file: 'PumpkinSpiceFrappa.pdf',
    quote: {
        person: 'Mandy',
        Quote: [
            <>
                Crazy enough, I've never been on the pumpkin spice train. Probably because I spent many years selling pumpkin rolls with my
                mom as a mission trip fundraiser! But, this year, that's all I want! This is a great, super slimming, afternoon snack.
                Glucomannan is an amazing super food that can help balance you blood sugar and heal your gut! So make yourself a nice big
                glass (or two if you're like me!) and enjoy this wonderful afternoon treat!
            </>,
        ],
    },
    servings: 'Single Serving',
    Ingredients: [
        <>
            2 Tbsp <LinkToRecipe recipe='pumpkin-spice-syrup'>Pumpkin Spice Syrup</LinkToRecipe>
        </>,
        <>1/2 cup almond or cashew milk</>,
        <>1/2 cup water</>,
        <>2 pinches mineral salt</>,
        <>Dash of vanilla extract</>,
        <>1/2 tsp glucomannan</>,
        <>
            1/4 cup Whey Protein (or 2 Tbsp of <AffiliateLink>THM Creamy Dreamy Protein</AffiliateLink> for{' '}
            <AcronymToggle>DF</AcronymToggle>)
        </>,
        <>18 ice cubes</>,
    ],
    Directions: (
        <>
            <p>Place all ingredients into a blender, except for ice cubes and Whey protein, and blend until well combined.</p>
            <p>Add in ice cubes and blend until smooth.</p>
            <p>
                Add in the Whey Protein (or Creamy Dreamy Protein) and blend for just a few seconds (the longer you blend the frothier it
                will be!)
            </p>
            <p>Pour into a glass and enjoy!</p>
        </>
    ),
};

export default recipe;
