/** biome-ignore-all lint/complexity/noBannedTypes: No need to check */
/** biome-ignore-all lint/suspicious/noExplicitAny: No need to check */
declare module '*.vue' {
	import type { DefineComponent } from 'vue'
	const component: DefineComponent<{}, {}, any>
	export default component
}
