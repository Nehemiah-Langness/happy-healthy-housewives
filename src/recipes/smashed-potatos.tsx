import type { Recipe } from '../types/recipe';

const recipe: Recipe = {
    title: 'Smashed Potatoes',
    tags: ['THM E', 'DF', 'GF'],
    dateAdded: new Date('2025-05-15'),
    brief: `French fry addicts rejoice! This recipe has all the crispy deliciousness achieved from a deep fryer without the oil.`,
    image: 'smashed-potatos.png',
    quote: {
        person: 'Mandy',
        Quote: [
            `Anyone else out there a french fry addict? This is the one food that I just can’t resist when going out to eat. I’ve 
            tried for years to make delicious air fried french fries at home but they never tasted as good as fast food. Then, a 
            family friend introduced me to the world of smashed potatoes.`,
            `These little crispy discs are honestly addicting. You can try whatever seasonings you want on these guys and dip in 
            a variety of sauces. If you have a family of french fry addicts, give these a try as a side with a lean meat tonight!`,
        ],
    },
    servings: '6 servings',
    Ingredients: ['24 small yellow potatoes (think bite sized)', 'Olive oil', 'Salt and pepper to taste'],

    Directions: (
        <>
            <p>Fill a pot with water and bring to a boil. Add potatoes and salt to the water and boil for 10 minutes.</p>
            <p>Drain the water and let the potatoes sit for 5 minutes.</p>
            <p>
                Place each potato on a cutting board and, using the bottom side of a cup, carefully smash the potato into a flat disc. The
                thinner the potato, the crisper they will be.
            </p>
            <p>Lay each potato disc onto your air fry basket.</p>
            <p>Drizzle olive oil, salt and pepper to taste over top.</p>
            <p>Cook at 425F for 15-20minutes, or until desired crispness.</p>
            <p>Enjoy as is or with your favorite sauce!</p>
        </>
    ),
};

export default recipe;
