<script setup lang="ts">
type Props = {
	bookmarked?: boolean
}

const props = withDefaults(defineProps<Props>(), {
	bookmarked: false,
})

const label = computed<'Bookmarked' | 'Bookmark'>(() => {
	return props.bookmarked ? 'Bookmarked' : 'Bookmark'
})
</script>

<template>
	<button
		class="bookmark-button"
		aria-label="Toggle bookmark"
		:class="{ bookmarked }"
		v-bind="$attrs"
		data-test="bookmark-button"
	>
		<!-- icon-bookmark.svg -->
		<svg class="icon" viewBox="0 0 56 56" xmlns="http://www.w3.org/2000/svg">
			<g fill="none" fill-rule="evenodd">
				<circle fill="#2F2F2F" cx="28" cy="28" r="28" />
				<path fill="#B1B1B1" d="M23 19v18l5-5.058L33 37V19z" />
			</g>
		</svg>
		<span class="label">{{ label }}</span>
	</button>
</template>

<style lang="postcss" scoped>
.bookmark-button {
	display: flex;
	padding: 0;
	border-radius: 2rem;
	align-items: center;
	gap: 1rem;
	background-color: var(--color-disabled-light-3);

	& .icon {
		inline-size: var(--spacing-14);
		block-size: var(--spacing-14);

		& circle {
			transition: fill 0.2s ease-in-out;
			fill: var(--color-disabled-dark);
		}

		& path {
			transition: fill 0.2s ease-in-out;
			fill: var(--color-disabled-light-2);
		}
	}

	& .label {
		display: none;
		font-size: var(--font-size-medium);
		font-weight: var(--font-weight-bold);
		color: var(--color-disabled);
		transition: color 0.2s ease-in-out;

		@media (width >= 62em) {
			display: initial;
		}
	}

	&:is(:hover, :focus, :active) {
		& .icon {
			& circle {
				fill: var(--color-disabled-light-1);
			}
		}

		& .label {
			color: var(--color-disabled-light-1);
		}
	}

	&.bookmarked {
		background-color: var(--color-primary-light-2);

		& .icon {
			& circle {
				fill: var(--color-primary-dark);
			}

			& path {
				fill: hsl(0deg 0% 100%);
			}
		}

		& .label {
			color: var(--color-primary-dark);
		}
	}
}

@media (width >= 62em) {
	.bookmark-button {
		padding-inline: 0 var(--spacing-6);
		padding-block: 0;
	}
}
</style>
