<script setup lang="ts">
import PrimaryButton from './common/PrimaryButton.vue'

const { open = false } = defineProps<{
	open: boolean
}>()

defineEmits<{
	(e: 'update:open', open: boolean): void
}>()

const dialog = $ref<null | HTMLDialogElement>(null)

function show(): void {
	dialog?.showModal()
}

function close(): void {
	dialog?.close()
}

watch(
	() => open,
	(open) => (open ? show() : close()),
)

onMounted(() => {
	open ? show() : close()
})

defineExpose({
	open,
	close,
})
</script>

<template>
	<dialog ref="dialog" data-test="complete-modal">
		<img
			class="icon-check"
			src="@/assets/images/icon-check.svg"
			width="60"
			height="60"
			alt=""
		/>
		<div class="title">Thanks for your support!</div>
		<p class="message">
			Your pledge brings us one step closer to sharing mastercraft Bamboo
			Monitor Riser worldwide.You will get an email once our campaign is
			completed.
		</p>
		<PrimaryButton @click="$emit('update:open', false)">
			<span class="button-label" data-test="complete-modal-close-button"
				>Got it!</span
			>
		</PrimaryButton>
	</dialog>
</template>

<style scoped lang="postcss">
dialog {
	z-index: var(--z-index-modal);
	padding: var(--spacing-6);
	border: none;
	border-radius: var(--spacing-2);
	inline-size: calc(100vw - var(--spacing-12));
	max-inline-size: 28rem;

	&[open] {
		display: block;
		display: flex;
		flex-direction: column;
		align-items: center;
		padding: var(--spacing-8);
		gap: var(--spacing-4);

		&::backdrop {
			background-color: hsl(0deg 0% 0% / 40%);
			transition: backdrop-filter 0.3s ease;
		}
	}
}

.icon-check {
	margin-block-end: var(--spacing-6);
}

.title {
	font-size: var(--font-size-large);
	font-weight: var(--font-weight-bold);
	text-align: center;
}

.message {
	color: var(--color-text-subtle);
	font-size: var(--font-size-small);
	line-height: 1.5rem;
	text-align: center;
}

.button-label {
	font-size: var(--font-size-small);
}
</style>
