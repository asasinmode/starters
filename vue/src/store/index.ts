import { defineStore } from 'pinia';

export const useIndexStore = defineStore('index', () => {
	const clickedIndexes = ref<number[]>([]);

	function handleLetterClick(index: number) {
		if (clickedIndexes.value.includes(index)) {
			clickedIndexes.value.splice(clickedIndexes.value.findIndex(num => num === index), 1);
		} else {
			clickedIndexes.value.push(index);
		}
	}

	return { clickedIndexes, handleLetterClick };
});
