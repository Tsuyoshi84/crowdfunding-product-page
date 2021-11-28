<script setup lang="ts">
import PrimaryButton from '@/components/common/PrimaryButton.vue'
import { computed } from 'vue'

const props = defineProps({
  modelValue: {
    type: Number,
    required: true,
  },
  minPledge: {
    type: Number,
    default: 0,
  },
})

const emit = defineEmits<{
  (e: 'update:modelValue', value: number): void
  (e: 'submit'): void
}>()

const canSubmit = computed(() => props.modelValue >= props.minPledge)

function onChanged(e: Event) {
  if (typeof (e.currentTarget as any).value !== 'string') return

  const value = parseInt((e.currentTarget as any).value)

  emit('update:modelValue', value)
}
</script>

<template>
  <form data-cy="input-form" @submit.prevent="emit('submit')">
    <label for="pledge">Enter your pledge</label>
    <div class="wrapper">
      <div class="input-wrapper">
        <span>$</span>
        <input
          id="pledge"
          name="pledge"
          :value="modelValue"
          type="number"
          min="0"
          @input="onChanged"
        />
      </div>
      <primary-button type="submit" :disabled="!canSubmit"
        >Continue</primary-button
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
    color: var(--color-text-subtle);
    border: 1px solid var(--color-border);
    border-radius: var(--font-size-xlarge);
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: var(--spacing-2);
    padding: var(--spacing-2);

    & input {
      width: 100%;
      border: none;
      border-radius: var(--border-radius);
      font-weight: var(--font-weight-bold);
      font-size: var(--font-size-medium);
      color: var(--color-text-main);
      text-align: right;

      &:focus {
        outline: none;
      }
    }
  }
}
</style>
