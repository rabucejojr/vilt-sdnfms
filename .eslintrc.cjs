/* eslint-env node */
require('@rushstack/eslint-patch/modern-module-resolution');

module.exports = {
    root: true,
    extends: [
        'plugin:vue/vue3-essential',
        'eslint:recommended',
        '@vue/eslint-config-prettier',
        'plugin:vue/vue3-recommended',
        '@vue/eslint-config-typescript',
    ],
    parser: '@typescript-eslint/parser',
    plugins: ['@typescript-eslint'],
    rules: {
        'vue/multi-word-component-names': 'off',
        'no-undef': 'off',
    }
}
