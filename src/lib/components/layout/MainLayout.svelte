<script lang="ts">
	import Header from './Header.svelte';
	import Sidebar from './Sidebar.svelte';
	import { onMount } from 'svelte';

	export let pageTitle: string = '';
	export let breadcrumbs: Array<{ label: string; href: string }> = [];

	let isOpen = false;
	let isMobile = false;

	onMount(() => {
		const checkMobile = () => {
			isMobile = window.innerWidth < 1024;
			if (!isMobile) isOpen = false;
		};

		checkMobile();
		window.addEventListener('resize', checkMobile);

		return () => {
			window.removeEventListener('resize', checkMobile);
		};
	});

	function toggleSidebar() {
		isOpen = !isOpen;
	}
</script>

<div class="flex h-screen overflow-hidden bg-gray-100">
	<Sidebar {isOpen} />

	<div class="flex-1 overflow-auto">
		<Header {pageTitle} {breadcrumbs} on:toggleSidebar={toggleSidebar}>
			<div slot="actions">
				<slot name="header-actions" />
			</div>
		</Header>

		<main class="relative z-0 flex-1">
			<slot />
		</main>
	</div>

	{#if isOpen && isMobile}
		<!-- svelte-ignore a11y_click_events_have_key_events -->
		<!-- svelte-ignore a11y_no_static_element_interactions -->
		<div
			class="fixed inset-0 z-30 bg-gray-600 bg-opacity-75"
			on:click={() => (isOpen = false)}
		></div>
	{/if}
</div>
