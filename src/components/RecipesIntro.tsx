import { memo } from 'react';
import { AllergyDisclaimer } from './AllergyDisclaimer';
import { AcronymKey } from './AcronymKey';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExternalLink } from '@fortawesome/free-solid-svg-icons';

export const RecipesIntro = memo(() => (
    <>
        <span>
            All of these recipes fit the Trim Healthy Mama lifestyle guidelines. This means they are not blood sugar spiking, are nourishing
            to your body, and can be used to promote weight loss.
        </span>
        <span>While we do not endorse the Keto diet, all "S" and "FP" (<AcronymKey />) meals are Keto friendly.</span>

        <span>
            For more information, please visit{' '}
            <a className='fw-bold' href='https://trimhealthymama.com' target='_blank' rel='noreferrer'>
                <FontAwesomeIcon icon={faExternalLink}/> Trim Health Mama
            </a>
            .
        </span>

        <span>
            <AllergyDisclaimer />
        </span>
    </>
));
