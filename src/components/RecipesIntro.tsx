import { memo } from 'react';
import { AcronymToggle } from './AcronymToggle';

export const RecipesIntro = memo(() => (
    <>
        <span>
            All of these recipes fit the{' '}
            <a className='fw-bold' href='https://trimhealthymama.com' target='_blank' rel='noreferrer'>
                Trim Health Mama
            </a>{' '}
            lifestyle guidelines. This means they are not blood sugar spiking, are nourishing to your body, and can be used to promote
            weight loss. While we do not endorse the Keto diet, all <AcronymToggle>S</AcronymToggle> and <AcronymToggle>FP</AcronymToggle>{' '}
            meals are Keto friendly.
        </span>
    </>
));


