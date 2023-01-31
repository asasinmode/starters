export default defineNuxtConfig({
	typescript: {
		shim: false,
	},
	modules: [
		'@unocss/nuxt',
		'@pinia/nuxt',
	],
	css: [
		'@unocss/reset/tailwind.css',
		'assets/index.css',
	],
	experimental: {
		inlineSSRStyles: false,
	},
	app: {
		head: {
			link: [{ rel: 'icon', type: 'image/svg+xml', href: '/favicon.webp' }],
			meta: [{ name: 'description', content: 'asasinmode nuxt starter' }],
			script: [{
				children: `const prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches
const setting = localStorage.getItem('color-schema') || 'auto'
if (setting === 'dark' || (prefersDark && setting !== 'light'))
document.documentElement.classList.toggle('dark', true)`,
			}],
		},
	},
});
