module.exports = {
	extends: [
		'plugin:vue/base',
		'plugin:vue/vue3-essential',
		'plugin:vue/vue3-strongly-recommended',
		'plugin:vue/vue3-recommended',
		'prettier',
	],
	rules: {
		'vue/component-name-in-template-casing': ['error', 'PascalCase'],

		// Disabled rules
		'vue/multi-word-component-names': 'off',
		'vue/no-setup-props-destructure': 'off',
	},
	parserOptions: {
		parser: '@typescript-eslint/parser',
	},
}
