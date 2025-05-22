import { memo } from 'react';

export const Optional = memo(({ reason }: { reason?: string }) => (
    <div className='badge bg-info-subtle text-dark'>{reason ?? 'Optional'}</div>
));
