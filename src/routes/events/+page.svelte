<script lang="ts">
	import MainLayout from '$lib/components/layout/MainLayout.svelte';

	const breadcrumbs = [{ label: 'Events', href: '/events' }];
</script>

<MainLayout {breadcrumbs} pageTitle={'Events'}>
	<div class="flex justify-center">
		<h1>Welcome to the Events!</h1>
	</div>
</MainLayout>
