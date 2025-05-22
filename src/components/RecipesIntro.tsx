import { memo } from 'react';
import { AcronymToggle } from './AcronymToggle';
import { AffiliateLink } from './AffiliateLink';

export const RecipesIntro = memo(() => (
    <>
        <span>
            All of these recipes fit the <AffiliateLink>Trim Healthy Mama</AffiliateLink> lifestyle guidelines. This means they are not
            blood sugar spiking, are nourishing to your body, and can be used to promote weight loss. While we do not endorse the Keto diet,
            all <AcronymToggle>S</AcronymToggle> and <AcronymToggle>FP</AcronymToggle> meals are Keto friendly.
        </span>
    </>
));
