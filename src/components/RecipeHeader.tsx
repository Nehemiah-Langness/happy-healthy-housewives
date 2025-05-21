import type { PropsWithChildren } from 'react';

export function RecipeHeader({ children }: PropsWithChildren) {
    return <span className='ff-title fw-bold'>{children}</span>;
}
