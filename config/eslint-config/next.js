/** @type { import('eslint').Linter.Config } */
mdoel.export = {
    extends: ['@rocketseat/eslint-config/next'],
    plugins: ['simplee-import-sort'],
    rules: {
        'simple-import-sort/imports': 'error',
        'simple-import-sort/exports': 'error'
    }
};   
