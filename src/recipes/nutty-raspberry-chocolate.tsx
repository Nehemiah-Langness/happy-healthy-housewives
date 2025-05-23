import { AffiliateLink } from '../components/AffiliateLink';
import type { Recipe } from '../types/recipe';

const recipe: Recipe = {
    title: 'Nutty Raspberry Chocolate',
    tags: ['THM S', 'Keto Friendly', 'DF', 'GF'],
    dateAdded: new Date('2025-05-15'),
    brief: `Just in time for Valentines Day! Why buy junk from the candy aisles when you can gift your loved ones a healthy treat? (That is even more delicious!)`,
    image: 'nutty-raspberry-chocolate.jpg',
    file: 'NuttyRaspberryChocolate.pdf',
    quote: {
        person: 'Mandy',
        Quote: [
            <>
                While traveling to visit family, I had a miracle find at the airport. 100% purist friendly raspberry chocolate bars! They
                were an amazing dark chocolate (sweetened with monkfruit) with dried raspberries, almonds, and pistachios. I was so excited
                I made everyone try a piece when I arrived.
            </>,
            <>
                I've been dreaming of this chocolate ever since, but none of the stores in my area carry this flavor. So, just like any
                other need i find, I went into the kitchen to make my own version.
            </>,
            <>
                I'm so proud to say it is just as delicious as the first time I tried it. And, just like I made all of my family try it, I
                want you all to try it too!
            </>,
            <>
                So, whip up a lovely batch for you and your loved ones and enjoy this decadent treat together! (Perhaps a special Valentines
                gift is in order!)
            </>,
        ],
    },
    servings: 'Multiple Servings',
    Ingredients: [
        <>4oz bakers chocolate</>,
        <>6 Tbsps coconut manna</>,
        <>
            3 Tbsps powdered <AffiliateLink>THM Super Sweet</AffiliateLink> (or Pyure)
        </>,
        <>1 tsp vanilla extract</>,
        <>Dried raspberries, pulsed into granules in food processor (see notes)</>,
        <>Raw pistachios, shelled and pulsed into granules in food processor</>,
        <>Almond slivers</>,
    ],

    Directions: (
        <>
            <p>In a double boiler, melt together bakers chocolate, coconut manna, powdered sweetener, and vanilla extract.</p>
            <p>Line a pie pan with parchment paper (TIP: if you wet the parchment paper first it will stick to the sides of your pan).</p>
            <p>Pour chocolate mixture into the pan. Sprinkle raspberries, pistachios, and almond slivers on top to desired look.</p>
            <p>Allow to cool in fridge for 24 hours before cutting.</p>
        </>
    ),
    Notes: (
        <>
            <p>
                It is very easy to dehydrate your own raspberries. Place raspberries on a parchment lined baking sheet and cook in 200&deg;
                F oven for 4-12 hours (depending on the humidity at the time). You want all the water to be cooked out. Allow to cool
                completely before placing in food processor
            </p>
        </>
    ),
};

export default recipe;
