module.exports = (ctx) => ({
	map: ctx.env === 'development' ? ctx.map : false,
	plugins: {
		cssnano: ctx.env === 'production' ? {} : false,
	},
})
