import { AffiliateLink } from '../components/AffiliateLink';
import { ExternalLink } from '../components/ExternalLink';
import type { Recipe } from '../types/recipe';

const recipe: Recipe = {
    title: 'Cappuccino Fudge',
    tags: ['THM S', 'Keto Friendly', 'GF', 'DF'],
    dateAdded: new Date('2025-05-15'),
    brief: `Coffee lovers rejoice! Here's a dessert that tastes just like your favorite coffee shop drink. Delicious and dairy free, what could be better?`,
    image: 'cappuccino-fudge.jpg',
    quote: {
        person: 'Mandy',
        Quote: [
            <>
                This is a recipe that my family is particularly excited about. We had a slice of cappuccino fudge years ago and I’ve been
                dying to make a <AffiliateLink>THM</AffiliateLink> version! Finally, I pulled it off; plus, it’s dairy free! I hope you love
                this as much as my sister and I do.
            </>,
        ],
    },
    servings: '8 Servings',
    Ingredients: [
        '4 oz food grade cocoa butter',
        '4 oz coconut manna (or coconut butter)',
        <>
            4 Tbsp <AffiliateLink>THM Gentle Sweet</AffiliateLink>
        </>,
        '1 tsp vanilla extract',
        <>
            Batch of{' '}
            <ExternalLink to='https://mymontanakitchen.com/2-ingredient-dairy-free-sweetened-condensed-milk-thm-s-sugar-free-low-carb/'>
                My Montana Kitchen’s sweetened condensed milk
            </ExternalLink>
        </>,
        '1 1/2 Tbsp instant coffee',
    ],
    Directions: (
        <>
            <p>First, make a batch of My Montana Kitchen’s sweetened condensed milk. Set aside to cool.</p>
            <p>
                In a double boiler, melt cocoa butter, coconut manna, sweetener, and vanilla extract. Once the Gentle Sweet is dissolved,
                add to the sweetened condensed milk.
            </p>
            <p>Remove about 1/3 of the mix and set aside.</p>
            <p>To the remaining 2/3, stir in the instant coffee until dissolved.</p>
            <p>
                Line a pan with parchment paper. Pour in the coffee flavored mixture and spread evenly. Dollop the remaining 1/3 that you
                set aside on top of the coffee mixture and carefully swirl together. This will create the cappuccino look.
            </p>
            <p>Place in freezer for 12 hours.</p>
            <p>Remove from freezer and slice to desired size. Allow to fully defrost before serving.</p>
        </>
    ),
    Notes: (
        <>
            <p>
                The easiest way to place a parchment paper in a pan is to wet the paper before lining. This will help get the parchment
                paper into each corner.
            </p>
        </>
    ),
};

export default recipe;
