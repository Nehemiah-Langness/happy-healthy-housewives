import type { Tag } from '../types/tag';
import { recipeList } from './recipe-list';
import { tagMap } from './tag-map';

export const tags = Object.entries(
    recipeList
        .flatMap((recipe) => recipe.tags)
        .reduce(
            (c, n) => ({
                ...c,
                [n]: tagMap[n] ?? '',
            }),
            {} as Record<string, string>
        )
)
    .sort((a, b) => (a[0] < b[0] ? -1 : a[0] > b[0] ? 1 : 0))
    .map((x) => ({
        tag: x[0] as keyof typeof tagMap,
        label: x[1],
        image:
            recipeList.filter((r) => r.tags.includes(x[0] as Tag)).sort((a, b) => Math.sign(a.dateAdded.valueOf() - b.dateAdded.valueOf()))[0]
                ?.image ?? '',
    }));
