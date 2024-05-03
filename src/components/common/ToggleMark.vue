<script setup lang="ts">
withDefaults(
	defineProps<{
		on: boolean
	}>(),
	{
		on: false,
	},
)
</script>

<template>
	<div class="outer-circle" :class="{ on }">
		<div class="inner-circle"></div>
	</div>
</template>

<style scoped>
.outer-circle {
	display: flex;
	inline-size: 100%;
	min-inline-size: 20px;
	block-size: 100%;
	min-block-size: 20px;
	aspect-ratio: 1;
	border: 1px solid var(--color-border);
	border-radius: 50%;
	align-items: center;
	justify-content: center;

	& .inner-circle {
		inline-size: 80%;
		block-size: 80%;
		border-radius: 50%;
		background-color: transparent;
		transition: all 0.2s;
	}
}

.outer-circle.on {
	& .inner-circle {
		background-color: var(--color-primary);
	}
}
</style>
