import { AcronymToggle } from '../components/AcronymToggle';
import { AffiliateLink } from '../components/AffiliateLink';
import { Footnote } from '../components/Footnote';
import { IngredientList } from '../components/IngredientList';
import { Optional } from '../components/Optional';
import type { Recipe } from '../types/recipe';

const recipe: Recipe = {
    title: "Ma's Sweet Morning Quinoa",
    tags: ['THM E'],
    dateAdded: new Date('2025-05-22'),
    brief: `Start your morning off with a deliciously sweet complete protein that will fuel your body for whatever you have planned!`,
    image: 'mas-sweet-morning-quinoa.jpg',
    file: 'MasSweetMorningQuinoa.pdf',
    quote: [],
    servings: 'Single Serving',
    Ingredients: [
        <IngredientList
            title='Dry Ingredients'
            Ingredients={[
                <>1/4 cup of quinoa</>,
                <>1 pinch of sea salt</>,
                <>
                    1/4 cup of fresh or frozen cranberries and 1/4 cup of frozen blueberries <Footnote />
                    (or 1/2 cup of mixed frozen berries.) Add during the last 5 minutes not in the beginning.
                </>,
            ]}
        />,
        <IngredientList
            title='Wet Ingredients'
            Ingredients={[
                <>1/2 cup favorite nut milk </>,
                <>1/2 cup water (add 1/4 more as your cook if you feel is too thick)</>,
                <>1/4 cup egg whites </>,
                <>
                    1/4 tsp. Butter or Maple Extract <Optional reason='Optional but so yummy' />
                </>,
            ]}
        />,
        <IngredientList
            title='Healthy Additions'
            Ingredients={[
                <>1 tsp. of baobab</>,
                <>1 tsp. of Psyllium Flakes</>,
                <>1 Tbsp. of ground flax seed</>,
                <>
                    1/4 to 1/2 tsp. <AffiliateLink>THM Duo Greens powder</AffiliateLink> (depending on how green you like it)
                </>,
                <>1/4 cup cauliflower snow</>,
            ]}
        />,
        <IngredientList
            title='Topping'
            Ingredients={[
                <>2 or 3 shakes of sea salt </>,
                <>1 tsp. Cinnamon</>,
                <>
                    <AffiliateLink>THM Gentle Sweet</AffiliateLink> (measure with your heart, I like mine sweet)
                </>,
                <>1/4 cup boiling water</>,
                <>
                    1 tsp. of MCT oil, butter, or ghee. (1 tsp. of fat keeps this an <AcronymToggle>E</AcronymToggle>. If you are adding fat
                    to your morning coffee, then omit this or do 1/2 fat in your coffee and 1/2 in your quinoa)
                </>,
            ]}
        />,
    ],
    Directions: (
        <>
            <p>Before turning on the heat, throw wet and dry ingredients (except blueberries) into a small pot. Stir well.</p>
            <p>Cook on Medium Low (#3 on my stove) for 35 minutes, stirring often.</p>
            <p>Add frozen blueberries, cook for another 5 minutes.</p>
            <p>
                Pour cereal into a bowl, then top in this order: mineral salt, cinnamon, THM Gentle Sweet, MCT oil, then pour the boiling
                water on top of it all, which melts it all together.{' '}
            </p>
        </>
    ),
    Notes: (
        <>
            <p>
                To make a bulk batch, cook quinoa with ratios given on the package or bag. Mix wet and dry ingredients, and cranberries and
                blueberries, cook as instructed. Store in a sealed container in the fridge. When you're ready to eat, reheat for 30 seconds
                in the microwave then add the topping.
            </p>
        </>
    ),
};

export default recipe;
