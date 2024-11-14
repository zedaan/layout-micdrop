<script lang="ts">
	import Button from '$lib/components/common/Button.svelte';
	import { AddLarge, Filter, PinFilled, UserFilled } from 'carbon-icons-svelte';
	import Avatar from '$lib/components/table/Avatar.svelte';
	import Status from '$lib/components/table/Status.svelte';
	import Position from '$lib/components/table/Position.svelte';
	import DataTable from '$lib/components/table/DataTable.svelte';
	import type { Column, Performer, TableAction } from '$lib/components/table/type';
	import { Declined, performers, Pinned, RosterTableData } from './data';
	import Roster from '$lib/assets/view.svg';
	import CrossIcon from '$lib/assets/cross.svg';
	import FilterPanel from '$lib/components/FilterPanel.svelte';
	import MainLayout from '$lib/components/layout/MainLayout.svelte';
	import DropdownItem from '$lib/components/common/Dropdown.svelte';
	import Dropdown from '$lib/components/common/Dropdown.svelte';

	const dropdownItems = [
		{
			label: 'Message all perfomers',
			value: 'dashboard'
		},
		{
			label: 'Print lineup',
			value: 'print_lineup'
		},
		{
			label: 'Download photos',
			value: 'download_photo'
		}
	];

	const columns: Column<Performer>[] = [
		{
			key: 'name',
			label: 'Performer',
			sortable: true,
			render: () => Avatar
		},
		{
			key: 'status',
			label: 'Status',
			sortable: true,
			render: () => Status
		},
		{
			key: 'position',
			label: 'Position',
			sortable: true,
			render: () => Position
		},
		{
			key: 'set',
			label: 'Set',
			sortable: true
		},
		{
			key: 'notes',
			label: 'Notes'
		}
	];

	const Rostercolumns: Column<Performer>[] = [
		{
			key: 'name',
			label: 'Performer',
			sortable: true,
			render: () => Avatar
		},
		{
			key: 'ethnicity',
			label: 'Ethnicity',
			sortable: true
		},
		{
			key: 'position',
			label: 'Position',
			sortable: true,
			render: () => Position
		},

		{
			key: 'lastbooked',
			label: 'Last Booked',
			sortable: true
		}
	];
	const actions: TableAction[] = [
		{
			label: 'Message performer',
			action: (id) => console.log('Message', id)
		},
		{
			label: 'Send reminder',
			action: (id) => console.log('Reminder', id)
		},
		{
			label: 'Display on event page',
			action: (id) => console.log('Display', id)
		}
	];
	const Rosteractions: TableAction[] = [
		{
			label: 'View Profile',
			action: (id) => console.log('Message', id)
		},
		{
			label: 'Message performer',
			action: (id) => console.log('Reminder', id)
		}
	];

	let isOpen = false;
	const toggleMenu = () => {
		isOpen = !isOpen;
	};

	function handleSelect(event: CustomEvent<DropdownItem>) {
		const selectedItem = event.detail;
	}

	const breadcrumbs = [
		{ label: 'Events', href: '/events' },
		{ label: 'Booking', href: '/events/booking' }
	];
</script>

