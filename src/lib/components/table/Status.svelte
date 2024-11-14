<script lang="ts">
	import { CheckmarkFilled, UserFilled, PinFilled, QX } from 'carbon-icons-svelte';
	import CrossIcon from '$lib/assets/cross.svg';

	export let status: 'confirmed' | 'invited' | 'pinned' | 'declined';
</script>

<div class="flex items-center">
	{#if status === 'confirmed'}
		<div
			class="flex w-full items-center justify-center rounded-md bg-green-100 px-3 py-1 text-green-600 md:px-0"
		>
			<span class="mr-1">
				<CheckmarkFilled size={16} />
			</span>
			<span class="text-sm">Confirmed</span>
		</div>
	{:else if status === 'pinned'}
		<div
			class="flex w-full items-center justify-center rounded-md bg-orange-100 px-3 py-1 text-orange-600 md:px-0"
		>
			<span class="mr-1">
				<PinFilled size={16} />
			</span>
			<span class="text-sm">Pinned</span>
		</div>
	{:else if status === 'declined'}
		<div
			class="flex w-full items-center justify-center rounded-md bg-red-100 px-3 py-1 text-red-600 md:px-0"
		>
			<span class="mr-1">
				<img src={CrossIcon} alt="cross" height="16" width="16" />
			</span>
			<span class="text-sm">Declined</span>
		</div>
	{:else}
		<div
			class="flex w-full items-center justify-center rounded-md bg-gray-100 px-3 py-1 text-gray-500 md:px-0"
		>
			<span class="mr-1">
				<UserFilled size={16} />
			</span>
			<span class="text-sm">Invited</span>
		</div>
	{/if}
</div>
