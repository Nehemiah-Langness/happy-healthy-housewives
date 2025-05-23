import { memo } from 'react';


export const Footnote = memo(({ count, text }: { count?: number; text?: string; }) => (
    <b>
        <span>{new Array(count ?? 1).fill(text ?? '*').join('')}</span>
    </b>
));
