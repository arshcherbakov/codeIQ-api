module.exports = {
	parser: "@typescript-eslint/parser",
	parserOptions: {
		project: "tsconfig.json",
		tsconfigRootDir: __dirname,
		sourceType: "module",
	},
	plugins: ["@typescript-eslint/eslint-plugin"],
	extends: ["plugin:@typescript-eslint/recommended", "plugin:prettier/recommended"],
	root: true,
	env: {
		node: true,
		jest: true,
	},
	ignorePatterns: [".eslintrc.js"],
	rules: {
		"@typescript-eslint/interface-name-prefix": "off",
		"@typescript-eslint/explicit-function-return-type": "off",
		"@typescript-eslint/explicit-module-boundary-types": "off",
		"@typescript-eslint/no-explicit-any": "off",
		camelcase: "off",
		"@typescript-eslint/naming-convention": [
			"error",
			{
				selector: "variable",
				format: ["camelCase"],
			},
			{
				selector: "typeLike",
				format: ["PascalCase"],
			},
			{
				selector: "parameter",
				format: ["camelCase"],
			},
		],
		"no-console": "error",
		"no-unused-vars": ["error", { vars: "all", args: "after-used", ignoreRestSiblings: false }],
		"@typescript-eslint/explicit-function-return-type": "error",
		"max-lines-per-function": ["error", 25],
		"max-len": ["error", 120],
	},
};
