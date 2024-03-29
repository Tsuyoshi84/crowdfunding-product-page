module.exports = {
	extends: [
		'stylelint-config-standard',
		'stylelint-config-recommended-vue',
		'stylelint-prettier/recommended',
		'stylelint-config-pretty-order',
	],
	plugins: ['stylelint-use-logical-spec'],
	rules: {
		'liberty/use-logical-spec': 'always',
	},
}
