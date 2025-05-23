import { BrowserRouter } from 'react-router';
import { recipes } from '../recipes';
import { renderToString } from 'react-dom/server';

const renderJsx = (node: React.ReactNode) => {
    const div = document.createElement('div');
    div.innerHTML = renderToString(<BrowserRouter>{node}</BrowserRouter>);
    return div.innerText.replace(/\s\s+/g, ' ').replace(/\s/g, ' ');
};

export let recipeList: ReturnType<typeof getRecipeList> = [];
function getRecipeList() {
    return Object.entries(recipes).map(([key, value]) =>
        Object.assign(value, {
            slug: key as keyof typeof recipes,
            search: [
                value.title,
                value.titleAlt,
                value.brief,
                Array.isArray(value.quote) ? value.quote.map((x) => x.person).join(',') : value.quote.person,

                renderJsx(
                    <>
                        {(Array.isArray(value.quote) ? value.quote : [value.quote]).map((x, i) => (
                            <p key={i}>{Array.isArray(x.Quote) ? x.Quote.map((c, i) => <span key={i}>{c}</span>) : x.Quote}</p>
                        ))}
                    </>
                ),
            ]
                .filter((x) => x)
                .map((x) => x?.toLocaleLowerCase().replace(/['".-]/g, '')) as string[],
        })
    );
}

recipeList = getRecipeList();
