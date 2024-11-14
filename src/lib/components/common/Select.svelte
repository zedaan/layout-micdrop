<script lang="ts">
	import { ChevronDown } from 'carbon-icons-svelte';
	import { type FilterOption } from '$lib/types/filter';

	export let label: string;
	export let value: string;
	export let options: FilterOption[];
	export let onChange: (value: string) => void;

	let isOpen = false;

	function handleSelect(option: FilterOption) {
		onChange(option.value);
		isOpen = false;
	}

	function toggleDropdown() {
		isOpen = !isOpen;
	}
</script>

<div class="relative">
	<!-- svelte-ignore a11y_label_has_associated_control -->
	<label class="mb-2 block text-lg font-medium text-gray-900">{label}</label>
	<button
		class="flex w-full items-center justify-between rounded-lg border border-gray-200 bg-gray-50 px-4 py-3 hover:bg-gray-100"
		on:click={toggleDropdown}
	>
		<span class="text-gray-600">{value}</span>
		<ChevronDown size={20} class="text-gray-400" />
	</button>

	{#if isOpen}
		<div class="absolute z-10 mt-1 w-full rounded-lg border border-gray-200 bg-white shadow-lg">
			{#each options as option}
				<button
					class="w-full px-4 py-2 text-left text-gray-700 hover:bg-gray-50"
					on:click={() => handleSelect(option)}
				>
					{option.label}
				</button>
			{/each}
		</div>
	{/if}
</div>
