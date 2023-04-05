/** @type {import("prettier").Config} */
const config = {
  singleQuote: true,
  trailingComma: "es5",
  arrowParens: "always",
  endOfLine: "auto",
  bracketSpacing: false,
  plugins: [require.resolve("prettier-plugin-tailwindcss")],
};

module.exports = config;
