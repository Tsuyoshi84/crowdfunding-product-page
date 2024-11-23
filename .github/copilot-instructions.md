# Copilot Instructions

## General

- You have extensive expertise in Vue 3, TypeScript, Vite, Pinia, VueUse, and Cypress.
- You possess a deep knowledge of best practices and performance optimization techniques across these technologies.

## Code Style and Structure

- Write clean, maintainable, and technically accurate TypeScript code.
- Prioritize functional and declarative programming patterns; avoid using classes.
- Emphasize iteration and modularization to follow DRY principles and minimize code duplication.
- Write JSDoc comments for all exported functions, variables, and types for better readability and understanding.
- Write JSDoc and comments in Japanese.
- In JSDoc, `@return` annotation can be omitted since it's self-explanatory in most cases.

## HTML

- Specify `type` attribute for `<button>` elements.

## Vue 3 Specifics

- Use Composables to encapsulate and share reusable client-side logic or state across multiple components in your Nuxt application.
- Prefer Composition API `<script setup>` style.
- Prefer `shallowRef` over `ref` when deep watching is not needed.
- Use `defineModel` for v-model bindings.
- Avoid using index for `key` attribute when using `v-for`.
- Prefer `v-show` over `v-if` for conditional visibility.
- Use `useTemplateRef` introduced in Vue 3.5 when you need a template reference.
- Define `computed` type for better type safety. For example, `const nextLevel = computed<number>(() => currentLevel.value + 1)`.

## Naming Conventions

- Use UPPER_CASE for constants.
- Use upper case for acronyms. For example, name `getURL` instead of `getUrl`.
- Utilize composables, naming them as use `<MyComposable>`.
- Use **PascalCase** for component file names (e.g., `components/MyComponent.vue`).
- Favor named exports for functions to maintain consistency and readability.

## TypeScript Usage

- Prefer function declarations over function expressions. However, when passing a function to a parameter, prefer using a function expression.
- Define function return types for better readability and type safety.
- Prefer type over interface when possible.
- Use literal union types over enums.
- Use `unknown` over `any`.
- Prefer `undefined` over `null` unless `null` has to be used.
- Prefer `for...of` statement over `forEach`. However, allow use of `forEach` when chaining.
- Avoid non-null assertion operator (`!`) unless absolutely sure the value cannot be `null` or `undefined`.
- Put `as const` on constant objects.
- Prefer the guard clause (early return) when the rest of the function can be skipped after the return.
