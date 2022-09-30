<script setup lang="ts">
interface Props {
	on: boolean
}

const { on = false } = defineProps<Props>()
</script>

<template>
	<div class="outer-circle" :class="{ on }">
		<div class="inner-circle"></div>
	</div>
</template>

<style scoped lang="postcss">
.outer-circle {
	display: flex;
	align-items: center;
	justify-content: center;
	border: 1px solid var(--color-border);
	border-radius: 50%;
	aspect-ratio: 1;
	block-size: 100%;
	inline-size: 100%;
	min-block-size: 20px;
	min-inline-size: 20px;

	& .inner-circle {
		border-radius: 50%;
		background-color: transparent;
		block-size: 80%;
		inline-size: 80%;
		transition: all 0.2s;
	}
}

.outer-circle.on {
	& .inner-circle {
		background-color: var(--color-primary);
	}
}
</style>
