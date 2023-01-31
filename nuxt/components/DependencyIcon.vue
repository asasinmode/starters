<script setup lang="ts">
import { filename } from 'pathe/utils';
import type { StyleValue } from 'vue';

withDefaults(defineProps<{
	index: number;
	title?: string;
	icon?: string;
	textSquare?: boolean;
}>(), { textSquare: false, icon: '' });

function iconStyle(index: number): StyleValue {
	const radius = 210;
	const angle = 360 / 4 * (index - 2) * Math.PI / 180;

	return {
		left: `${Math.cos(angle) * radius}px`,
		top: `${Math.sin(angle) * radius}px`,
	};
}

const glob = import.meta.glob('@/assets/*.svg', { eager: true });
const svgs = Object.fromEntries(
	Object.entries(glob).map(([key, value]) => [filename(key), value.default]),
);
</script>

<template>
	<a
		:style="iconStyle(index)" target="_blank"
		class="absolute translate-center w-24 h-24"
		:class="{ 'flex flex-col justify-around items-center border-1 border-indigo rounded-md': textSquare }"
	>
		<slot />
		<img v-if="(!textSquare && !icon.startsWith('i'))" :src="svgs[icon]" :title="title" class="w-full h-full">
		<div v-else-if="!textSquare" :title="title" class="w-full h-full" :class="icon" />
	</a>
</template>

<style scoped>
a:hover {
	filter: drop-shadow(0 0 6px rgb(129, 140, 248));
}
</style>
