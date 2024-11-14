<script lang="ts">
	export let variant: 'primary' | 'secondary' = 'primary';
	export let onClick: () => void;
	export let disabled = false;
</script>

<button
	{disabled}
	class="rounded-lg px-5 py-3 text-base font-medium transition-colors
      {variant === 'primary'
		? 'bg-blue-500 text-white hover:bg-blue-600 disabled:bg-blue-300'
		: 'border border-gray-200 bg-white text-gray-900 hover:bg-gray-50 disabled:bg-gray-100'}
      disabled:cursor-not-allowed"
	on:click={onClick}
>
	<slot />
</button>
