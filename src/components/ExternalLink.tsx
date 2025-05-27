import { faUpRightFromSquare } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { memo, type PropsWithChildren } from 'react';

/** Make the content a clickable link to an external site.  The content will be prefixed with an external link icon. */
export const ExternalLink = memo(
    ({
        to,
        children,
    }: PropsWithChildren<{
        /** The URL for the link to send the user to */
        to: string;
    }>) => (
        <a href={to} target='_blank' rel='noreferrer'>
            <FontAwesomeIcon icon={faUpRightFromSquare} /> {children}
        </a>
    )
);
