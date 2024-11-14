<script lang="ts">
	import MainLayout from '$lib/components/layout/MainLayout.svelte';

	const breadcrumbs = [{ label: 'Dashboard', href: '/dashboard' }];
</script>

<MainLayout {breadcrumbs} pageTitle={'Dashboard'}>
	<div class="flex justify-center">
		<h1>Welcome to the dashboard!</h1>
	</div>
</MainLayout>
