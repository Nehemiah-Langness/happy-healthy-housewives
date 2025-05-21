import { memo, type PropsWithChildren } from 'react';

export const AcronymToggle = memo(({ children }: PropsWithChildren) => (
    <a href='#' className='text-decoration-none fw-bold' data-bs-toggle='modal' data-bs-target='#acronym-key'>
        {children}
    </a>
));
