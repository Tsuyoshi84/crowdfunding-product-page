<script setup lang="ts">
import iconCloseMenu from '@/assets/images/icon-close-menu.svg'
import iconHamburger from '@/assets/images/icon-hamburger.svg'

const isMenuOpen = $ref(false)

const menuIconSrc = $computed(() => {
	return isMenuOpen ? iconCloseMenu : iconHamburger
})

const buttonLabel = $computed(() => {
	return isMenuOpen ? 'Close menu' : 'Open menu'
})
</script>

<template>
	<div class="backdrop-shadow" :class="{ open: isMenuOpen }"></div>
	<header>
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
		<nav :class="{ close: !isMenuOpen }">
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
	background-image: linear-gradient(
		to bottom,
		rgb(0 0 0 / 50%),
		rgb(0 0 0 / 20%)
	);
	inset: 0;
}

header {
	--gradient: linear-gradient(
		to bottom,
		hsl(0deg 0% 0% / 52%),
		hsl(0deg 0% 100% / 0%)
	);

	z-index: var(--z-index-menu);
	display: flex;
	flex-direction: row;
	align-items: flex-start;
	justify-content: space-between;
	padding: var(--spacing-6);
	background-image: var(--gradient),
		url('@/assets/images/image-hero-mobile.jpg');
	background-size: cover;
	block-size: 19rem;
	border-block-end: 1px solid #eaeaea;

	& > .logo {
		margin-block: var(--spacing-6) 0;
		margin-inline: var(--spacing-6) 0;
		object-fit: contain;
	}

	& > * {
		z-index: var(--z-index-menu);
	}
}

.menu-button {
	padding: 0;
	border: none;
	cursor: pointer;
	outline: none;
}

nav {
	position: fixed;
	z-index: var(--z-index-menu);
	inline-size: 100%;
	inset-block-start: var(--spacing-16);

	&.close {
		display: none;
	}

	& ul {
		padding: 0;
		border-radius: var(--spacing-2);
		background-color: var(--color-background);
		inline-size: calc(100% - var(--spacing-6) * 2);

		& li {
			padding: 0;
			padding: var(--spacing-6) var(--spacing-3);
			list-style: none;

			& > a {
				padding: 1rem;
				color: var(--color-text);
				font-size: var(--font-size-large);
				text-decoration: none;
			}

			&:not(:last-child) {
				border-block-end: 1px solid var(--color-border);
			}
		}
	}
}

@media (width >= 62em) {
	header {
		background-image: var(--gradient),
			url('@/assets/images/image-hero-desktop.jpg');
		block-size: 25rem;
		padding-block: var(--spacing-12);
		padding-inline: var(--spacing-36);
	}

	.menu-button {
		display: none;
	}

	nav {
		position: initial;
		inline-size: initial;

		&.close {
			display: block;
		}

		& ul {
			display: flex;
			padding: 0;
			margin: 0;
			background-color: initial;
			gap: var(--spacing-8);
			inline-size: initial;

			& li {
				padding: 0;

				& > a {
					padding: 0;
					color: var(--color-text-inversed);
					font-size: var(--font-size-small);

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
