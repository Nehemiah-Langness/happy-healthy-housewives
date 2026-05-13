import { memo, type PropsWithChildren } from 'react';

/** A badge to note that an ingredient is optional */
export const Optional = memo(
    ({
        reason,
        children
    }: PropsWithChildren<{
        /** The explanation for the optional ingredient.  Defaults to "Optional" */
        reason?: string;
    }>) => <div className='badge bg-info-subtle text-dark'>{children ?? reason ?? 'Optional'}</div>
);
