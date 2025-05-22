import { faUpRightFromSquare } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { memo, type PropsWithChildren } from 'react';

export const ExternalLink = memo(({ to, children }: PropsWithChildren<{ to: string }>) => (
    <a href={to} target='_blank' rel='noreferrer'>
        <FontAwesomeIcon icon={faUpRightFromSquare}/> {children}
    </a>
));
