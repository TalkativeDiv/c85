module.exports = {
	env: {
		browser: true,
		es2021: true,
	},
	extends: [
		"eslint:recommended",
		"plugin:react/recommended",
		"plugin:@typescript-eslint/recommended",
		"prettier",
	],
	parser: "@typescript-eslint/parser",
	parserOptions: {
		ecmaFeatures: {
			jsx: true,
		},
		ecmaVersion: "latest",
		sourceType: ["module", "script"],
	},
	plugins: ["react", "@typescript-eslint"],
	rules: {
		"react/react-in-jsx-scope": "off",
		camelCase: 0,
		"spaced-comment": "error",
		quotes: [0, "single"],
		"no-duplicate-imports": "error",
		"linebreak-style": 0,
		indent: [0, "space"],
		"no-tabs": [1, { allowIndentationTabs: true }],
		"@typescript-eslint/ban-ts-ignore": "off",
		"@typescript-eslint/camelcase": "off",
		"@typescript-eslint/naming-convention": 0,
	},
};
