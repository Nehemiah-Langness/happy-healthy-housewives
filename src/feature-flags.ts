import { featureFlags as featureFlagsRaw } from './settings.json';

export const featureFlags = {
    ...featureFlagsRaw,
};

const queryParams = new URLSearchParams(window.location.search);
const queryFeatureFlags = queryParams.getAll('featureFlags');

(Object.keys(featureFlags) as (keyof typeof featureFlags)[]).forEach((key) => {
    if (queryFeatureFlags.includes(key)) {
        featureFlags[key] = true;
    }
});
