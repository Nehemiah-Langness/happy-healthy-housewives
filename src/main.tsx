import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.scss';
import App from './App.tsx';
import { ingredientMap } from './services/ingredient-map.ts';
import { featureFlags } from './feature-flags.ts';

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <App />
    </StrictMode>
);

if (featureFlags.findByIngredients) {
    console.log(
        Object.entries(ingredientMap),
        Object.values(ingredientMap).reduce(
            (x, y) =>
                Object.assign(x, {
                    [y]: '',
                }),
            {}
        )
    );
}
