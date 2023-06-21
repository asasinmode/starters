import { createRouter, createWebHistory } from 'vue-router';
import PageHome from '~/pages/PageHome.vue';
import PageError from '~/pages/PageError.vue';
import LayoutNavigationless from '~/layouts/LayoutNavigationless.vue';

export const router = createRouter({
	history: createWebHistory(import.meta.env.BASE_URL),
	routes: [
		{
			path: '/',
			name: 'home',
			component: PageHome,
		},
		{
			path: '/404',
			name: 'notFound',
			component: PageError,
			props: { status: 404, message: 'page not found' },
			meta: {
				layout: LayoutNavigationless,
			},
		},
		{
			path: '/about',
			name: 'about',
			component: () => import('~/pages/PageAbout.vue'),
			meta: {
				title: 'about',
			},
		},
	],
});

const routes = router.getRoutes();

router.beforeEach((to, _from) => {
	if (!routes.some(route => route.path === to.path)) {
		return router.push({ name: 'notFound' });
	}
});

router.afterEach((to) => {
	document.title = `${to.meta?.title ?? 'vue starter'}`;
});
