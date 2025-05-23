import { AffiliateLink } from '../components/AffiliateLink';
import type { Recipe } from '../types/recipe';

const recipe: Recipe = {
    title: 'Chocolate Peppermint Chip Cookies',
    tags: ['THM XO', 'DF Option'],
    dateAdded: new Date('2025-05-15'),
    brief: `What's better than chocolate and peppermint? Nothing, besides enjoying the two in a 
            deliciously crunch cookie! These Chocolate Peppermint Chip Cookies are sure to be a 
            big hit with your family (or stash them in the back of the freezer for yourself!)`,
    image: 'chocolate-peppermint-chip-cookies.jpg',
    quote: {
        person: 'Brianna',
        Quote: [
            <>
                Is there anything more classic or more holiday than chocolate and peppermint? Santa will be needing his belt after eating
                these slimming cookies! These cookies are sure to give your taste buds a Holly jolly Christmas and bless your blood sugar
                and waistline!
            </>,
        ],
    },
    servings: '',
    servingSize: '',
    Ingredients: [
        <>1 cup butter, softened (may use a plant based butter option)</>,
        <>
            1 cup <AffiliateLink>THM Gentle Sweet</AffiliateLink>
        </>,
        <>2 eggs</>,
        <>1 tsp vanilla extract</>,
        <>2 cups Sprouted Flour</>,
        <>2/3 cup of Cocoa Powder</>,
        <>1/2 teaspoon of baking soda</>,
        <>1/4 tsp Salt</>,
        <>1 bag of Lily's peppermint chips</>,
    ],
    Directions: (
        <>
            <p>Preheat oven to 350&deg; F.</p>
            <p>In a mixing bowl, cream together butter and gentle sweet until smooth. While mixing, add eggs and vanilla.</p>
            <p>In a separate bowl, stir together all dry ingredients.</p>
            <p>Slowly add to the wet ingredients while mixing.</p>
            <p>Spoon and roll cookies to desired size and bake for 10-12 minutes.</p>
            <p>Cool on a rack and enjoy!</p>
        </>
    ),
    Notes: (
        <>
            <p>
                If not sweet enough for your liking, coat in a little <AffiliateLink>THM Gentle Sweet</AffiliateLink> at the end.
            </p>
        </>
    ),
};

export default recipe;
