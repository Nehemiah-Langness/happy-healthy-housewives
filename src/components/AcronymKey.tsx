export function AcronymKey() {
    return (
        <>
            <a
                href='#'
                className='text-decoration-none fw-bold d-print-none'
                data-bs-toggle='modal'
                data-bs-target='#acronym-key'
                style={{ fontSize: '0.8rem' }}
            >
                View our Acronym Key
            </a>
            <div className='modal fade text-start' id='acronym-key' tabIndex={-1} aria-labelledby='acronym-key-label' aria-hidden='true'>
                <div className='modal-dialog modal-dialog-centered'>
                    <div className='modal-content'>
                        <div className='modal-header'>
                            <h1 className='modal-title' id='acronym-key-label'>
                                Acronym Key
                            </h1>
                            <button type='button' className='btn-close' data-bs-dismiss='modal' aria-label='Close'></button>
                        </div>
                        <div className='modal-body'>
                            <ul>
                                <li>
                                    <b>FP &mdash;</b> THM Fuel Pull, low carb/low fat (Keto friendly)
                                </li>
                                <li>
                                    <b>E &mdash;</b> THM Energizing Meal, high carb/low fat
                                </li>
                                <li>
                                    <b>S &mdash;</b> THM Satisfying Meal, low carb/high fat (Keto friendly)
                                </li>
                                <li>
                                    <b>XO &mdash;</b> THM Crossover Meal, high carb/high fat
                                </li>
                                <li>
                                    <b>DF &mdash;</b> Dairy Free
                                </li>
                                <li>
                                    <b>GF &mdash;</b> Gluten Free
                                </li>
                            </ul>
                        </div>
                        <div className='modal-footer'>
                            <button type='button' className='btn btn-secondary' data-bs-dismiss='modal'>
                                Close
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <div style={{ fontSize: '0.8rem' }} className='text-start d-none d-print-block ff-link'>
                <b>Acronym Key:</b>
                <ul>
                    <li>
                        <b>FP &mdash;</b> THM Fuel Pull, low carb/low fat (Keto friendly)
                    </li>
                    <li>
                        <b>E &mdash;</b> THM Energizing Meal, high carb/low fat
                    </li>
                    <li>
                        <b>S &mdash;</b> THM Satisfying Meal, low carb/high fat (Keto friendly)
                    </li>
                    <li>
                        <b>XO &mdash;</b> THM Crossover Meal, high carb/high fat
                    </li>
                    <li>
                        <b>DF &mdash;</b> Dairy Free
                    </li>
                    <li>
                        <b>GF &mdash;</b> Gluten Free
                    </li>
                </ul>
            </div>
        </>
    );
}
