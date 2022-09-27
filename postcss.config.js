module.exports = (ctx) => ({
	map: ctx.env === 'development' ? ctx.map : false,
	plugins: {
		'postcss-nesting': {},
		cssnano: ctx.env === 'production' ? {} : false,
	},
})
