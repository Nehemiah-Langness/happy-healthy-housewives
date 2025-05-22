import { AcronymToggle } from '../components/AcronymToggle';
import { AffiliateLink } from '../components/AffiliateLink';
import type { Recipe } from '../types/recipe';

const recipe: Recipe = {
    title: "No Wait Sourdough Pizza",
    tags: ['THM XO', 'DF'],
    dateAdded: new Date('2025-05-15'),
    brief: `It's pizza night and you forgot to premix your sourdough pizza! Instead of ordering take out, try another of Mandy's No Wait recipes! All the deliciousness of sourdough without the ferment time!`,
    image: 'no-wait-sourdough-pizza.webp',
    file: 'NoWaitSourdoughPizza.pdf',
    quote: {
        person: 'Mandy',
        Quote: [
            <>I love the taste of sourdough baked goods. Unfortunately, sourdough has not been loving me back!</>,
            <>After many failed attempts at using the natural yeast to give rise to my breads, I decided to find ways to achieve the wonderful taste without the extra hassle. Enter in another of my No Wait Sourdough Recipes!</>,
            <>Imagine a life where you don’t have to plan your pizza nights, you can decide you want pizza and have it at your finger tips in less than an hour! </>,
        ],
    },
    servings: '2-4 Servings',
    Ingredients: [
        <>1.5 cups sourdough discard</>,
        <>1 cup <AffiliateLink>THM Baking Blend</AffiliateLink></>,
        <>4 tsp warm water</>,
        <>1 tsp dry instant yeast</>,
        <>1/4 tsp honey</>,
        <>1 tsp salt </>,
        <>1 Tbsp olive oil</>,
    ],

    Directions: (
        <>
            <p>Preheat oven to 350&deg; F.</p>
            <p>Place the warm water in a small bowl, stir in the honey. Mix in the dry instant yeast and allow to sit until it starts to bubble.</p>
            <p>Combine discard, yeast mixture, salt, and olive oil in a mixing bowl. Slowly add in the Baking Blend until you achieve a stretchy dough.</p>
            <p>Shape into a large circle on a parchment lined pan. Bake for 15 minutes.</p>
            <p>Remove, add desired pizza toppings, and bake another 5-7 minutes (or until cheese is melted).</p>
        </>
    ),
    Notes: (
        <>
            <p>I enjoy my pizza in my <AcronymToggle>DF</AcronymToggle> lifestyle forgoing the cheese and adding lots of delicious meats and veggies on top. Personally, I also like to mix a little bit of Olive Oil and chopped garlic and spread that on top after my pizza is finished baking. </p>
        </>
    ),
};

export default recipe;
