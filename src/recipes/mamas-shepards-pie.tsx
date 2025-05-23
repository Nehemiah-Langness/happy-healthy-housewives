import { AcronymToggle } from '../components/AcronymToggle';
import { IngredientList } from '../components/IngredientList';
import type { Recipe } from '../types/recipe';

const recipe: Recipe = {
    title: "Mama's Shepards Pie",
    tags: ['THM XO', 'GF', 'DF Option'],
    dateAdded: new Date('2025-05-15'),
    brief: `Hearty and healthy, don't be afraid to enjoy a nutritious crossover that will bless your body and soul with this take on the classic Shepard's Pie!`,
    image: 'mamas-shepards-pie.jpg',
    file: 'MamasShepardPie.pdf',
    quote: [
        {
            person: 'Brianna',
            Quote: [
                <>
                    My mom's shepherd's pie was one of my favorite meals growing up! I looked forward to it anytime she made it for dinner.
                    With just a few simple tweaks, this dish can morph to be the healthy dish you need! Whether you need a hefty crossover
                    or a delicious S meal, Mama's Shepherd Pie is sure not to disappoint!
                </>,
            ],
        },
        {
            person: 'Mandy',
            Quote: [
                <>
                    Don't snub your nose at the idea of leaving off the cheese to make this <AcronymToggle>DF</AcronymToggle>. I assure you,
                    it's just as delicious!
                </>,
            ],
        },
    ],
    servings: '6-8 servings',
    Ingredients: [
        <IngredientList
            title='Base'
            Ingredients={[
                <>1 lb ground beef or lamb</>,
                <>1 minced garlic clove</>,
                <>1 medium onion chopped</>,
                <>2 cups frozen peas and carrot mixture (can use greenbeans if you don't like peas)</>,
                <>1/2 cup frozen corn</>,
                <>2 Tbsp. Baobab</>,
                <>1 Tbsp. parsley</>,
                <>1/2 tsp. thyme</>,
                <>1 tsp. rosemary</>,
                <>1/2 to 1 tsp. salt</>,
                <>1/2 tsp. black pepper</>,
                <>1/4 tsp. paprika</>,
            ]}
        />,
        <IngredientList
            title='Gravy'
            Ingredients={[
                <>2 Tbsp. tomato paste</>,
                <>1/3 cup red wine (or additional beef broth)</>,
                <>1 cup beef broth</>,
                <>2 Tbsp. Worsteshire sauce</>,
            ]}
        />,
        <IngredientList
            title='Mashed Potatoes'
            Ingredients={[
                <span className='fst-italic'><b>NOTE:</b> You can use cauliflower mashed or a combo of both</span>,
                <>3-4 cups mashed potatoes. (2 large potatoes, diced and boiled)</>,
                <>1/2 cup grated cheddar cheese (optional)</>,
                <>4 Tbsp. butter or coconut oil</>,
                <>1/3 cup half and half (or full fat coconut milk)</>,
                <>1/2 tsp. garlic powder</>,
                <>1/2 tsp. salt</>,
                <>1/2 tsp. pepper</>,
            ]}
        />,
    ],
    Directions: (
        <>
            <p>Add onions and ground beef into pot and brown together (and raw carrots if not using frozen). Drain fat, return to pan.</p>
            <p>Add garlic and seasonings, sauté for a until fragrant. </p>
            <p>Add gravy ingredients and frozen vegetables. Bring to a boil and then simmer for 5 minutes. </p>
            <p>Place in a lightly greased 9x9 or 9x13 (if you like it thinner) pan and set aside.</p>
            <p>Make the mashed potatoes! </p>
            <p>
                Place the potatoes in a large pot. Cover the potatoes in salted water and bring to a boil. Reduce to a simmer. Cook until
                potatoes are fork tender, 10-15 minutes.
            </p>
            <p>Drain the potatoes in a colander. Return the potatoes to the hot pot or kitchen aid bowl for mashing. </p>
            <p>
                Add butter, half & half, garlic powder, parsley, salt, and pepper. Mash the potatoes and stir until all the ingredients are
                well combined.
            </p>
            <p>Spoon the mashed potatoes and grated cheese (if using) over the beef mixture. Bake at 400 degrees for 30 minutes.</p>
            <p>Enjoy!</p>
        </>
    ),
};

export default recipe;
