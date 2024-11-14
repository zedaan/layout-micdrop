<script lang="ts">
	import { AddLarge, OverflowMenuVertical, UserFilled } from 'carbon-icons-svelte';
	import type { Column, TableAction } from './type';
	import SortIcon from '$lib/assets/arrow-sorting.svg';
	import Button from '../common/Button.svelte';

	export let data: any[] = [];
	export let columns: Column<any>[] = [];
	export let actions: TableAction[] = [];
	export let defaultSort: string | null = null;
	export let isFooter: boolean = false;
	export let defaultSortDir: 'asc' | 'desc' = 'asc';

	let activeDropdown: string | null = null;
	let sortKey = defaultSort;
	let sortDirection = defaultSortDir;

	function toggleDropdown(e: MouseEvent, id: string) {
		e.stopPropagation();
		activeDropdown = activeDropdown === id ? null : id;
	}

	function handleSort(column: Column<any>) {
		if (!column.sortable) return;

		if (sortKey === column.key) {
			sortDirection = sortDirection === 'asc' ? 'desc' : 'asc';
		} else {
			sortKey = column.key as string;
			sortDirection = 'asc';
		}
	}

	$: sortedData = [...data].sort((a, b) => {
		if (!sortKey) return 0;
		const aVal = a[sortKey];
		const bVal = b[sortKey];
		const modifier = sortDirection === 'asc' ? 1 : -1;

		if (typeof aVal === 'string') {
			return aVal.localeCompare(bVal) * modifier;
		}
		return (aVal - bVal) * modifier;
	});

	function handleClickOutside(event: MouseEvent) {
		const target = event.target as HTMLElement;
		if (
			activeDropdown &&
			!target.closest('.dropdown-trigger') &&
			!target.closest('.dropdown-menu')
		) {
			activeDropdown = null;
		}
	}

	function handleAction(e: MouseEvent, action: TableAction, id: string) {
		e.stopPropagation();
		action.action(id);
		activeDropdown = null;
	}
</script>

<svelte:window on:click={handleClickOutside} />

