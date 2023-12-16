<script setup lang="ts">
import iconCloseMenu from '@/assets/images/icon-close-menu.svg'
import iconHamburger from '@/assets/images/icon-hamburger.svg'

const isMenuOpen = ref(false)

const menuIconSrc = computed(() => {
	return isMenuOpen ? iconCloseMenu : iconHamburger
})

const buttonLabel = computed(() => {
	return isMenuOpen ? 'Close menu' : 'Open menu'
})
</script>

<template>
	<div class="backdrop-shadow" :class="{ open: isMenuOpen }"></div>
	<header class="header">
		<div>
			<img
				class="logo"
				src="@/assets/images/logo.svg"
				alt="crowdfund"
				width="128"
				height="20"
			/>
		</div>
		<div>
			<button
				class="menu-button"
				data-test="menu-button"
				type="button"
				:aria-label="buttonLabel"
				@click="isMenuOpen = !isMenuOpen"
			>
				<img :src="menuIconSrc" alt="" width="16" height="15" />
			</button>
		</div>
		<nav class="nav" :class="{ close: !isMenuOpen }">
			<ul>
				<li><a href="/about">About</a></li>
				<li><a href="/discover">Discover</a></li>
				<li><a href="/get-started">Get Started</a></li>
			</ul>
		</nav>
	</header>
</template>

<style scoped lang="postcss">
.backdrop-shadow.open {
	position: fixed;
	z-index: var(--z-index-backdrop-shadow);
	inset: 0;
	background-image: linear-gradient(
		to bottom,
		rgb(0 0 0 / 50%),
		rgb(0 0 0 / 20%)
	);
}

.header {
	--gradient: linear-gradient(
		to bottom,
		hsl(0deg 0% 0% / 52%),
		hsl(0deg 0% 100% / 0%)
	);

	z-index: var(--z-index-menu);
	display: flex;
	block-size: 19rem;
	padding: var(--spacing-6);
	border-block-end: 1px solid #eaeaea;
	flex-direction: row;
	align-items: flex-start;
	justify-content: space-between;
	background-image: var(--gradient),
		url('@/assets/images/image-hero-mobile.jpg');
	background-size: cover;

	& > .logo {
		margin-inline: var(--spacing-6) 0;
		margin-block: var(--spacing-6) 0;
		object-fit: contain;
	}

	& > * {
		z-index: var(--z-index-menu);
	}
}

.menu-button {
	padding: 0;
	border: none;
	outline: none;
	cursor: pointer;
}

.nav {
	position: fixed;
	z-index: var(--z-index-menu);
	inset-block-start: var(--spacing-16);
	inline-size: 100%;

	&.close {
		display: none;
	}

	& ul {
		inline-size: calc(100% - var(--spacing-6) * 2);
		padding: 0;
		border-radius: var(--spacing-2);
		background-color: var(--color-background);

		& li {
			padding: 0;
			padding-inline: var(--spacing-3);
			padding-block: var(--spacing-6);
			list-style: none;

			& > a {
				padding: 1rem;
				font-size: var(--font-size-large);
				text-decoration: none;
				color: var(--color-text);
			}

			&:not(:last-child) {
				border-block-end: 1px solid var(--color-border);
			}
		}
	}
}

@media (width >= 62em) {
	.header {
		block-size: 25rem;
		padding-inline: var(--spacing-36);
		padding-block: var(--spacing-12);
		background-image: var(--gradient),
			url('@/assets/images/image-hero-desktop.jpg');
	}

	.menu-button {
		display: none;
	}

	.nav {
		position: initial;
		inline-size: initial;

		&.close {
			display: block;
		}

		& ul {
			display: flex;
			inline-size: initial;
			margin: 0;
			padding: 0;
			gap: var(--spacing-8);
			background-color: initial;

			& li {
				padding: 0;

				& > a {
					padding: 0;
					font-size: var(--font-size-small);
					color: var(--color-text-inversed);

					&:hover {
						cursor: pointer;
					}
				}

				&:not(:last-child) {
					border-block-end: initial;
				}
			}
		}
	}
}
</style>
