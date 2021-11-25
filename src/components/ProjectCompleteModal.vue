<script setup lang="ts">
import { ref, watch } from 'vue'
import PrimaryButton from './common/PrimaryButton.vue'

const props = defineProps({
  open: {
    type: Boolean,
    default: false,
  },
})

const dialog = ref<null | HTMLElement>(null)

function openModal() {
  if (typeof (dialog.value as any)?.showModal !== 'function') {
    alert(`Sorry, this browser doesn't support dialog element. :(`)
    return
  }

  ;(dialog.value as any).showModal()
}

function closeModal() {
  if (typeof (dialog.value as any)?.showModal !== 'function') {
    alert(`Sorry, this browser doesn't support dialog element. :(`)
    return
  }

  ;(dialog.value as any).close()
}

watch(
  () => props.open,
  (open) => {
    if (open) {
      openModal()
    } else {
      closeModal()
    }
  },
)
</script>

<template>
  <dialog ref="dialog">
    <img src="@/assets/images/icon-check.svg" width="60" height="60" alt="" />
    <div class="title">Thanks for your support!</div>
    <p class="message">
      Your pledge brings us one step closer to sharing mastercraft Bamboo
      Monitor Riser worldwide.You will get an email once our campaign is
      completed.
    </p>
    <primary-button @click="closeModal">Got it!</primary-button>
  </dialog>
</template>

<style scoped lang="postcss">
dialog {
  border: none;
  border-radius: var(--spacing-2);
  padding: var(--spacing-6);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: var(--spacing-4);
  padding: var(--spacing-8);
  margin-inline-start: var(--spacing-6);
  margin-inline-end: var(--spacing-6);

  &::backdrop {
    background-color: hsl(0, 0%, 0%, 0.4);
  }
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
</style>
