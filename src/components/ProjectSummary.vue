<script lang="ts" setup>
import { Project } from '@/models/project'

interface Props {
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
	flex-direction: column;
	align-items: center;
	border: 1px solid var(--color-border-light);
	border-radius: var(--spacing-2);
	background-color: var(--color-background);
	inline-size: 100%;
	padding-block: 0 var(--spacing-12);
	padding-inline: var(--spacing-8);

	& .logo {
		--size: 3.5rem;

		block-size: var(--size);
		inline-size: var(--size);
		margin-block-start: calc(var(--size) * -0.5);
	}

	& .name {
		font-size: var(--font-size-large);
		font-weight: var(--font-weight-bold);
		margin-block-end: var(--spacing-1);
		padding-block: 0;
		padding-inline: var(--spacing-8);
		text-align: center;
	}

	& .description {
		color: var(--color-text-subtle);
		font-size: var(--font-size-small);
		line-height: var(--spacing-6);
		margin-block-end: var(--spacing-3);
		text-align: center;
	}

	& .button-container {
		display: flex;
		justify-content: center;
	}
}

@media (width >= 62em) {
	.container {
		padding-block: 0 var(--spacing-12);
		padding-inline: var(--spacing-12);

		& .name {
			font-size: var(--font-size-xxxlarge);
		}

		& .description {
			font-size: var(--font-size-medium);
			margin-block-end: var(--spacing-8);
		}

		& .button-container {
			justify-content: space-between;
			inline-size: 100%;
		}
	}
}
</style>
