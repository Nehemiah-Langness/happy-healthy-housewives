import { baseUrl } from '../base-url';
import { RecipeLink } from '../components/RecipeLink';

export function HomePage() {
    return (
        <div className='container pt-5 d-flex flex-column gap-5'>
            <img className='w-100' src={baseUrl + '/banner.png'} />

            <div className='d-flex flex-column gap-4'>
                <div className='ff-title text-center border-bottom border-info border-2' style={{ fontSize: '4rem' }}>
                    What's New
                </div>
                <RecipeLink
                    to='/recipes/thm-e/twice-baked-cheesy-potatoes-thm-e'
                    image='twice-baked-cheesy-potatoes.jpeg'
                    title='Twice Baked Cheesy Potatoes (THM E) (GF)'
                    description="Trying to up your daily protein goals but also miss cheesy starchies? All your dreams (and goals) are possible with Bri's Twice Baked Cheesy Potatoes!"
                />
                <RecipeLink
                    to='/recipes'
                    image='brownie-batter-fruit-dip.jpg'
                    title='Brownie Batter Fruit Dip (THM FP) (GF) (DF)'
                    description="Want a tasty dessert that's easy and weight loss friendly? Look no further! Bri's yogurt based dip is just the thing you need for your sweet cravings."
                />
            </div>
        </div>
    );
}
