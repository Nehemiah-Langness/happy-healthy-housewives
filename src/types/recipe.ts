import type { recipes } from '../recipes';
import type { tagMap } from '../services/tag-map';

export interface Recipe {
    /** The name of the recipe */
    title: string;

    /** An alternate name of the recipe for increased searchability */
    titleAlt?: string;

    /** The short description of the recipe to show on links to the recipe */
    brief: string;

    /** The name of the image file in the folder: /public/recipe-images */
    image: string;

    /** The quantity of servings the recipe makes */
    servings?: string;

    /** The recommended serving size */
    servingSize?: string;

    /** The quote at the start of the recipe */
    quote: Quote | Quote[];

    /** The list of ingredients */
    Ingredients: React.ReactNode[];

    /** Any additional content to add to the end of the ingredient list */
    IngredientNotes?: React.ReactNode;

    /** Content containing the directions for cooking */
    Directions: React.ReactNode;

    /** Tags to display, such as THM meal type, dietary notes, etc */
    tags: (keyof typeof tagMap)[];

    /** The date the recipe was added to the site */
    dateAdded: Date;

    /** The filename of the recipe file in the folder public/recipe-files */
    file?: string;

    /** Any additional content to add to the end of the recipe */
    Notes?: React.ReactNode;

    /** Recipe URLS that should redirect to this recipe */
    redirects?: string[];

    /** Similar Recipes */
    similar?: (keyof typeof recipes)[];
}

type Quote = {
    /** Who said the quote */
    person: string;

    /** What was said */
    Quote: React.ReactNode | React.ReactNode[];
};
