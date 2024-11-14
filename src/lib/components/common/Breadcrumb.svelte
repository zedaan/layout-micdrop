<script lang="ts">
	import { createEventDispatcher } from 'svelte';
	import { ChevronRight, Home } from 'carbon-icons-svelte';

	interface Crumb {
		name: string;
		href: string;
	}

	export let data: Crumb[] = [];

	const dispatch = createEventDispatcher<{
		click: Crumb;
	}>();

	function handleClick(crumb: Crumb): void {
		dispatch('click', crumb);
	}
</script>

<div>
	{#if data.length > 0}
		<nav class="inline-flex text-sm font-medium leading-[14px] lg:ml-4">
			{#each data as crumb, index}
				<div class="flex items-center">
					{#if index > 0}
						<ChevronRight size={16} class="mx-2.5 text-gray-400" />
					{/if}
					{#if index === 0}
						<Home size={16} class="mx-2.5 text-gray-400" />
					{/if}
					{#if index === data.length - 1}
						<span class="text-Text-Tartiary cursor-default">
							{crumb.name}
						</span>
					{:else}
						<span class="text-Text-Secondary cursor-pointer no-underline">
							<a href={crumb.href} on:click={() => handleClick(crumb)} class="hover:no-underline">
								{crumb.name}
							</a>
						</span>
					{/if}
				</div>
			{/each}
		</nav>
	{/if}
</div>
