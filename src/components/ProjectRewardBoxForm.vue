<script setup lang="ts">
type Props = {
	minPledge: number
}
const { minPledge = 0 } = defineProps<Props>()

const emit = defineEmits<{
	submit: []
}>()

const modelValue = defineModel<number>({ required: true })

const canSubmit = computed<boolean>(() => modelValue.value >= minPledge)

function onChanged(e: Event): void {
	if (typeof (e.currentTarget as any).value !== 'string') return

	const value = parseInt((e.currentTarget as any).value)
	modelValue.value = value
}
</script>

<template>
	<form data-test="input-form" @submit.prevent="emit('submit')">
		<label for="pledge">Enter your pledge</label>
		<div class="wrapper">
			<div class="input-wrapper">
				<span>$</span>
				<input
					id="pledge"
					name="pledge"
					data-test="pledge-input"
					:value="modelValue"
					type="number"
					min="0"
					@input="onChanged"
				/>
			</div>
			<PrimaryButton
				type="submit"
				:disabled="!canSubmit"
				data-test="submit-button"
				>Continue</PrimaryButton
			>
		</div>
	</form>
</template>

<style scoped lang="postcss">
form {
	display: flex;
	flex-direction: column;
	gap: var(--spacing-6);
}

label {
	text-align: center;
	color: var(--color-text-subtle);
}

.wrapper {
	display: flex;
	flex-direction: row;
	gap: var(--spacing-4);

	& .input-wrapper {
		display: flex;
		padding: var(--spacing-2);
		border: 1px solid var(--color-border);
		border-radius: var(--font-size-xlarge);
		flex-direction: row;
		align-items: center;
		gap: var(--spacing-2);
		color: var(--color-text-subtle);

		& input {
			inline-size: 100%;
			border: none;
			border-radius: var(--border-radius);
			font-size: var(--font-size-medium);
			font-weight: var(--font-weight-bold);
			text-align: end;
			color: var(--color-text-main);

			&:focus {
				outline: none;
			}
		}
	}
}
</style>
