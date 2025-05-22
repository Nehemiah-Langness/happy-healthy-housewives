import { AffiliateLink } from '../components/AffiliateLink';
import type { Recipe } from '../types/recipe';

const recipe: Recipe = {
    title: 'Chocolate Avocado Balls',
    tags: ['THM S', 'Keto Friendly', 'DF', 'GF'],
    dateAdded: new Date('2025-05-15'),
    brief: `These little drops of chocolate deliciousness are made from the Superfood fat, avocado! Enjoy the dessert without the guilt!`,
    image: 'chocolate-avocado-balls.jpg',
    file: 'ChocolateAvocadoBalls.pdf',
    quote: {
        person: 'Mandy',
        Quote: [
            `This recipe I owe to my sweet mother-in-law. This past holiday season she wanted to make a yummy dessert for me to enjoy 
            that was dairy free and sugar free! She melted down on-plan chocolate chips and mixed with an avocado, then formed them into 
            balls! I was (and still am) obsessed.`,
            `I tweaked this recipe a tad to make it more affordable, but it’s still just as easy!`,
            <b>Pro-tip, you can sub out the vanilla extract for any flavoring or alcohol of choice!</b>,
        ],
    },
    servings: 'Approximately 24 balls',
    Ingredients: [
        '5 oz. unsweetened bakers chocolate',
        '2 Tbsp. coconut manna',
        '1 tsp. vanilla extract',
        <>3 Tbsp. powdered <AffiliateLink>THM Super Sweet</AffiliateLink> (or Pyure)</>,
        '1/3 c. mashed avocado (about 1 small avocado)',
        'Pinch of mineral salt',
        'cocoa powder, unsweetened coconut flakes, or melted chocolate for rolling',
    ],

    Directions: (
        <>
            <p>In a double boiler, melt together chocolate, coconut manna, vanilla extract, Super Sweet, and salt.</p>
            <p>In a separate bowl, mash the avocado until smooth and creamy.</p>
            <p>Combine the chocolate mixture and the avocado until well combined.</p>
            <p>Roll the mixture into small, bite sized balls in the palm of your hand and lay out on a plate. Cool in fridge overnight.</p>
            <p>When ready to serve, roll the balls in whatever topping you’d enjoy!</p>
        </>
    ),
    Notes: (
        <>
            <p>
                This mixture really needs to sit in the fridge overnight. The flavor seems to even out and become less bitter the following
                day.
            </p>
        </>
    ),
};

export default recipe;
