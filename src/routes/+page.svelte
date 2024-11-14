<script lang="ts">
	import Button from '$lib/components/common/Button.svelte';
	import MainLayout from '$lib/components/layout/MainLayout.svelte';

	const breadcrumbs = [
		{ label: 'Events', href: '/events' },
		{ label: 'Booking', href: '/events/booking' }
	];
</script>

<MainLayout pageTitle="Booking" {breadcrumbs}>
	<div slot="header-actions">
		<Button>New Event</Button>
	</div>

	<div class="rounded-lg bg-white shadow">
		<div class="px-6 py-4"></div>
	</div>
</MainLayout>
