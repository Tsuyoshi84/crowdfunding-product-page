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
  <form @submit.prevent="emit('submit')">
    <label>Enter your pledge</label>
    <input :value="modelValue" type="number" min="0" @input="onChanged" />
    <primary-button type="submit" :disabled="!canSubmit"
      >Continue</primary-button
    >
  </form>
</template>
