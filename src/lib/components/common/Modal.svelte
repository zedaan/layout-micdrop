<script>
	export let isOpen = false; // Control modal visibility through this prop
	export let onClose = () => {}; // Close function for the modal
</script>

{#if isOpen}
	<div class="fixed inset-0 z-50 flex items-center justify-center bg-gray-500 bg-opacity-50">
		<div class="w-96 rounded-lg bg-white p-6">
			<div class="flex items-center justify-between">
				<h2 class="text-xl font-semibold">Filter Options</h2>
				<button class="text-gray-500" on:click={onClose}>X</button>
			</div>
			<div class="mt-4">
				<!-- Modal content goes here -->
				<p class="text-gray-700">Here you can add filter options...</p>
			</div>
			<div class="mt-4 flex justify-end">
				<button class="rounded-md bg-blue-500 px-4 py-2 text-white" on:click={onClose}>Close</button
				>
			</div>
		</div>
	</div>
{/if}

<style>
	/* Optional styling for the overlay and modal */
	.modal-overlay {
		backdrop-filter: blur(5px);
	}
</style>
