# Happy Healthy Housewives

## 1. Setting up your developer environment

Following the instructions below will setup Visual Studio Code, Node, and GIT on your development machine.

### VS Code
[Download Installer](https://code.visualstudio.com/download)

Download the installer from the link above and follow the installation wizard to setup the application.

### Node
[NVM Installer](https://github.com/coreybutler/nvm-windows/releases)

Download Node for Windows from the link above and follow the installation wizard to setup the application.

After setup, open Command Prompt or Powershell and run as Administrator (Right click on shortcut and select "Run as Administrator")

In the console, type `nvm install lts` and hit enter to install that current Long-term support version of node.

After the installation is complete, type `nvm use lts` to use the installed LTS version of node.

#### If you run into a permission error running the nvm.ps1 script, you will need to update your Powershell execution policy.  

### GIT
[git Installer](https://git-scm.com/downloads/win)

Click on the link above to download GIT and install it.  The defaults should be fine to leave as is.


## 2. VS Code Extensions
I recommend the following extensions in VS Code.  You can access the extensions via the sidebar icon with the four building blocks.

### Code Spell Checker
#### By Street Side Software
Provides Spell-Check support.

### ESLint
#### By Microsoft
Lints your code, helping you follow best-practices and catch common mistakes.

### Prettier - Code formatter
#### By Prettier
Keeps the code formatting consistent across files and developers.

## 3. Clone the Repository
Open the Source Control tab in the VS Code sidebar (3 dots with 2 lines connecting them to make a branch diagram).

Click on "Clone a Repository" and when the dialog appears at the top of the screen, select "Clone from Github"

You will be prompted to login, and after doing so, should see your list of repositories.  Select `happy-healthy-housewives` and then choose a folder to pull the code into.

## 4. Setup after pulling code (First time and after subsequent updates)

Open your console by pressing `ctrl + ~`, and then type `npm ci` into your terminal tab and press enter.

#### If you have an permissions error you may need to update your execution policy for remote scripts.

## 5. Run the application
Press F5 to run the application in debug mode.  
The URL will be displayed in the console.  You can click the URL or copy and paste it into a browser.

When running locally, all changes will be immediately reflected in the browser, but local changes will not be applied to the production site until you commit your changes to Github and run the `deploy` script.

# Adding and Changing Recipes

Recipes are all stored inside the `/src/recipes`.  Each recipe is it's own file, and the name of the file (without the .tsx) extension is the recipe part of the url when viewing the recipe.

The exception to this is the two files `index.ts` and `template.tsx`.  The `index.ts` file holds a list of all the recipes and passes that up to the application.  The file gets updated automatically when the `refresh` script runs.  The `template.tsx` file is used to create a new recipe when you run the `new` script.

## Editing a Recipe
Locate the recipe in the `/src/recipes` folder and open the file to edit it.  Any changes to the file will be immediately visible in your local browser once you save the file.  

If you want to change the URL for the recipe, you can rename the file.  After you rename the file, make sure all files are saved and then in your terminal window run `npm run refresh` to re-index your recipes in the `index.ts` file.

If you change a URL for a recipe and the old URL has already been published on the production site, you will want to add a redirect from the old URL to the new URL so any links on social media posts or bookmarked pages will still work.  To add a redirect, add the old URL to the recipe's `redirects` array.  (See the `Trim Mamaritas` recipe for an example of redirects)

## Adding a Recipe
To add a new recipe, run the following command in your terminal window: `npm run new "The title of your recipe inside double quotes"`

The script will create a new recipe in the recipes folder and automatically add the title to your recipe.

Place the image you want to use for the recipe in the `/public/recipe-files` folder.  You should name the image with the same name as the `.tsx` file in the recipes folder - eg. `banana-bread.tsx` and `banana-bread.jpeg`.

If you have a downloadable PDF, place it in the `/public/recipe-images` folder.  You should name the file with only a-z, 0-9 characters with no spaces using PascalCasing and match the title of the recipe - eg. title: "OMG! Bri's Banana Bread" would have the pdf file `OmgBrisBananaBread.pdf`

## Recipe Schema
Recipes follow the schema as defined in `/src/types/recipes.ts`.

#### title (string)
The title is the name of the recipe and should be surrounded by single quotes.  See the note on string values.

#### titleAlt (string, optional)
An alternate title to use for searching.  Useful for when a title has special symbols or character variations not typically typed on the keyboard such as `Piña Colada`

#### brief (string)
This is the brief description that shows next to the image in recipes lists, such as on the Recipes page or in the "Similar Recipes" section at the end of a recipe.

#### image (string)
This is the filename of the recipe image in the `/public/recipe-images` folder

#### servings (string, optional)
This is the number of servings that the recipe makes as a string.

#### servingSize (string, optional)
This is the size of a single serving as a string.

#### quote (Quote or Array of Quotes)
See note on Arrays and HTML Content.
If there is only one quote for the recipe, include only one JSON object with:
`person (string)` and `Quote (HTML Content)`.

If you need multiple quotes, provide an array of JSON objects with the specified properties.  See "Mama's Shepards Pie" recipe.

Quotes can contain multiple paragraphs and HTML Content such as links, formatting, etc.

#### quote - person (string)
The name of the person saying the quote as a string

#### quote - Quote (HTML Content)
The content of the quote.  See note on HTML Content.
Multiple paragraphs can be accomplished through using paragraph tags `<p></p>` in your quote markup.

#### Ingredients: (Array of strings/HTML Content or IngredientLists);
An array of ingredients or an array of `IngredientList` components.  
See notes on arrays and "Ingredient List".

If you do not need any formatting or links in any of your ingredients, you can provide just an array of strings to this property.  See the recipe "Twice Baked Cheesy Potatoes".

If you need any links or formatting, you should provide an array of HTML Content (See note on HTML Content) and the recipe "Avocado Loaf".

If you have your ingredients broken out into parts, such as "Cake Ingredients" and "Frosting Ingredients", then provide an array of `IngredientList` components.

See recipe "Apple Pie Oatmeal".



# Notes

### Strings
String values are unformatted text values surrounded by either double-quotes `""`, single quotes `''` or backticks ` `` `.

Using single quotes is the standard default way to set values to strings in the recipes files.  If your string has a single-quote in it, you can use double quotes to surround your string, or escape your single quote by replacing all single quotes in your text with `\'` instead.  

If you have long text that you want to wrap across multiple lines, you can use backticks, as they can span across multiple lines, where single and double quotes cannot.

### Arrays
Arrays are lists of values that are inside a pair of square brackets `[]` and have a comma between them.  
`[1, 2, 3, 4, 5, 6]` is an array of numbers.  
`['A', 'B', 'C', 'D']` is an array of strings.  
`[<>Title A</>, <>Title B</>]` is an array of HTML content.

### HTML Content
Place HTML Content between two empty HTML tags `<>CONTENT</>`.  If you need to add an HTML attribute to the root of your HTML content, you generally will want to use change the empty HTML tags to span tags `<span>CONTENT</span>`.  If the browser is not wrapping your content to a new line and breaking the layout, change to a div tag instead `<div>CONTENT</div>`.

For creating paragraphs, wrap your text inside paragraph tags `<p>CONTENT</p>`.  This will create white-space below your content to separate your paragraphs.  

Other tags to make note of are
- `<b></b>` Bold
- `<i></i>` Italics
- `<br/>` Force a line break

For adding links to other sites, see the note on "External Links"

For adding links to other recipes, see the note on "Recipe Links"

For adding a toggle to the acronym key, see the note on "Acronyms"

For adding a link to THM, see the note on "Affiliate Links"

Note that you can contain as many HTML tags inside your empty HTML tags as you'd like:
```html
<>
  <p>This is one paragraph</p>
  <p>This is another paragraph</p>
  <p>This is a final paragraph</p>
</>
```

### Imports
To use custom React elements in your recipe HTML markup, you will need to import the component at the top of the file.  You should only import the same component once per file and you should only import components you use in that file.

Below is the imports for the main React components you will be using.  Note the paths are relative to the recipes folder, so if you are developing outside of that folder, the paths need changed accordingly.
```typescript
import { AffiliateLink } from '../components/AffiliateLink';
import { AcronymToggle } from '../components/AcronymToggle';
import { ExternalLink } from '../components/ExternalLink';
import { Footnote } from '../components/Footnote';
import { IngredientList } from '../components/IngredientList';
import { LinkToRecipe } from '../components/LinkToRecipe';
import { Optional } from '../components/Optional';
import { RecipeHeader } from '../components/RecipeHeader';
```

### Affiliate Links
Any reference to THM or a THM product can be turned into a link that opens a modal with an affiliate link.  To use an affiliate link toggle, import the `AffiliateLink` component by adding the following to the top of your recipe file:  
`import { AffiliateLink } from '../components/AffiliateLink'`  
See Imports note.

You can then use the component in your HTML content as follows:  
 `<AffiliateLink>THM Gentle Sweet</AffiliateLink>`

### Acronyms
When using an acronym that has a definition provided in the acronym key, wrap your acronym with an `AcronymToggle` tag to make if bring up the key when clicked. Import the `AcronymToggle` component by adding the following to the top of your recipe file:  
`import { AcronymToggle } from '../components/AcronymToggle'`  
See Imports note.

You can then use the component in your HTML content as follows:  
 `<AcronymToggle>XO</AcronymToggle>`

### External Links
To add a link to an external site, import the `ExternalLink` component by adding the following to the top of your recipe file:  
`import { ExternalLink } from '../components/ExternalLink';`  
See Imports note.

You can then use the component in your HTML content as follows:  
 `<ExternalLink to="https://yourUrlHere">Your Text here</ExternalLink>`

### Recipe Links
To add a link to a recipe on your site, import the `LinkToRecipe` component by adding the following to the top of your recipe file:  
`import { LinkToRecipe } from '../components/LinkToRecipe';`  
See Imports note.

You can then use the component in your HTML content as follows:  
 `<LinkToRecipe recipe="the-filename-for-your-recipe">Recipe Title</LinkToRecipe>`