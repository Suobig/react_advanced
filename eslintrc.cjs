module.exports = {
  root: true,
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: "module",
    project: "./tsconfig.json",
  },
  plugins: ["react", "import", "jsx-a11y", "react-hooks", "boundaries"],
  extends: [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:jsx-a11y/recommended",
    "plugin:react-hooks/recommended",
    "plugin:import/recommended",
    "plugin:import/typescript",
    "prettier",
  ],
  rules: {
    "boundaries/element-types": [
      2,
      {
        default: "disallow",
        rules: [
          { from: "features", allow: ["shared", "entities"] },
          { from: "entities", allow: ["shared"] },
          { from: "widgets", allow: ["shared", "features", "entities"] },
          {
            from: "pages",
            allow: ["widgets", "features", "entities", "shared"],
          },
        ],
      },
    ],
  },
  settings: {
    react: {
      version: "detect",
    },
    "boundaries/elements": [
      { type: "shared", pattern: "src/6-shared/*" },
      { type: "entities", pattern: "src/5-entities/*" },
      { type: "features", pattern: "src/4-features/*" },
      { type: "widgets", pattern: "src/3-widgets/*" },
      { type: "pages", pattern: "src/2-pages/*" },
      { type: "app", pattern: "src/1-app/*" },
    ],
  },
}