<MainLayout {breadcrumbs}>
	<div class="mx-auto mt-4 w-full px-4 pb-10">
		<div class=" w-full rounded-[16px] bg-white px-1 py-2">
			<section class="bg-white px-6 py-2">
				<h1 class="ml-1 text-xl">Booking</h1>
				<div class="mt-6 flex w-full items-center justify-between gap-2">
					<div class="flex w-full items-center justify-between">
						<div class="flex items-center">
							<UserFilled size={24} class="mr-2 text-green-600" />
							<h2 class="text-xl font-medium text-gray-500">Lineup</h2>
						</div>
						<Dropdown
							label="Options"
							items={dropdownItems}
							variant="outline"
							size="sm"
							align="right"
							on:select={handleSelect}
						>
							<svelte:fragment slot="button-content">Actions</svelte:fragment>
						</Dropdown>
					</div>
				</div>
				<div class="bg-BG-Secondary mt-5 flex w-full items-center justify-center rounded-[16px]">
					<DataTable
						data={performers}
						{columns}
						{actions}
						defaultSort="set"
						defaultSortDir="asc"
						isFooter={true}
					/>
				</div>
				<Button class="mt-2 rounded-lg border-2 border-gray-100 px-4 py-2 text-blue-500"
					><span class="flex items-center"
						><AddLarge class="mr-2 text-blue-500" /> New Spot
					</span></Button
				>
			</section>

			<section class="bg-white p-6">
				<div class="mt-6 flex w-full items-center justify-between gap-2">
					<div class="flex w-full items-center justify-between">
						<div class="flex items-center">
							<PinFilled size={24} class="mr-2 text-orange-600" />
							<h2 class="text-xl font-medium text-gray-500">Pinned</h2>
						</div>
						<Dropdown
							label="Options"
							items={dropdownItems}
							variant="outline"
							size="sm"
							align="right"
							on:select={handleSelect}
						>
							<svelte:fragment slot="button-content">Actions</svelte:fragment>
						</Dropdown>
					</div>
				</div>
				<div class="bg-BG-Secondary mt-5 flex w-full items-center justify-center rounded-[16px]">
					<DataTable
						data={Pinned}
						{columns}
						{actions}
						defaultSort="set"
						defaultSortDir="asc"
						isFooter={false}
					/>
				</div>
			</section>

			<section class="bg-white p-6">
				<div class="mt-6 flex w-full items-center justify-between gap-2">
					<div class="flex w-full items-center justify-between">
						<div class="flex items-center">
							<img src={CrossIcon} alt="CrossIcon" height="24" width="24" class="mr-2" />
							<h2 class="text-xl font-medium text-gray-500">Declined</h2>
						</div>
						<Dropdown
							label="Options"
							items={dropdownItems}
							variant="outline"
							size="sm"
							align="right"
							on:select={handleSelect}
						>
							<svelte:fragment slot="button-content">Actions</svelte:fragment>
						</Dropdown>
					</div>
				</div>
				<div class="bg-BG-Secondary mt-5 flex w-full items-center justify-center rounded-[16px]">
					<DataTable
						data={Declined}
						{columns}
						{actions}
						defaultSort="set"
						defaultSortDir="asc"
						isFooter={false}
					/>
				</div>
			</section>

			<section class="bg-white p-6">
				<div class="mt-6 flex w-full items-center justify-between gap-2">
					<div class="flex w-full items-center">
						<div class="relative flex flex-wrap items-center">
							<img src={Roster} alt="cross" height="24" width="24" class="mr-2" />
							<h2 class="mr-5 text-xl font-medium text-gray-500">Roster</h2>
							<div class="mt-3 flex items-center">
								<input
									type="text"
									class="rounded-md border-2 p-2 px-1 md:px-6"
									placeholder="Search here "
								/>
								<Button
									class="relative ml-2 rounded-md border-2 p-2 px-5 text-blue-500 md:ml-5"
									size="lg"
									on:click={toggleMenu}
								>
									<span class="flex items-center justify-center gap-3">
										<Filter size={24} />
										Filter
									</span>
								</Button>
								{#if isOpen}
									<div
										class="absolute right-0 top-14 z-50 mt-2 w-full rounded-md border border-gray-300 bg-white p-3 shadow-lg drop-shadow-md md:right-[-172px]"
									>
										<div class="">
											<div class="flex items-center justify-between">
												<h1 class="text-lg font-medium text-gray-400">Filter</h1>
												<!-- svelte-ignore a11y_click_events_have_key_events -->
												<!-- svelte-ignore a11y_no_noninteractive_element_interactions -->
												<p on:click={toggleMenu} class="cursor-pointer text-2xl">x</p>
											</div>
											<FilterPanel />
										</div>
									</div>
								{/if}
							</div>
						</div>
					</div>
				</div>
				<div class="bg-BG-Secondary mt-5 flex w-full items-center justify-center rounded-[16px]">
					<DataTable
						data={RosterTableData}
						columns={Rostercolumns}
						actions={Rosteractions}
						defaultSort="set"
						defaultSortDir="asc"
						isFooter={false}
					/>
				</div>
			</section>
		</div>
	</div>
</MainLayout>
