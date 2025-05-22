import { memo } from 'react';
import { baseUrl } from '../base-url';
import icon from '../assets/icon.png';

export const RecipeLinkImage = memo(({ image, wide }: { image: string; wide?: boolean }) => (
    <div
        className='flex-shrink-0 mx-auto mx-lg-0 rounded-3 d-print-none'
        style={{
            background: image ? `center/cover url('${baseUrl + '/recipe-images/' + image}')` : `center/contain no-repeat url('${icon}')`,
            minHeight: '22rem',
            width: wide ? '25rem' : '16rem',
        }}
    ></div>
));
