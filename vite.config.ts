import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';

export default defineConfig({
	plugins: [sveltekit()],
	resolve: {
		alias: {
			$lib: '/src/lib',
			$components: '/src/lib/components',
			$stores: '/src/lib/stores',
			$types: '/src/lib/types',
			$utils: '/src/lib/utils'
		}
	},
	server: {
		port: 3000
	}
});
