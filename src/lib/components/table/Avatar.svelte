<script lang="ts">
	import { Draggable } from 'carbon-icons-svelte';
	import Position from './Position.svelte';
	import type { PerformerStatus } from '$lib/types/booking';

	export let avatar: string | any;
	export let name: string;
	export let position: 'HOST' | 'GUEST' | 'FEATURE' | 'HEADLINER';
	export let status: PerformerStatus;
</script>

<div class=" relative h-8">
	<div class="flex items-center">
		<Draggable class="mr-2" size={24} />
		{#if avatar}
			<img src={avatar} alt={name} class="h-8 w-8 rounded-md object-cover" />
		{:else}
			<div class="flex h-8 w-8 items-center justify-center rounded-md bg-gray-200">
				<span class="text-sm text-gray-500">{name.charAt(0)}</span>
			</div>
		{/if}
		<div>
			<p class="mb-2 ml-3 text-xs">{name}</p>
			<div class="ml-2 mt-2 block w-24 md:hidden">
				<Position {position} {status} />
			</div>
		</div>
	</div>
</div>
