import { memo, type PropsWithChildren } from 'react';


export const AffiliateLink = memo(({ children }: PropsWithChildren) => (
    <a href='#' data-bs-toggle='modal' data-bs-target='#affiliate-modal'>
        {children}
    </a>
));
