import type { Recipe } from '../types/recipe';

const recipe: Recipe = {
    title: 'Venison Sausage Pasta',
    tags: ['THM S'],
    dateAdded: new Date('2025-05-22'),
    brief: `Hunters (or hunter's wives) rejoice! Here's another delicious way to use that venison filling up your freezer!`,
    image: 'venison-sausage-pasta.jpg',
    file: 'VenisonSausagePasta.pdf',
    quote: {
        person: 'Mandy',
        Quote: [
            <>
                I don't hunt, my husband doesn't hunt, but I love the taste of venison. We have family friends who will try and bag a buck
                for us, and I'm thrilled every year to fill up my freezer with a delicious lean meat. Some of the cuts you have to start
                getting creative with, and that's how I discovered this Venison Sausage Pasta! The flavors help balance the "gamey" flavors
                of venison, while still fueling your body towards your weight loss goals!
            </>,
        ],
    },
    Ingredients: [
    <>4 large venison sausages</>,
    <>3 Tbsp. extra virgin olive oil </>,
    <>1 onion, diced </>,
    <>1 Tbsp. minced garlic </>,
    <>2 (14oz) cans of diced tomatoes </>,
    <>1 Tbsp. balsamic vinegar</>,
    <>Pinch of red pepper flakes (or more if you're a spicy mama)</>,
    <>1/2 cup kalamata olives, seeded and chopped </>,
    <>1 Tbsp. basil </>,
    <>1 Tbsp. oregano </>,
    <>Salt and pepper to taste </>,
    <>1 package of <b>Dreamfields</b> pasta or 6 cups of zucchini noodles </>,
],

    Directions: (
        <>
            <p>Heat olive oil in a skillet, add sausages and brown evenly (approx. 6 minutes). </p>
            <p>Add diced onion and cook until translucent.</p>
            <p>Add remaining ingredients (minus the noodles) and cook until sausages reach an internal temperature of 152&deg; F (or higher). </p>
            <p>Serve sausage and sauce over a bed of delicious noodles. Enjoy! </p>
        </>
    ),
};

export default recipe;
