<script setup lang="ts">
import type { StyleValue } from 'vue';

withDefaults(defineProps<{
	index: number;
	title?: string;
	icon?: string;
	textSquare?: boolean;
}>(), { textSquare: false, icon: '' });

function iconStyle(index: number): StyleValue {
	const radius = 210;
	const angle = 360 / 7 * (index - 2) * Math.PI / 180 + (Math.PI * 1 / 16);

	return {
		left: `${Math.cos(angle) * radius}px`,
		top: `${Math.sin(angle) * radius}px`,
	};
}
</script>

<template>
	<a
		:style="iconStyle(index)" target="_blank"
		class="absolute h-24 w-24 translate-center"
		:class="{ 'flex flex-col justify-around items-center border-1 border-indigo rounded-md': textSquare }"
	>
		<slot />
		<img v-if="(!textSquare && !icon.startsWith('i'))" :src="icon" :title="title" class="h-full w-full">
		<div v-else-if="!textSquare" :class="icon" :title="title" class="h-full w-full" />
	</a>
</template>

<style scoped>
a:hover {
	filter: drop-shadow(0 0 6px rgb(129, 140, 248));
}
</style>
