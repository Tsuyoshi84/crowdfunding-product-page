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
    <primary-button @click="closeModal">
      <span class="button-label" data-test="complete-modal-close-button"
        >Got it!</span
      >
    </primary-button>
  </dialog>
</template>

<style scoped lang="postcss">
dialog {
  border: none;
  border-radius: var(--spacing-2);
  padding: var(--spacing-6);
  width: calc(100vw - var(--spacing-12));
  max-width: 28rem;
  z-index: var(--z-index-modal);

  &[open] {
    display: block;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: var(--spacing-4);
    padding: var(--spacing-8);

    &::backdrop {
      background-color: hsl(0, 0%, 0%, 0.4);
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
