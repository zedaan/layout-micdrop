<script lang="ts">
	import { POSITION_COLORS } from '$lib/constants/performer';

	export let position: 'HOST' | 'GUEST' | 'FEATURE' | 'HEADLINER';
	export let status: string;
</script>

<div class="flex w-full">
	<span
		class="w-full rounded px-2 py-1 text-center text-xs font-medium {status === 'declined'
			? `${POSITION_COLORS[position]} opacity-20`
			: POSITION_COLORS[position]}"
	>
		{position}
	</span>
</div>
