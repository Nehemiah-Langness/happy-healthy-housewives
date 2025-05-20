import { memo } from 'react';
import { AllergyDisclaimer } from './AllergyDisclaimer';

export const RecipesIntro = memo(() => (
    <>
        <span>
            All of these recipes fit the Trim Healthy Mama lifestyle guidelines. This means they are not blood sugar spiking, are nourishing
            to your body, and can be used to promote weight loss.
        </span>
        <span>While we do not endorse the Keto diet, all "S" and "FP" meals are Keto friendly.</span>

        <div>
            <span className='fw-bold'>Acronym Key:</span>
            <ul>
                <li>
                    <b>FP &mdash;</b> THM Fuel Pull, low carb/low fat (Keto friendly)
                </li>
                <li>
                    <b>E &mdash;</b> THM Energizing Meal, high carb/low fat
                </li>
                <li>
                    <b>S &mdash;</b> THM Satisfying Meal, low carb/high fat (Keto friendly)
                </li>
                <li>
                    <b>XO &mdash;</b> THM Crossover Meal, high carb/high fat
                </li>
                <li>
                    <b>DF &mdash;</b> Dairy Free
                </li>
                <li>
                    <b>GF &mdash;</b> Gluten Free
                </li>
            </ul>
        </div>

        <span>
            For more information, please visit{' '}
            <a className='text-decoration-none fw-bold' href='https://trimhealthymama.com' target='_blank' rel='noreferrer'>
                Trim Health Mama
            </a>
            .
        </span>

        <span>
            <AllergyDisclaimer />
        </span>
    </>
));
