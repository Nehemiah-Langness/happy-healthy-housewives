export interface Recipe {
    /** The name of the recipe */
    title: string;

    /** The short description of the recipe to show on links to the recipe */
    brief: string;

    /** The name of the image file in the folder: /public/recipe-images */
    image: string;

    /** The quote at the start of the recipe */
    quote: {
        /** Who said the quote */
        person: string;

        /** What was said */
        quote: string;
    };

    /** The list of ingredients */
    Ingredients: React.ReactNode[];

    /** Any additional content to add to the end of the ingredient list */
    IngredientNotes?: React.ReactNode;

    /** Content containing the directions for cooking */
    Directions: React.ReactNode;

    /** Tags to display, such as THM meal type, dietary notes, etc */
    tags: string[];

    /** The date the recipe was added to the site */
    dateAdded: Date;
}
