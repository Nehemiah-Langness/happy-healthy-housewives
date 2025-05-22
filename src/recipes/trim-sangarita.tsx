import type { Recipe } from '../types/recipe';
import { LinkToRecipe } from '../components/LinkToRecipe';
import { AffiliateLink } from '../components/AffiliateLink';

const recipe: Recipe = {
    title: 'Trim Sangarita',
    tags: ['Drinks and Sippers', 'THM FP', 'Keto Friendly', 'DF', 'GF'],
    dateAdded: new Date('2025-05-15'),
    brief: `Say goodbye to Summer with a sweet drink that's great for your blood sugar AND your waistline!`,
    image: 'trim-sangarita.jpg',
    file: 'TrimSangarita.pdf',
    quote: {
        person: 'Brianna',
        Quote: [
            <>Oh Mama’s, I am so excited to bring you this summer cocktail that you can share with your friends! 
            This wonderful drink is great for your taste buds AND your blood sugar!  A few years back, before 
            I started Trim Healthy Mama, my Mom and I were obsessed with this cocktail found at our favorite 
            restaurant, the Sangarita! We recreated an off-plan version, but I really wanted to find a way to 
            make this <AffiliateLink>THM</AffiliateLink> compliant.</>,
            `It’s summery, on the sweeter side, and the perfect drink to make for a gathering. I hope you enjoy!`,
        ],
    },
    Ingredients: [
        <span>
            2 servings of <LinkToRecipe recipe='trim-mamaritas'>Trim Mamarita‘s</LinkToRecipe>
        </span>,
        '1 bottle of dry red wine',
        <>3 TBS of <AffiliateLink>THM Super Sweet</AffiliateLink> (or Pyure), or more if you like it sweeter</>,
        '2 tsp of pineapple extract',
        '1 tsp of coconut extract',
        '1 tsp of cherry extract',
    ],
    Directions: (
        <>
            <p>In a large pitcher mix all ingredients. Refrigerate 30 minutes before serving. Serve chilled!</p>
        </>
    ),
    Notes: (
        <>
            <p>This recipe may only make a half pitcher, double if you need a larger pitcher.</p>
        </>
    ),
};

export default recipe;
