import { AffiliateLink } from '../components/AffiliateLink';
import type { Recipe } from '../types/recipe';

const recipe: Recipe = {
    title: "Walnut Snowballs",
    tags: ['THM XO', 'DF Option'],
    dateAdded: new Date('2025-05-22'),
    brief: `These little things are crazy addictive but still a healthy choice for you and your family. The perfect treat after a snowball fight!`,
    image: 'walnut-snowballs.jpg',
    quote: {
        person: 'Brianna',
        Quote: [
            <>My mother in law makes these wonderful little crunchy balls of goodness every year. My whole family loves them! Now we can all enjoy them while also blessing our waistline and blood sugar. Be careful, these little guys are addictive!</>,
        ],
    },
    servings: '32 snowballs',
    Ingredients: [
        <>3/4 cups of butter, softened (may use plant based butter)</>,
        <>1/3 cup of <AffiliateLink>THM Gentle Sweet</AffiliateLink></>,
        <>3 Tbsp of water</>,
        <>1 tsp of vanilla extract</>,
        <>1 and 3/4 cup Sprouted Flour</>,
        <>1/2 cup chopped walnuts</>,
        <>1/2 cup of semi sweet chocolate chips (Lilys or Bake Believe)</>,
    ],
    Directions: (
        <>
            <p>Preheat oven to 325&deg; F.</p>
            <p>In a mixing bowl, cream together butter and THM Gentle Sweet. Beat in water and vanilla.</p>
            <p>Add flour to butter mixture and beat well.</p>
            <p>Add walnuts and chocolate chips stir until well combined.</p>
            <p>Shape dough into 1 inch balls and place on a baking sheet.</p>
            <p>Bake for 20 minutes.</p>
            <p>While cookies are still warm, roll in THM Gentle Sweet.</p>
            <p>Cool and enjoy!</p>
        </>
    ),
};

export default recipe;
