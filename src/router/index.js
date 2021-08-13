import { createRouter, createWebHistory } from 'vue-router';
import Body from '../components/body';

import SamplePage from '../pages/sample_page';
import SingleGenerator from '../pages/single-generator';

// component

const routes = [
	{ path: '', redirect: { name: 'default' } },
	{
		path: '/dashboard',
		component: Body,
		children: [
			{
				path: '/dashboard/sample-page',
				name: 'default',
				component: SamplePage,
				meta: {
					title: 'Default Dashboard | Endless - Premium Admin Template',
				},
			},
			{
				path: '/dashboard/single-generator',
				name: 'single-generator',
				component: SingleGenerator,
				meta: {
					title: 'Default Dashboard | Single Generator Dashboard',
				},
			},
		],
	},
];

const router = createRouter({
	history: createWebHistory('/'),
	routes,
});
export default router;
