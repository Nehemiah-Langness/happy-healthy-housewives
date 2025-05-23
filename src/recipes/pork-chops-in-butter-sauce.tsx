import { AcronymToggle } from '../components/AcronymToggle';
import { IngredientList } from '../components/IngredientList';
import type { Recipe } from '../types/recipe';

const recipe: Recipe = {
    title: 'Pork Chops in Butter Sauce',
    tags: ['THM S'],
    dateAdded: new Date('2025-05-22'),
    brief: `Wonderfully seared and finished with a creamy garlic sauce, this is soon to be you're new favorite!`,
    image: 'pork-chops-in-butter-sauce.jpg',
    file: 'PorkChopsInButterSauce.pdf',
    quote: {
        person: 'Mandy',
        Quote: [
            <>
                If you're a Midwestern, you love pork. Personally, I can take it or leave it but pork chops are my hubby's absolute
                favorite. Whipped up in this butter sauce and some asparagus, it's quickly becoming one of mine too!
            </>,
        ],
    },
    servings: '4 servings',
    Ingredients: [
        <IngredientList
            title='Pork'
            Ingredients={[
                <>4 pork chops</>,
                <>Mineral Salt</>,
                <>Black Pepper </>,
                <>Italian Seasoning</>,
                <>Onion Powder</>,
                <>Asparagus (or other vegetable) </>,
            ]}
        />,
        <IngredientList
            title='Sauce'
            Ingredients={[
                <>
                    2 Tbsp. butter (or coconut oil for <AcronymToggle>DF</AcronymToggle>)
                </>,
                <>4 Tbsp. minced garlic</>,
                <>1/2 cup chicken broth</>,
                <>1/2 cup almond milk </>,
                <>1 tsp glucomannan</>,
                <>1 Tbsp. lemon juice </>,
                <>1 tsp mineral salt </>,
                <>1/2 tsp black pepper </>,
                <>1 1/2 tsp Italian seasoning </>,
                <>1 tsp onion powder</>,
            ]}
        />,
    ],
    Directions: (
        <>
            <p>Season pork chops with salt, pepper, Italian seasoning, and onion powder on both sides.</p>
            <p>Melt vegan butter or coconut oil in skillet on high, add minced garlic and saute for a few seconds.</p>
            <p>Add pork chops and sear on both sides. </p>
            <p>
                Add chicken broth, lemon juice, almond milk, seasonings, and glucomannan to the skillet with the pork chops. Move the meat
                around to mix the sauce until well combined. Bring to a boil then reduce to a medium heat.{' '}
            </p>
            <p>Add asparagus (or whatever vegetable you have chosen) to the pan and allow the sauce to thicken.</p>
            <p>Serve! </p>
        </>
    ),
};

export default recipe;
