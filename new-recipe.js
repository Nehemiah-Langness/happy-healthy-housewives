import { readFile, writeFile } from 'fs/promises';

const title = process.argv[2];
const filename = title
    .toLowerCase()
    .replace(/\s\s+/g, ' ')
    .replace(/ /g, '-')
    .replace(/[^a-zA-Z0-9-]/g, '');

console.log('Creating', title, filename);
(async () => {
    const templateFile = (await readFile('./src/recipes/template.tsx'))
        .toString()
        .replace('title: ""', `title: "${title}"`)
        .replace(
            "new Date('2025-05-15')",
            `new Date('${new Date().getFullYear()}-${(new Date().getMonth() + 1).toFixed().padStart(2, '0')}-${new Date()
                .getDate()
                .toFixed()
                .padStart(2, '0')}')`
        );

    await writeFile(`./src/recipes/${filename}.tsx`, templateFile);
})();
