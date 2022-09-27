const { parse, compileTemplate } = require('@vue/compiler-sfc')
const { transform } = require('@babel/core')
const babelPreset = require('@babel/preset-env')

function getFileNameFromPath(path) {
	return path.split('/').pop()
}

function replaceFileExtension(path, ext) {
	return path.replace(/\.[^/.]+$/, ext)
}

module.exports = {
	process(content, filePath) {
		const filename = replaceFileExtension(getFileNameFromPath(filePath), '.vue')
		const source = `<template>${content}</template>`

		const parsed = parse(source, { filename })
		const template = compileTemplate({
			source: parsed.descriptor.template.content,
		}).code

		return transform(template, { presets: [babelPreset] })
	},
}