<div class="hidden w-full md:block">
	<table class="r min-w-full bg-white pb-10">
		<thead>
			<tr class="invisible bg-gray-100 md:visible">
				{#each columns as column}
					<th
						class="px-4 py-4 text-left text-sm font-medium text-gray-500"
						style={column.width ? `width: ${column.width}` : ''}
					>
						<button
							class="flex items-center gap-1 {column.sortable ? 'cursor-pointer' : ''}"
							on:click={() => handleSort(column)}
						>
							{column.label}
							{#if column.sortable}
								<span class="text-xs">
									<img src={SortIcon} alt="sorting" class="h-4 w-4" />
								</span>
							{/if}
						</button>
					</th>
				{/each}
				{#if actions.length}
					<th class="w-8 px-4 py-2"></th>
				{/if}
			</tr>
		</thead>
		<tbody>
			{#each sortedData as row (row.id)}
				<tr class="border-t border-gray-200">
					{#each columns as column}
						<td colspan="0" class="px-4 py-4">
							{#if column.render}
								{@const Component = column.render(row)}
								<svelte:component this={Component} {...row} />
							{:else}
								<span class="text-sm text-gray-900">
									{row[column.key]}
								</span>
							{/if}
						</td>
					{/each}
					{#if actions.length}
						<td class="relative px-4 py-4">
							<button
								class="dropdown-trigger rounded-full p-1 text-gray-400 hover:bg-gray-100 hover:text-gray-600"
								on:click={(e) => toggleDropdown(e, row.id)}
							>
								<OverflowMenuVertical size={20} />
							</button>

							{#if activeDropdown === row.id}
								<div
									class="dropdown-menu absolute right-0 z-50 mt-2 w-48 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5"
								>
									<div class="py-1">
										{#each actions as action}
											<button
												class="block w-full px-4 py-2 text-left text-sm text-gray-700 hover:bg-gray-100"
												on:click={(e) => handleAction(e, action, row.id)}
											>
												<div class="flex items-center gap-2">
													{#if action.icon}
														<svelte:component this={action.icon} size={16} />
													{/if}
													{action.label}
												</div>
											</button>
										{/each}
									</div>
								</div>
							{/if}
						</td>
					{/if}
				</tr>
			{/each}
			{#if isFooter}
				<tr class="border-b border-t border-gray-200">
					<td colspan="3" class="ml-3 px-4 py-4">
						<Button class="ml-7 rounded-lg bg-gray-100 p-2"><UserFilled color="gray" /></Button>
						<Button class="ml-3 rounded-lg border-2 border-gray-100 p-1 px-4 text-blue-500"
							><span class="flex items-center"
								><AddLarge class="mr-2 text-blue-500" /> Add
							</span></Button
						>
					</td>
					<td colspan="2" class="px-4 py-4"> 30 </td>

					<td class="px-4 py-4">
						<button
							class="dropdown-trigger rounded-full p-1 text-gray-400 hover:bg-gray-100 hover:text-gray-600"
							on:click={(e) => toggleDropdown(e, '4')}
						>
							<OverflowMenuVertical size={20} />
						</button>
					</td>
				</tr>
			{/if}
		</tbody>
	</table>
</div>

<div class="w-full md:hidden">
	{#each sortedData as row (row.id)}
		<div class="mb-2 border-t border-gray-200 bg-white">
			<div class="px-1 py-2">
				<div class="mb-3 flex items-center justify-between">
					<div class="flex items-center">
						{#if columns.find((c) => c.key === 'name')?.render}
							{@const AvatarComponent = columns.find((c) => c.key === 'name')?.render(row)}
							<svelte:component this={AvatarComponent} {...row} />
						{/if}
					</div>
					<div class="block">
						{#if row.set}
							<button
								class="mb-3 flex justify-end text-gray-700"
								on:click={(e) => actions.length && toggleDropdown(e, row.id)}
								type="button"
							>
								Set: {row.set}
							</button>
						{/if}
						{#if row.lastbooked}
							<button
								class="mb-3 flex justify-end text-gray-700"
								on:click={(e) => actions.length && toggleDropdown(e, row.id)}
								type="button"
							>
								last booked: {row.lastbooked}
							</button>
						{/if}
						{#if row.ethnicity}
							<button
								class="mb-3 flex justify-end text-gray-700"
								on:click={(e) => actions.length && toggleDropdown(e, row.id)}
								type="button"
							>
								Ethnicity: {row.ethnicity}
							</button>
						{/if}

						{#if columns.find((c) => c.key === 'status')?.render}
							{@const StatusComponent = columns.find((c) => c.key === 'status')?.render(row)}
							<svelte:component this={StatusComponent} {...row} />
						{/if}
					</div>
				</div>

				<div class="mt-2 flex items-center justify-between text-sm text-gray-500">
					{#if actions.length}
						{#if activeDropdown === row.id}
							<div
								class="dropdown-menu absolute right-4 z-10 mt-8 w-48 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5"
							>
								<div class="py-1">
									{#each actions as action}
										<button
											class="block w-full px-4 py-2 text-left text-sm text-gray-700 hover:bg-gray-100"
											on:click={(e) => handleAction(e, action, row.id)}
										>
											<div class="flex items-center gap-2">
												{#if action.icon}
													<svelte:component this={action.icon} size={16} />
												{/if}
												{action.label}
											</div>
										</button>
									{/each}
								</div>
							</div>
						{/if}
					{/if}
				</div>
			</div>
		</div>
	{/each}
	{#if isFooter}
		<div class="flex justify-between border-b border-t border-gray-200">
			<div class="py-4">
				<Button class="ml-7 rounded-lg bg-gray-100 p-2"><UserFilled color="gray" /></Button>
				<Button class="ml-3 rounded-lg border-2 border-gray-100 p-1 px-4 text-blue-500"
					><span class="flex items-center"
						><AddLarge class="mr-2 text-blue-500" /> Add
					</span></Button
				>
			</div>

			<div class="px-4 py-4">
				<button
					class="dropdown-trigger rounded-full p-1 text-gray-400 hover:bg-gray-100 hover:text-gray-600"
					on:click={(e) => toggleDropdown(e, '4')}
				>
					Set: 10
				</button>
				<p class="text-blue-500">Position</p>
			</div>
		</div>
	{/if}
</div>
