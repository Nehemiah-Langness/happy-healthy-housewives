import { memo } from 'react';

/** A badge to note that an ingredient is optional */
export const Optional = memo(({ reason }: { 
    /** The explanation for the optional ingredient.  Defaults to "Optional" */
    reason?: string 
}) => (
    <div className='badge bg-info-subtle text-dark'>{reason ?? 'Optional'}</div>
));
