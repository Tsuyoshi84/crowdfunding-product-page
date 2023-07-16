import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'

// https://vitejs.dev/config/
export default defineConfig({
	resolve: {
		alias: [
			{ find: '@', replacement: '/src' },
			{ find: 'components', replacement: '/src/components' },
		],
	},
	plugins: [
		vue({ reactivityTransform: true, script: { defineModel: true } }),

		// https://github.com/antfu/unplugin-auto-import
		AutoImport({
			imports: ['vue', 'pinia'],
			dts: 'src/auto-imports.d.ts',
		}),

		// https://github.com/antfu/unplugin-vue-components
		Components({
			// allow auto load components under `./src/components/`
			extensions: ['vue'],

			include: [/\.vue$/, /\.vue\?vue/],

			// custom resolvers
			resolvers: [
				// auto import icons
			],

			dts: 'src/components.d.ts',
		}),
	],
})
