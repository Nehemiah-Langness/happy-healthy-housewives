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
    .map((x) => ({
        tag: x[0] as keyof typeof tagMap,
        label: x[1],
        order: Object.keys(tagMap).indexOf(x[0]),
        image:
            recipeList
                .filter((r) => r.tags.includes(x[0] as Tag))
                .sort((a, b) => -Math.sign(a.dateAdded.valueOf() - b.dateAdded.valueOf()))[0]?.image ?? '',
    }))
    .sort((a, b) => (a.order < b.order ? -1 : a.order > b.order ? 1 : 0));
