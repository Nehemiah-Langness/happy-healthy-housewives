import type { Recipe } from '../types/recipe';

const recipe: Recipe = {
    title: 'Smoked Chicken Thighs',
    tags: ['THM S', 'Keto Friendly', 'DF', 'GF'],
    dateAdded: new Date('2025-05-15'),
    brief: `Pull out your smoker and celebrate Summer with Brianna's Smoked Chicken Thighs!`,
    image: 'smoked-chicken-thighs.jpg',
    file: 'SmokedChickenThighs.pdf',
    quote: [
        {
            person: 'Brianna',
            Quote: [
                `Have you ever made smoked meats before? Neither had we, but we are seriously obsessed with this smoked chicken!  Chicken is notoriously the easiest meat to smoke. It's relatively a short amount of time, and it's moist and delicious. I promise you won't be disappointed! `,
            ],
        },
        {
            person: 'Mandy',
            Quote: [
                `My husband and I don't have a grill, so we constantly invite ourselves to my sister's house so they can serve us this meal! It is my absolute favorite way to have chicken!`,
            ],
        },
    ],
    servings: 'Approximately 8 chicken thighs',
    Ingredients: [
        <>1 TBS Paprika</>,
        <>1 TBS Chili Powder</>,
        <>1 TBS Cumin</>,
        <>1 TBS Onion powder</>,
        <>1 TBS Garlic powder</>,
        <>2 TSP Mineral Salt</>,
        <>2 TSP Black Pepper</>,
        <>2 TSP Super Sweet</>,
        <>1 bag of boneless skinless chicken thighs, defrosted</>,
        <>1 bag hickory chips</>,
    ],
    Directions: (
        <>
            <p>
                Place the defrosted chicken thighs on a transportable surface (we use a baking sheet or plates). Mix all seasonings together
                in a small bowl. Sprinkle liberally on the chicken thighs, then rub into the meat. Turnover and repeat.
            </p>
            <p>Start smoker and let the temp reach 250&deg; F.</p>
            <p>
                Place a good chunk of wood next to your coals, to begin burning and creating smoke. Place chicken on the grill, and closely
                monitor and add more coals or wood if necessary (the temperature should remain at 250F for consistent cooking).
            </p>
            <p>Cook for 3-4 hours, flipping the thighs over half way through.</p>
            <p>
                Once the thighs reach an internal temperature of 165-170F, they are done. Remove from grill and let rest for 15 minutes
                before serving.
            </p>
            <p>Enjoy!</p>
        </>
    ),
};

export default recipe;
