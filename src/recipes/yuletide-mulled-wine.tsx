import { AffiliateLink } from '../components/AffiliateLink';
import type { Recipe } from '../types/recipe';

const recipe: Recipe = {
    title: 'Yuletide Mulled Wine',
    tags: ['Drinks and Sippers', 'THM FP', 'Keto Friendly', 'GF', 'DF'],
    dateAdded: new Date('2025-05-15'),
    brief: `Cuddle up with your family and watch Hallmark movies while sipping on this delicious mulled wine!`,
    image: 'yuletide-mulled-wine.jpg',
    file: 'YuletideMulledWine.pdf',
    quote: {
        person: 'Brianna',
        Quote: [
            `Many families have the tradition of curling up around the fire and sipping on something warm. This Mulled Wine is a spicy, warm, festive drink perfect for the adults! It won’t spike your blood sugar, but sure is sweet and filled with holiday cheer`,
        ],
    },
    servings: 'Multiple Servings',
    Ingredients: [
        '1 bottle of dry red wine',
        '3-4 Cinnamon sticks',
        '1/2 tsp of ground nutmeg',
        '1/4 tsp of ground clove',
        <>
            1/4-1/2 cup of <AffiliateLink>THM Gentle Sweet</AffiliateLink>
        </>,
    ],
    Directions: (
        <>
            <p>Pour entire bottle of wine into a crock pot. Add cinnamon sticks, clove, and nutmeg. </p>
            <p>Give it a stir, and let sit on low heat for an hour-hour and a half.</p>
            <p>Add Gentle Sweet, stir and enjoy warm!</p>
        </>
    ),
    Notes: (
        <>
            <p>
                If you are wanting to serve this to a large group of people, such as for a party, I would suggest doubling or tripling this
                recipe.
            </p>
        </>
    ),
};

export default recipe;
