<script lang="ts">
	export let label: string;
	export let variant: 'success' | 'neutral' | 'gray' | 'green' | 'blue' | 'red' = 'neutral';

	const variants = {
		success: 'bg-green-100 text-green-800',
		neutral: 'bg-gray-100 text-gray-800',
		gray: 'bg-gray-200 text-gray-800',
		green: 'bg-green-500 text-white',
		blue: 'bg-blue-500 text-white',
		red: 'bg-red-500 text-white'
	};

	$: classes = variants[variant];
</script>

<span class="inline-flex items-center rounded-md px-3 py-1 text-xs font-medium {classes}">
	{label}
</span>
