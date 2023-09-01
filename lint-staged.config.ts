module.exports = {
    // this will check Typescript files
    '**/*.(ts|tsx)': () => 'pnpm tsc --noEmit',

    // This will lint and format TypeScript and                                             //JavaScript files
    '**/*.(ts|tsx|js)': (filenames: any) => [
        `pnpm eslint --fix ${filenames.join(' ')}`,
        `pnpm prettier --write ${filenames.join(' ')}`,
    ],

    // this will Format MarkDown and JSON
    '**/*.(md|json)': (filenames: any) =>
        `pnpm prettier --write ${filenames.join(' ')}`,
}