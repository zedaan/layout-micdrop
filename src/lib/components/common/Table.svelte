<script lang="ts">
	import type { TableColumn } from '$lib/types/common';
	import { createEventDispatcher } from 'svelte';

	export let columns: TableColumn[];
	export let data: any[] = [];
	export let isLoading = false;
	export let enableSort = false;
	export let enableSelect = false;

	const dispatch = createEventDispatcher<{
		sort: { column: string; direction: 'asc' | 'desc' };
		select: string[];
	}>();

	let sortColumn: string | null = null;
	let sortDirection: 'asc' | 'desc' = 'asc';
	let selectedRows: Set<string> = new Set();

	function handleSort(column: TableColumn) {
		if (!enableSort || !column.sortable) return;

		if (sortColumn === column.key) {
			sortDirection = sortDirection === 'asc' ? 'desc' : 'asc';
		} else {
			sortColumn = column.key;
			sortDirection = 'asc';
		}

		dispatch('sort', { column: sortColumn, direction: sortDirection });
	}

	function handleRowSelect(id: string) {
		if (!enableSelect) return;

		if (selectedRows.has(id)) {
			selectedRows.delete(id);
		} else {
			selectedRows.add(id);
		}
		selectedRows = selectedRows;

		dispatch('select', Array.from(selectedRows));
	}

	function handleSelectAll(event: Event) {
		const target = event.target as HTMLInputElement;
		if (target.checked) {
			selectedRows = new Set(data.map((row) => row.id));
		} else {
			selectedRows.clear();
		}
		selectedRows = selectedRows;
		dispatch('select', Array.from(selectedRows));
	}
</script>

<div class="overflow-x-auto">
	<table class="min-w-full divide-y divide-gray-200">
		<thead class="bg-gray-50">
			<tr>
				{#if enableSelect}
					<th scope="col" class="w-8 px-6 py-3">
						<input
							type="checkbox"
							class="rounded border-gray-300"
							on:change={handleSelectAll}
							checked={selectedRows.size === data.length && data.length > 0}
						/>
					</th>
				{/if}

				{#each columns as column (column.key)}
					<th
						scope="col"
						class="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500"
						class:cursor-pointer={enableSort && column.sortable}
						style={column.width ? `width: ${column.width}` : ''}
						on:click={() => handleSort(column)}
					>
						<div class="flex items-center space-x-1">
							<span>{column.label}</span>
							{#if enableSort && column.sortable}
								<span class="text-gray-400">
									{#if sortColumn === column.key}
										{sortDirection === 'asc' ? '↑' : '↓'}
									{/if}
								</span>
							{/if}
						</div>
					</th>
				{/each}
			</tr>
		</thead>

		<tbody class="divide-y divide-gray-200 bg-white">
			{#if isLoading}
				<tr>
					<td colspan={columns.length + (enableSelect ? 1 : 0)} class="px-6 py-4 text-center">
						<div class="flex justify-center">
							<div class="h-6 w-6 animate-spin rounded-full border-b-2 border-gray-900"></div>
						</div>
					</td>
				</tr>
			{:else if data.length === 0}
				<tr>
					<td
						colspan={columns.length + (enableSelect ? 1 : 0)}
						class="px-6 py-4 text-center text-gray-500"
					>
						No data available
					</td>
				</tr>
			{:else}
				{#each data as row (row.id)}
					<tr
						class="transition-colors hover:bg-gray-50"
						class:bg-blue-50={selectedRows.has(row.id)}
					>
						{#if enableSelect}
							<td class="px-6 py-4">
								<input
									type="checkbox"
									class="rounded border-gray-300"
									checked={selectedRows.has(row.id)}
									on:change={() => handleRowSelect(row.id)}
								/>
							</td>
						{/if}

						{#each columns as column (column.key)}
							<td
								class="whitespace-nowrap px-6 py-4"
								style={column.width ? `width: ${column.width}` : ''}
							>
								{#if column.renderCell}
									{@const cellInfo = column.renderCell(row)}
									<svelte:component this={cellInfo.component} {...cellInfo.props} />
								{:else}
									<span class="text-sm text-gray-900">
										{row[column.key]}
									</span>
								{/if}
							</td>
						{/each}
					</tr>
				{/each}
			{/if}
		</tbody>
	</table>
</div>

<style>
	/* Optional: Add custom styles here */
	:global(.cursor-pointer) {
		cursor: pointer;
	}
</style>
