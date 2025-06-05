const categoryNames = {
    'Dairy / Non-Dairy': '',
    Baking: '',
    'Seasoning & Extracts': '',
    'Vinegar & Oil': '',
    'Nuts & Seeds': '',
    'Fruits & Vegetables': '',
    'Fiber & Grains': '',
    Protein: '',
};

export const categories = Object.entries(categoryNames)
    .map(([key], i) => [key, i] as [Category, number])
    .sort(([, aSort], [, bSort]) => Math.sign(aSort - bSort))
    .map(([key]) => key);

export type Category = keyof typeof categoryNames;
