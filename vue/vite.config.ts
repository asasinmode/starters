import { URL, fileURLToPath } from 'node:url';
import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import components from 'unplugin-vue-components/vite';
import autoImport from 'unplugin-auto-import/vite';
import unocss from 'unocss/vite';

export default defineConfig({
	resolve: {
		alias: {
			'~': fileURLToPath(new URL('./src', import.meta.url)),
		},
	},
	plugins: [
		vue(),
		unocss(),
		components({
			dts: './src/types/components.d.ts',
		}),
		autoImport({
			imports: [
				'vue',
				'vue-router',
			],
			dts: './src/types/auto-imports.d.ts',
			dirs: [
				'./src/composables',
			],
			vueTemplate: true,
		}),
	],
});
