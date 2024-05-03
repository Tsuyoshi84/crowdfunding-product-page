import eslintConfigPrettier from 'eslint-config-prettier'
import pluginVue from 'eslint-plugin-vue'

export default [
	...pluginVue.configs['flat/recommended'],
	{
		files: ['**/*.vue'],
		languageOptions: {
			ecmaVersion: 2022,
			sourceType: 'module',
			parserOptions: {
				parser: '@typescript-eslint/parser',
				ecmaFeatures: {
					jsx: true,
				},
			},
		},
		rules: {
			'vue/component-name-in-template-casing': ['error', 'PascalCase'],
			'vue/html-self-closing': [
				'error',
				{
					html: {
						void: 'never',
						normal: 'never',
						component: 'always',
					},
					svg: 'always',
					math: 'always',
				},
			],

			// Disabled rules
			'vue/multi-word-component-names': 'off',
			'vue/no-setup-props-destructure': 'off',
		},
	},
	eslintConfigPrettier,
]
