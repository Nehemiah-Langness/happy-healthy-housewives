import { AffiliateLink } from '../components/AffiliateLink';
import type { Recipe } from '../types/recipe';

const recipe: Recipe = {
    title: "Nehemiah's Kettle Corn",
    tags: ['THM E', 'GF', 'DF Option'],
    dateAdded: new Date('2025-05-15'),
    brief: `Get ready to cuddle with your fam and watch Halloween movies with this delicious Kettle corn! 
            Created by Bri's husband, you'll start cracking up just from reading the instructions!`,
    image: 'nehemiahs-kettle-corn.jpg',
    file: 'NehemiahsKettleCorn.pdf',
    quote: {
        person: 'Brianna',
        Quote: [
            `My husband is wonderfully creative in the kitchen! A couple of years  ago, he gifted this recipe to my Mom. 
            A true blue trim and healthy “kettle corn”. I think you’ll see his silly personality shine through this 
            recipe, and we both hope you enjoy it! `,
        ],
    },
    servings: 'Approximately 6 servings',
    Ingredients: [
        '2/3 cup popcorn',
        '1/2 Tbsp butter (or coconut oil) to not burn things',
        <>
            1/4 cup <AffiliateLink>THM Gentle Sweet</AffiliateLink>
        </>,
        'Mineral salt for flavor',
    ],

    Directions: (
        <>
            <p>
                In a big pot, drop the butter (or coconut oil) on the bottom and set the burner on medium-high. Drop a kernel in the middle,
                should you desire, so you know when it’s hot enough to pop the corn.
            </p>
            <p>
                When it is hot, pour kernels and sweetener in the pot and shake to mix. (Pro tip: A lid keeps hot popped kernels in the pot
                and out of your face.)
            </p>
            <p>Shake as the kernels pop, and once they slow take off the heat quickly to keep from burning. </p>
            <p>Shake one last time before pouring on a cookie sheet.</p>
            <p>Sprinkle mineral salt on and let the coating harden.</p>
        </>
    ),
    Notes: (
        <>
            <p>(We decided to post this recipe without editing what Nehemiah wrote. We thought it was much better this way!)</p>
        </>
    ),

    redirects: [
        'nehemiahs-kettle-corn-2'
    ]
};

export default recipe;
