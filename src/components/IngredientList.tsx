export function IngredientList({
    Ingredients, title, IngredientNotes,
}: {
    title: string;
    Ingredients: React.ReactNode[];
    IngredientNotes?: React.ReactNode;
}) {
    return (
        <div className='d-flex flex-column gap-1 mb-2' style={{breakInside: 'avoid'}}>
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
