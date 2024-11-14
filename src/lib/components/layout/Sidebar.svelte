<script lang="ts">
	import { Home, Calendar, UserMultiple, Close } from 'carbon-icons-svelte';

	export let isOpen = false;

	const menuItems = [
		{ icon: Home, label: 'Dashboard', href: '/dashboard' },
		{ icon: Calendar, label: 'Booking', href: '/events/booking' },
		{ icon: UserMultiple, label: 'Performers', href: '/performers' }
	];

	$: sidebarClasses = `
      fixed inset-y-0 left-0 z-40 w-64 bg-gray-900 transition-transform duration-300 ease-in-out transform
      ${isOpen ? 'translate-x-0' : '-translate-x-full'}
      lg:translate-x-0 lg:static lg:inset-0
    `;
</script>

<div class={sidebarClasses}>
	<div class="flex h-16 items-center justify-between px-4">
		<div class="flex items-center">
			<span class="text-xl font-semibold text-white">MicDrop</span>
		</div>
		<button
			class="rounded-md p-2 text-gray-400 hover:text-white lg:hidden"
			on:click={() => (isOpen = false)}
		>
			<Close size={24} />
		</button>
	</div>

	<nav class="mt-4">
		<div class="space-y-1 px-2">
			{#each menuItems as item}
				<a
					href={item.href}
					class="group flex items-center rounded-md px-2 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
				>
					<svelte:component
						this={item.icon}
						size={20}
						class="mr-4 text-gray-400 group-hover:text-gray-300"
					/>
					{item.label}
				</a>
			{/each}
		</div>
	</nav>
</div>
