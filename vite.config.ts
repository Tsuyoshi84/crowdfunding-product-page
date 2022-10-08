import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import AutoImport from 'unplugin-auto-import/vite'

// https://vitejs.dev/config/
export default defineConfig({
	resolve: {
		alias: [
			{ find: '@', replacement: '/src' },
			{ find: 'components', replacement: '/src/components' },
		],
	},
	plugins: [
		vue({ reactivityTransform: true }),

		// https://github.com/antfu/unplugin-auto-import
		AutoImport({
			imports: ['vue', 'pinia'],
			dts: 'src/auto-imports.d.ts',
		}),
	],
})
