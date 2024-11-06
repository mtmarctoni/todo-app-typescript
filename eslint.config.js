import globals from "globals";
import pluginJs from "@eslint/js";
import tseslint from "typescript-eslint";
import pluginReact from "eslint-plugin-react";


/** @type {import('eslint').Linter.Config[]} */
export default [
  {files: ["**/*.{js,mjs,cjs,ts,jsx,tsx}"]},
  {languageOptions: { globals: globals.browser }},
  pluginJs.configs.recommended,
  ...tseslint.configs.all,
  pluginReact.configs.flat.recommended,
  {
    plugins: {
      tseslint,
      pluginReact
    }
  },
  {
    rules: {
      'react/react-in-jsx-scope': 'off',
      "@typescript-eslint/explicit-function-return-type": "error" //do not work...
  }}
];