<script lang="ts">
	import Button from './Button.svelte';
	import type { FilterOption } from '$lib/types/filter';
	import Checkbox from './common/Checkbox.svelte';
	import Select from './common/Select.svelte';

	let available = true;
	let selectedTier = 'Any';
	let selectedGender = 'Any';
	let selectedEthnicity = 'Any';
	let selectedLastBooked = 'Within 2 months';
	let resultsCount = 32;

	const tiers: FilterOption[] = [
		{ label: 'Any', value: 'Any' },
		{ label: 'Tier 1', value: 'tier1' },
		{ label: 'Tier 2', value: 'tier2' },
		{ label: 'Tier 3', value: 'tier3' }
	];

	const genders: FilterOption[] = [
		{ label: 'Any', value: 'Any' },
		{ label: 'Male', value: 'male' },
		{ label: 'Female', value: 'female' },
		{ label: 'Other', value: 'other' }
	];

	const ethnicities: FilterOption[] = [
		{ label: 'Any', value: 'Any' },
		{ label: 'Asian', value: 'asian' },
		{ label: 'Black', value: 'black' },
		{ label: 'Hispanic', value: 'hispanic' },
		{ label: 'White', value: 'white' },
		{ label: 'Other', value: 'other' }
	];

	const lastBookedOptions: FilterOption[] = [
		{ label: 'Within 2 months', value: '2months' },
		{ label: 'Within 6 months', value: '6months' },
		{ label: 'Within 1 year', value: '1year' },
		{ label: 'All time', value: 'alltime' }
	];

	function handleFilter() {
		console.log({
			available,
			selectedTier,
			selectedGender,
			selectedEthnicity,
			selectedLastBooked
		});
	}

	function handleReset() {
		available = true;
		selectedTier = 'Any';
		selectedGender = 'Any';
		selectedEthnicity = 'Any';
		selectedLastBooked = 'Within 2 months';
	}
</script>

<div class="space-y-6 rounded-xl bg-white p-6 shadow-sm">
	<div class="space-y-6">
		<Checkbox label="Available" checked={available} onChange={(value) => (available = value)} />
		<Select
			label="Tier"
			value={selectedTier}
			options={tiers}
			onChange={(value) => (selectedTier = value)}
		/>

		<Select
			label="Gender"
			value={selectedGender}
			options={genders}
			onChange={(value) => (selectedGender = value)}
		/>

		<Select
			label="Ethnicity"
			value={selectedEthnicity}
			options={ethnicities}
			onChange={(value) => (selectedEthnicity = value)}
		/>

		<Select
			label="Last booked"
			value={selectedLastBooked}
			options={lastBookedOptions}
			onChange={(value) => (selectedLastBooked = value)}
		/>
	</div>

	<div class="flex gap-3">
		<Button variant="primary" onClick={handleFilter}>
			Show {resultsCount} results
		</Button>
		<Button variant="secondary" onClick={handleReset}>Reset</Button>
	</div>
</div>
