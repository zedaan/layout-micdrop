<script lang="ts">
	import MainLayout from '$lib/components/layout/MainLayout.svelte';

	const breadcrumbs = [{ label: 'Performers', href: '/performers' }];
</script>

<MainLayout {breadcrumbs} pageTitle={'Performers'}>
	<div class="flex justify-center">
		<h1>Welcome to the performers page!</h1>
	</div>
</MainLayout>
