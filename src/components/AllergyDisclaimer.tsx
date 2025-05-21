export function AllergyDisclaimer() {
    return (
        <>
            <div className='fst-italic text-center mx-auto'>
                Please read our{' '}
                <a href='#' className='text-decoration-none fw-bold' data-bs-toggle='modal' data-bs-target='#allergen-disclaimer'>
                    allergen disclaimer
                </a>{' '}
                before making these recipes
            </div>
            <div className='modal fade' id='allergen-disclaimer' tabIndex={-1} aria-labelledby='allergen-disclaimer-label' aria-hidden='true'>
                <div className='modal-dialog modal-dialog-centered'>
                    <div className='modal-content'>
                        <div className='modal-header'>
                            <h1 className='modal-title fs-5' id='allergen-disclaimer-label'>
                                Allergen Disclaimer
                            </h1>
                            <button type='button' className='btn-close' data-bs-dismiss='modal' aria-label='Close'></button>
                        </div>
                        <div className='modal-body'>
                            Although we try our best to make certain the foods we claim are allergen free are accurate, we are not medical
                            professionals. Before making a recipe, please research your allergen in relation to the ingredients we
                            recommend.
                        </div>
                        <div className='modal-footer'>
                            <button type='button' className='btn btn-secondary' data-bs-dismiss='modal'>
                                Close
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
