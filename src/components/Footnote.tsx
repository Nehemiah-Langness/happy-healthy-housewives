import { memo } from 'react';

/** Footnote Notation */
export const Footnote = memo(
    ({
        count,
        text,
    }: {
        /** The number of the footnote - Defaults to 1 */
        count?: number;
        /** The text to display - Defaults to "*" */
        text?: string;
    }) => (
        <b>
            <span>{new Array(count ?? 1).fill(text ?? '*').join('')}</span>
        </b>
    )
);
