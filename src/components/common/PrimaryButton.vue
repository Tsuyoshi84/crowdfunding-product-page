<script setup lang="ts">
interface Props {
	disabled?: boolean
	type?: 'button' | 'submit'
}
const { disabled = false, type = 'button' } = defineProps<Props>()
</script>

<template>
	<button
		:type="type"
		class="primary-button"
		:disabled="disabled"
		v-bind="$attrs"
	>
		<slot></slot>
	</button>
</template>

<style lang="postcss" scoped>
.primary-button {
	border-radius: var(--spacing-16);
	background-color: var(--color-primary);
	color: var(--color-text-inversed);
	font-size: var(--font-size-medium);
	min-block-size: var(--spacing-14);
	padding-block: var(--spacing-4);
	padding-inline: var(--spacing-12);
	transition: background-color 0.2s;

	&:disabled {
		background-color: var(--color-disabled-light-2);
		cursor: not-allowed;
	}

	&:is(:hover, :focus, :active):not(:disabled) {
		background-color: var(--color-primary-dark);
	}
}
</style>
