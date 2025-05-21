import { memo } from 'react';
import { baseUrl } from '../base-url';

export const RecipeHeaderImage = memo(({ title }: { title?: string }) => (
    <div
        className='position-relative overflow-hidden'
        style={{
            background: `0 40%/50% 100% no-repeat url('${baseUrl + '/lavender-bg-optimized.jpg'}'), center/cover no-repeat url('${
                baseUrl + '/sunflower-bg-optimized.jpg'
            }')`,
        }}
    >
        <div
            className='position-absolute'
            style={{
                inset: 0,
                backdropFilter: 'blur(20px) saturate(75%)',
            }}
        ></div>
        <div className='container'>
            <div className='w-100 position-relative' style={{ aspectRatio: 16 / 5, }}>
                <div
                    className='position-absolute'
                    style={{ inset: 0, background: `0 40%/cover no-repeat url('${baseUrl + '/lavender-bg-optimized.jpg'}')`,
                    maskImage:
                    'linear-gradient(to right, rgba(0, 0, 0, 0), rgba(0, 0, 0, 1) 1%, rgba(0, 0, 0, 1) 90%, rgba(0, 0, 0, 0) 95%, rgba(0, 0, 0, 0) 100%)', }}
                ></div>
                <div
                    className='position-absolute'
                    style={{
                        inset: 0,
                        background: `center/cover no-repeat url('${baseUrl + '/sunflower-bg-optimized.jpg'}')`,
                        maskImage:
                            'linear-gradient(to right, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0) 40%, rgba(0, 0, 0, 1) 60%, rgba(0, 0, 0, 1) 99%, rgba(0, 0, 0, 0))',
                    }}
                ></div>
            </div>
            <div className='position-absolute top-50 end-0 start-0'>
                <div
                    className='dancing-script text-center display-4'
                    style={{
                        transform: 'translateY(-50%)',
                        background: 'rgba(255,255,255,0.6)',
                        backdropFilter: 'blur(3px)',
                        paddingTop: '0.4em',
                        paddingBottom: '0.4em',
                    }}
                >
                    {title ?? 'Recipes'}
                </div>
            </div>
        </div>
    </div>
));
