<script lang="ts" setup>
import { Project } from '@/models/project'

type Props = {
	project: Project
}
const { project } = defineProps<Props>()

const emit = defineEmits<{
	toggleBookmark: []
	clickBackProject: []
}>()
</script>

<template>
	<section class="container">
		<img
			class="logo"
			src="@/assets/images/logo-mastercraft.svg"
			width="50"
			height="50"
			alt=""
		/>
		<h1 data-test="project-name" class="name">{{ project.name }}</h1>
		<p data-test="project-description" class="description">
			{{ project.description }}
		</p>
		<div class="button-container">
			<PrimaryButton
				data-test="back-project-button"
				@click="emit('clickBackProject')"
				>Back this project</PrimaryButton
			>
			<BookmarkButton
				data-testid="bookmark-button"
				:bookmarked="project.bookmarked"
				@click="emit('toggleBookmark')"
			/>
		</div>
	</section>
</template>

<style scoped lang="postcss">
.container {
	display: flex;
	inline-size: 100%;
	padding-inline: var(--spacing-8);
	padding-block: 0 var(--spacing-12);
	border: 1px solid var(--color-border-light);
	border-radius: var(--spacing-2);
	flex-direction: column;
	align-items: center;
	background-color: var(--color-background);

	& .logo {
		--size: 3.5rem;

		inline-size: var(--size);
		block-size: var(--size);
		margin-block-start: calc(var(--size) * -0.5);
	}

	& .name {
		margin-block-end: var(--spacing-1);
		padding-inline: var(--spacing-8);
		padding-block: 0;
		font-size: var(--font-size-large);
		font-weight: var(--font-weight-bold);
		text-align: center;
	}

	& .description {
		margin-block-end: var(--spacing-3);
		font-size: var(--font-size-small);
		line-height: var(--spacing-6);
		text-align: center;
		color: var(--color-text-subtle);
	}

	& .button-container {
		display: flex;
		justify-content: center;
	}
}

@media (width >= 62em) {
	.container {
		padding-inline: var(--spacing-12);
		padding-block: 0 var(--spacing-12);

		& .name {
			font-size: var(--font-size-xxxlarge);
		}

		& .description {
			margin-block-end: var(--spacing-8);
			font-size: var(--font-size-medium);
		}

		& .button-container {
			inline-size: 100%;
			justify-content: space-between;
		}
	}
}
</style>
