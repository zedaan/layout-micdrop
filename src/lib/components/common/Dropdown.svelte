<script lang="ts">
	import { createEventDispatcher, onMount } from 'svelte';
	import { ChevronDown } from 'carbon-icons-svelte';

	export let label: string = 'Dropdown';
	export let items: Array<{
		label: string;
		value: string;
		href?: string;
		icon?: any;
		disabled?: boolean;
	}> = [];

	export let variant: 'default' | 'outline' | 'ghost' = 'default';
	export let size: 'sm' | 'md' | 'lg' = 'md';
	export let align: 'left' | 'right' = 'left';

	let isOpen = false;
	let dropdownElement: HTMLDivElement;

	const dispatch = createEventDispatcher();

	const baseButtonStyles = `
      inline-flex items-center justify-center
      font-medium rounded-lg
      focus:outline-none focus:ring-2 focus:ring-offset-2
      transition-colors duration-200
      disabled:opacity-50 disabled:cursor-not-allowed
    `;

	const variantStyles = {
		default: 'bg-gray-700 text-white hover:bg-gray-800 focus:ring-gray-300',
		outline: 'border border-gray-300 text-gray-700 hover:bg-gray-50 focus:ring-gray-300',
		ghost: 'text-gray-700 hover:bg-gray-100 focus:ring-gray-300'
	};

	const sizeStyles = {
		sm: 'text-xs px-3 py-2',
		md: 'text-sm px-4 py-2.5',
		lg: 'text-base px-5 py-3'
	};

	const alignmentStyles = {
		left: 'left-0',
		right: 'right-0'
	};

	$: buttonClasses = `
      ${baseButtonStyles}
      ${variantStyles[variant]}
      ${sizeStyles[size]}
    `.trim();

	$: dropdownClasses = `
      absolute z-10 mt-2 
      bg-white rounded-lg shadow-lg
      divide-y divide-gray-100
      bg-gray-50
      text-white
      ${alignmentStyles[align]}
      min-w-[14rem]
    `.trim();

	function handleSelect(item: (typeof items)[0]) {
		if (item.disabled) return;

		dispatch('select', item);
		isOpen = false;
	}

	onMount(() => {
		const handleClickOutside = (event: MouseEvent) => {
			if (dropdownElement && !dropdownElement.contains(event.target as Node)) {
				isOpen = false;
			}
		};

		document.addEventListener('click', handleClickOutside);

		return () => {
			document.removeEventListener('click', handleClickOutside);
		};
	});
</script>

<div class="relative inline-block" bind:this={dropdownElement}>
	<button
		type="button"
		class={buttonClasses}
		on:click={() => (isOpen = !isOpen)}
		aria-expanded={isOpen}
		aria-haspopup="true"
	>
		<slot name="button-content">
			{label}
		</slot>
		<ChevronDown
			size={16}
			class="ml-2 transition-transform duration-200"
			style={isOpen ? 'transform: rotate(180deg)' : ''}
		/>
	</button>

	{#if isOpen}
		<div
			class={dropdownClasses}
			role="menu"
			aria-orientation="vertical"
			aria-labelledby="dropdown-button"
		>
			<ul class="py-2">
				{#each items as item}
					<li>
						{#if item.href}
							<a
								href={item.href}
								class="
                    flex items-center px-4 py-2
                    text-sm text-gray-900 hover:bg-gray-100
                     
                    {item.disabled ? 'cursor-not-allowed opacity-50' : 'cursor-pointer'}
                  "
								role="menuitem"
								on:click={() => handleSelect(item)}
							>
								{#if item.icon}
									<svelte:component this={item.icon} size={16} class="mr-2" />
								{/if}
								{item.label}
							</a>
						{:else}
							<button
								type="button"
								class="
                    flex w-full items-center px-4 py-2
                    text-sm text-gray-700 hover:bg-gray-100
                    {item.disabled ? 'cursor-not-allowed opacity-50' : 'cursor-pointer'}
                  "
								role="menuitem"
								disabled={item.disabled}
								on:click={() => handleSelect(item)}
							>
								{#if item.icon}
									<svelte:component this={item.icon} size={16} class="mr-2" />
								{/if}
								{item.label}
							</button>
						{/if}
					</li>
				{/each}
			</ul>
		</div>
	{/if}
</div>
