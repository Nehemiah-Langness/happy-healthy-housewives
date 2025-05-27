/** A list of ingredients with a title */
export function IngredientList({
    Ingredients,
    title,
    IngredientNotes,
}: {
    /** The title to display above the list */
    title: string;
    /** The list of ingredients */
    Ingredients: React.ReactNode[];
    /** Any notes to display at the end of the ingredients */
    IngredientNotes?: React.ReactNode;
}) {
    return (
        <div className='d-flex flex-column gap-1 mb-2' style={{ breakInside: 'avoid' }}>
            <span id={title} className='ff-title fw-bold'>
                {title}:
            </span>
            {Ingredients.map((Ingredient, index) => (
                <div key={index} className='px-2'>
                    {Ingredient}
                </div>
            ))}
            {IngredientNotes}
        </div>
    );
}
