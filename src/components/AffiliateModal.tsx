import { memo } from 'react';
import { ExternalLink } from './ExternalLink';

export const AffiliateModal = memo(() => (
    <div className='modal fade' id='affiliate-modal' tabIndex={-1} aria-labelledby='affiliate-modal-label' aria-hidden='true'>
        <div className='modal-dialog modal-dialog-centered'>
            <div className='modal-content'>
                <div className='modal-header'>
                    <h1 className='modal-title' id='affiliate-modal-label'>
                        Trim Healthy Mama
                    </h1>
                    <button type='button' className='btn-close' data-bs-dismiss='modal' aria-label='Close'></button>
                </div>
                <div className='modal-body gap-2 d-flex flex-column'>
                    <div>
                        <ExternalLink to='https://store.trimhealthymama.com?ref=663'>Trim Healthy Mama (Affiliate Link)</ExternalLink>
                    </div>
                    <div style={{ fontSize: '0.8em' }}>
                        If you use our official THM Affiliate Link, we will earn a small commission on any purchases you make on the THM store,
                        which helps fund this website.
                    </div>
                </div>
                <div className='modal-footer gap-2 justify-content-between'>
                    <ExternalLink to='https://trimhealthymama.com'>Trim Healthy Mama (No Affiliation)</ExternalLink>
                    <button type='button' className='btn btn-secondary' data-bs-dismiss='modal'>
                        Close
                    </button>
                </div>
            </div>
        </div>
    </div>
));
