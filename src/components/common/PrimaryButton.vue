<script setup lang="ts">
type Props = {
	disabled?: boolean
	type?: 'button' | 'submit'
}

withDefaults(defineProps<Props>(), {
	disabled: false,
	type: 'button',
})
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
	min-block-size: var(--spacing-14);
	padding-inline: var(--spacing-12);
	padding-block: var(--spacing-4);
	border-radius: var(--spacing-16);
	font-size: var(--font-size-medium);
	color: var(--color-text-inversed);
	background-color: var(--color-primary);
	transition: background-color 0.2s;

	&:disabled {
		background-color: var(--color-disabled-light-2);
	}

	&:is(:hover, :focus, :active):not(:disabled) {
		background-color: var(--color-primary-dark);
	}
}
</style>
