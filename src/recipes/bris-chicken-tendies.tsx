import { LinkToRecipe } from '../components/LinkToRecipe';
import type { Recipe } from '../types/recipe';

const recipe: Recipe = {
    title: "Bri's Chicken Tendies",
    tags: ['THM S', 'Keto Friendly', 'DF', 'GF'],
    dateAdded: new Date('2025-05-15'),
    brief: `Try these "tastes like deep fried" chicken tenders and you won't believe you're eating healthy!`,
    image: 'bris-chicken-tendies.jpg',
    file: 'BrisChickenTendies.pdf',
    quote: {
        person: 'Brianna',
        Quote: [
            `Good, crispy, chicken tenders that are not detrimental to your health are hard to come by. A lot of the “on plan” 
            flours fall off and you annoyingly loose all your breading. These chicken tenders will NOT do that!`,
            `This was not even a recipe I thought about putting on our site. It was something I made up after hearing about a 
            similar concept and just rolling with it. Story of my life, ey? They were a huge hit with our family, and Mandy insisted I put it on the site.`,
            <span>
                Try these with my <LinkToRecipe recipe='sweet-and-spicy-sauce'>Sweet and Spicy Sauce</LinkToRecipe> or{' '}
                <LinkToRecipe recipe='honey-mustard'>“Honey” Mustard</LinkToRecipe>!
            </span>,
        ],
    },
    servings: 'Makes 10-12 strips',
    Ingredients: [
        '1 bag of frozen chicken tenders, defrosted',
        '1 bag of unflavored pork rinds',
        '1 tsp Chili Powder',
        '1 tsp Garlic Powder',
        '1 tsp Onion Powder',
        '1 tsp Paprika',
        '1/4 tsp Cumin',
        '1/2 tsp Salt',
        '1/2 tsp Black Pepper',
        'Dash of Cayenne Pepper',
        '3 eggs',
        '1/2 cup Unsweetened Nut Milk',
    ],
    Directions: (
        <>
            <p>
                Pulverize the bag of pork rinds by either placing in a food processor and running until fine or placing them in a medium
                bowl and mashing them with a potato masher. Add chili powder, garlic, onion, paprika, cumin, salt, pepper, cayenne, and
                crushed pork rinds in a bowl and mix well. Set to the side.
            </p>
            <p>In another medium sized bowl, place eggs and nut milk. Combine. </p>
            <p>
                Take defrosted tenders and place them in the pork rind bowl first. Cover them with pork rinds by rolling them around the
                pork rind bowl. Then take those tenders and roll them around in the egg and nut milk mixture, coating well. Place them back
                in the pork rind bowl and coat well again. Repeat until all tenders are coated.
            </p>
            <p>
                <b>Super Indulgent Frying Option: </b>
                Cover the bottom of a large fry pan with oil and set temperature medium high. Once the oil is hot, place tenders in the pan
                and fry on each side for 5 minutes.
            </p>
            <p>
                <b>Baking option: </b>
                Preheat oven to 375. Grease a large cookie sheet and place all tenders on the sheet. Spray the tops of the tenders with your
                cooking oil. Cook in oven for 15-20 minutes.
            </p>
        </>
    ),
    Notes: (
        <>
            <p>If frying your chicken tendies, be sure to use a oil intended for high heat. </p>
            <p>
                Depending on the temperature your oil reaches, it may fry the outside but not cook the inside. Always check to make sure
                your tenders are cooked through before serving.{' '}
            </p>
            <p>
                I suggest that if you are making these very often, you bake them. Pork rinds are already very high in fat, and therefore
                frying them as well will be better if used on occasion.{' '}
            </p>
        </>
    ),
};

export default recipe;
