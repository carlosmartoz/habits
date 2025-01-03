// JS
import js from "@eslint/js";

// Globals
import globals from "globals";

// TypeScript ESLint
import tseslint from "typescript-eslint";

// ESLint Plugin React Hooks
import reactHooks from "eslint-plugin-react-hooks";

// ESLint Plugin React Refresh
import reactRefresh from "eslint-plugin-react-refresh";

// Config
export default tseslint.config(
  { ignores: ["dist"] },
  {
    files: ["**/*.{ts,tsx}"],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
    },
    plugins: {
      "react-hooks": reactHooks,
      "react-refresh": reactRefresh,
    },
    rules: {
      ...reactHooks.configs.recommended.rules,
      "react-refresh/only-export-components": [
        "warn",
        { allowConstantExport: true },
      ],
    },
    extends: [js.configs.recommended, ...tseslint.configs.recommended],
  }
);
