import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { memo } from 'react';

export const MessageUsButton = memo(({ small }: { small?: boolean }) => (
    <>
        <a className={'d-print-none btn btn-primary ' + (small ? 'btn-sm' : '')} href='https://ig.me/m/happyhealthyhousewives/'>
            <div className='d-flex align-items-center gap-2'>
                <FontAwesomeIcon style={{ fontSize: '1.3em' }} icon={faInstagram} /> Message us on Instagram!
            </div>
        </a>
        <span className='d-none d-print-inline'>Message us on Instagram! - <span className='ff-link'>https://ig.me/m/happyhealthyhousewives/</span></span>
    </>
));
