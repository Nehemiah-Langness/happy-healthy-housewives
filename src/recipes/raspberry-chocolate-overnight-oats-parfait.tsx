import { AffiliateLink } from '../components/AffiliateLink';
import { IngredientList } from '../components/IngredientList';
import type { Recipe } from '../types/recipe';

const recipe: Recipe = {
    title: 'Raspberry Chocolate Overnight Oats Parfait',
    tags: ['THM E', 'GF', 'GF Option'],
    dateAdded: new Date('2025-05-15'),
    brief: `Perfect for those busy morning when chocolate is calling your name! Famous in food prepping, you'll love this over night recipe!`,
    image: 'raspberry-chocolate-overnight-oats-parfait.png',
    quote: {
        person: 'Brianna',
        Quote: [
            `Mornings are a busy time in our house. I've learned quickly that having a breakfast ready to go in the morning is essential! 
            With all the candy and love in the air this time of year, I found myself really wanting a good raspberry chocolate something!`,
            `This is decadent, delicious, and packed with protein and healthy carbs. You'll think you're having dessert for breakfast!`,
        ],
    },
    servings: 'Single Serving',
    Ingredients: [
        <IngredientList
            title='Oats Layer'
            Ingredients={[
                '1/2 cup old fashioned oats',
                '1/2 cup unsweetened nut milk',
                '1/2 Tbsp chia seeds',
                '1 Tbsp sugar free raspberry jam',
            ]}
        />,
        <IngredientList
            title='Chocolate Layer'
            Ingredients={[
                '1/2 cup low fat cottage cheese (or DF yogurt)',
                '1 Tbsp Cocoa',
                <>3 tsp <AffiliateLink>THM Super Sweet</AffiliateLink></>,
                'A splash of nut milk (optional if not blending)',
            ]}
        />,
    ],
    Directions: (
        <>
            <p>Make the oat later by combining all ingredients and mixing well.</p>
            <p>Make the chocolate layer by placing all ingredients in a food processor and blending until whipped and creamy.</p>
            <p>Layer the parfait by alternating oats and chocolate whip. Place in the fridge until morning and enjoy!</p>
        </>
    ),
};

export default recipe;
