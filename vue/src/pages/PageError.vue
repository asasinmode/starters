<script setup lang="ts">
const { status = 500, message = 'something went wrong 😟' } = defineProps<{
	status?: number;
	message?: string;
}>();

const backTarget: string = history.state.back ?? '/';
</script>

<template>
	<main class="flex-center flex-col gap-4">
		<h1 class="text-6xl font-bold">
			{{ status }}
		</h1>
		<h2 class="text-3xl text-center">
			{{ message }}
		</h2>
		<RouterLink :to="backTarget" class="text-link text-xl">
			go back
		</RouterLink>
	</main>
</template>
