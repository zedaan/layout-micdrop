<script lang="ts">
	import { Checkmark } from 'carbon-icons-svelte';

	export let checked: boolean;
	export let label: string;
	export let onChange: (checked: boolean) => void;
</script>

<label class="flex cursor-pointer items-center gap-3">
	<!-- svelte-ignore a11y_click_events_have_key_events -->
	<!-- svelte-ignore a11y_no_static_element_interactions -->
	<div
		class="flex h-6 w-6 items-center justify-center rounded-md border border-blue-500 {checked
			? 'bg-blue-500'
			: 'bg-white'}"
		on:click={() => onChange(!checked)}
	>
		{#if checked}
			<Checkmark size={16} class="text-white" />
		{/if}
	</div>
	<span class="text-lg">{label}</span>
</label>
