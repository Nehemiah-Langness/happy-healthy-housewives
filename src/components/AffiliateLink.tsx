import { memo, type PropsWithChildren } from 'react';

/** Make the content clickable and when clicked, show a modal with an affiliate link and disclaimer in it */
export const AffiliateLink = memo(({ children }: PropsWithChildren) => (
    <a href='#' data-bs-toggle='modal' data-bs-target='#affiliate-modal'>
        {children}
    </a>
));
