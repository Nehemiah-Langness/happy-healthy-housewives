import { readdir, writeFile } from 'fs/promises';

const pathToVariable = (filename) => {
    return filename
        .replace('.tsx', '')
        .split('-')
        .map((x, i) =>
            i === 0
                ? x
                : x
                      .split('')
                      .map((c, ci) => (ci === 0 ? c.toUpperCase() : c))
                      .join('')
        )
        .join('');
};

(async () => {
    const results = (
        await readdir('./src/recipes', {
            withFileTypes: true,
        })
    )
        .filter((x) => x.isFile() && x.name !== 'index.ts')
        .map((x) => ({
            variable: pathToVariable(x.name),
            path: x.name.replace('.tsx', ''),
        }));

    await writeFile(
        './src/recipes/index.ts',
        `${results.map((x) => `import ${x.variable} from './${x.path}';`).join('\n')}

export const recipes = {
${results.map((x) => `    ['${x.path}']: ${x.variable},`).join('\n')}
};`
    );
})();
