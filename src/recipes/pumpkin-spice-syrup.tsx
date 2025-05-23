import { AcronymToggle } from '../components/AcronymToggle';
import { AffiliateLink } from '../components/AffiliateLink';
import { ExternalLink } from '../components/ExternalLink';
import { Footnote } from '../components/Footnote';
import type { Recipe } from '../types/recipe';

const recipe: Recipe = {
    title: 'Pumpkin Spice Syrup',
    tags: ['THM FP', 'Keto Friendly', 'GF', 'DF Option'],
    dateAdded: new Date('2025-05-15'),
    brief: `Say hello to Fall and goodbye to those sugar laden coffee shops! Whip up this batch of our sugar free Pumpkin Spice Syrup for your at home PSL!`,
    image: 'pumpkin-spice-syrup.jpg',
    file: 'PumpkinSpiceSyrup.pdf',
    quote: {
        person: 'Brianna',
        Quote: [
            <>
                Y'all… Fall has officially arrived and all the stores have put out their sugary pumpkin spice treats. If you're anything
                like me, you love all things pumpkin and pumpkin spice! When I began Trim Healthy Mama a few years back, I knew I needed to
                recreate my favorites in a more blood sugar friendly way. No more missing out on holiday treats! This Pumpkin Spice Syrup is
                sure to jazz up your morning or afternoon cup of joe! Coffee shops? Who needs them!
            </>,
        ],
    },
    servingSize: '2-4 tablespoons',
    Ingredients: [
        <>1/2 cup of water</>,
        <>
            1/3 cup of <AffiliateLink>THM Gentle Sweet</AffiliateLink> (or Pyure)
        </>,
        <>3/4 cup 100% pumpkin puree</>,
        <>
            1/3 cup of on plan sweetened condensed milk (I love{' '}
            <ExternalLink to='https://mymontanakitchen.com/3-ingredient-sweetened-condensed-milk-thm-s-low-carb-sugar-free/'>
                My Montana Kitchen's recipe
            </ExternalLink>
            ) <Footnote />
            see notes for <AcronymToggle>DF</AcronymToggle> option
        </>,
        <>
            1/2 tsp of Pumpkin Spice mix (see notes for alternative)
            <Footnote count={2} />
        </>,
        <>1/4 tsp of mineral salt</>,
    ],
    IngredientNotes: (
        <>
            <b></b>
        </>
    ),
    Directions: (
        <>
            <p>
                Mix water and sweetener together in a large pot and bring to a boil. Reduce to simmer and add pumpkin, condensed milk,
                pumpkin spice, and salt. Simmer for 1-2 minutes, then remove from heat.
            </p>
            <p>Let syrup cool to room temperature, and store in a mason jar in the fridge. Enjoy!</p>
        </>
    ),
    Notes: (
        <>
            <p>
                <Footnote /> If you need a <AcronymToggle>DF</AcronymToggle> version, My Montana Kitchen also has a{' '}
                <ExternalLink to='https://mymontanakitchen.com/2-ingredient-dairy-free-sweetened-condensed-milk-thm-s-sugar-free-low-carb/'>
                    Dairy Free Sweetened Condensed Milk
                </ExternalLink>
                .
            </p>
            <p>
                <Footnote count={2} /> Pumpkin Spice is just an equal mixture of clove, cinnamon, ginger, and nutmeg. It's easy to whip up
                your own to measure out this whole season, or you can buy some from the super-market!
            </p>
        </>
    ),
    similar: ['pumpkin-spice-coffee', 'pumpkin-spice-frappa'],
};

export default recipe;
