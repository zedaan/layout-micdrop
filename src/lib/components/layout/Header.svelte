<script lang="ts">
	import { Home, ChevronRight, Menu } from 'carbon-icons-svelte';
	import { createEventDispatcher } from 'svelte';

	export let pageTitle: string = '';
	export let breadcrumbs: Array<{ label: string; href: string }> = [];

	const dispatch = createEventDispatcher();

	function toggleSidebar() {
		dispatch('toggleSidebar');
	}
</script>

<header class="bg-gray-100">
	<div class="flex items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
		<div class="flex items-center">
			<button
				class="rounded-md p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 lg:hidden"
				on:click={toggleSidebar}
			>
				<Menu size={24} />
			</button>

			<div class="flex items-center space-x-4">
				<nav class="flex" aria-label="Breadcrumb">
					<ol class="flex items-center space-x-4">
						<li>
							<div>
								<a href="/" class="text-gray-400 hover:text-gray-500">
									<Home size={20} />
								</a>
							</div>
						</li>
						{#each breadcrumbs as crumb}
							<li>
								<div class="flex items-center">
									<ChevronRight size={16} class="text-gray-400" />
									<a
										href={crumb.href}
										class="ml-4 text-sm font-medium text-gray-500 hover:text-gray-700"
									>
										{crumb.label}
									</a>
								</div>
							</li>
						{/each}
					</ol>
				</nav>
			</div>
		</div>

		<div class="flex items-center space-x-4">
			<slot name="actions" />
		</div>
	</div>

	{#if pageTitle}
		<div class="px-4 py-4 sm:px-6 lg:px-8">
			<h1 class="text-2xl font-semibold text-gray-900">{pageTitle}</h1>
		</div>
	{/if}
</header>
