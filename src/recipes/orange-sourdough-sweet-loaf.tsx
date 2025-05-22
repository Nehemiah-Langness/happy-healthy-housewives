import type { Recipe } from '../types/recipe';
import { IngredientList } from '../components/IngredientList';
import { LinkToRecipe } from '../components/LinkToRecipe';

const recipe: Recipe = {
    title: 'Orange Sourdough Sweet Loaf',
    tags: ['THM E', 'DF Option'],
    dateAdded: new Date('2025-05-15'),
    brief: `Get ready for summer with wonderful orange flavors balanced by the bitterness of sourdough.`,
    image: 'orange-sourdough-sweet-loaf.jpg',
    file: 'OrangeSourdoughSweetLoaf.pdf',
    quote: [
        {
            person: 'Brianna',
            Quote: [
                `My husband’s Grandmother was coming to stay with us for a weekend, and I wanted to appease her tastes and stay on plan! 
            I asked my mother-in-law what she enjoyed for breakfast, and she replied: “sweet breads”. Yikes! In my opinion, sweet 
            breads are one of the hardest on plan items to make that also have the approval of those who are off plan. I was pretty 
            determined to make a crowd pleaser, and thus this sourdough orange sweet loaf was born! I’m happy to report she raved about 
            it at breakfast. She could have just been being polite, but I truly think this recipe is dynamite.`,
            ],
        },
        {
            person: 'Mandy',
            Quote: [
                <>
                    If you’d like to try the <b>Dairy Free option</b>, feel free to check out my{' '}
                    <LinkToRecipe recipe='dairy-free-yogurt'>Almond Milk Yogurt</LinkToRecipe> recipe!
                </>,
            ],
        },
    ],
    servingSize: '2 Slices',
    Ingredients: [
        <IngredientList
            title='Loaf'
            Ingredients={[
                '1/2 cup of inactive starter',
                '2 1/2 cups of white whole wheat flour',
                '1 cup of unsweetened nut milk',
                '2 tsp Baking Powder',
                '1/4 tsp Baking Soda',
                <>
                    3/4 cup of 0% Greek Yogurt (or almond yogurt for a <b>DF</b> option)
                </>,
                '1 tsp Orange Extract',
                '2 egg whites or 1/4 cup of liquid egg whites',
                '1/2 cup Gentle Sweet (or Truvia)',
                '1/4 tsp of Salt',
                'Zest of 1 small orange',
            ]}
        />,
        <IngredientList
            title='Glaze'
            Ingredients={['3 Tbs Gentle Sweet (or Truvia)', 'Juice of the zested orange', '2 tsp unsweetened nut milk']}
        />,
    ],

    Directions: (
        <>
            <p>In a mixing bowl, combine starter, flour, and 1 cup of nut milk. Cover and set aside for 8-12 hours to ferment.</p>
            <p>Preheat oven to 350&deg; F and add all other loaf ingredients to the bowl and mix well.</p>
            <p>Grease a loaf pan and add mixture to pan.</p>
            <p>Bake at 350&deg; F for 40-50 minutes, or until a knife or other utensil comes out clean.</p>
            <p>Set aside to cool.</p>
            <p>Once loaf is cool, mix all glaze ingredients together in a small bowl. Pour over loaf.</p>
            <p>Slice up and enjoy!</p>
        </>
    ),
};

export default recipe;
