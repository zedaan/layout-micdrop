<script lang="ts">
	import { type HTMLButtonAttributes } from 'svelte/elements';
	import { twMerge } from 'tailwind-merge';

	interface $$Props extends HTMLButtonAttributes {
		alert?: boolean;
		danger?: boolean;
		disabled?: boolean;
		deemphasized?: boolean;
		lightbtn?: boolean;
		strokebtn?: boolean;
		textBtn?: boolean;
		beforeIcon?: string | null;
		afterIcon?: string | null;
		className?: string;
		size?: 'xs' | 'sm' | 'lg' | 'xl' | 'full' | '';
		scheduledBtn?: boolean;
	}

	export let alert = false;
	export let danger = false;
	export let disabled = false;
	export let deemphasized = false;
	export let lightbtn = false;
	export let strokebtn = false;
	export let textBtn = false;
	export let beforeIcon: string | null = null;
	export let afterIcon: string | null = null;
	export let className = '';
	export let size: $$Props['size'] = '';
	export let scheduledBtn = false;

	$: sizeClasses = {
		xs: 'px-2.5 py-1.5 text-xs rounded',
		sm: 'px-3 py-2 leading-4 rounded-md',
		lg: 'px-4 py-2 text-base',
		xl: 'px-6 py-3 text-base',
		full: 'w-full',
		'': 'px-3 py-3'
	}[size || ''];

	$: variantClasses = {
		default: twMerge(
			'bg-primary-500 hover:bg-primary-600 active:bg-primary-700 text-white',
			strokebtn && 'border border-gray-300 bg-transparent text-gray-900 hover:bg-gray-50'
		),
		alert: twMerge(
			'bg-warning-500 hover:bg-warning-400 active:bg-warning-600 text-white',
			strokebtn && 'border border-gray-300 bg-transparent text-warning-500 hover:bg-gray-50'
		),
		danger: twMerge(
			'bg-danger-500 hover:bg-danger-400 active:bg-danger-600 text-white',
			strokebtn && 'border border-gray-300 bg-transparent text-danger-500 hover:bg-gray-50'
		),
		deemphasized: 'bg-gray-200 hover:bg-gray-300 active:bg-gray-400 text-gray-700',
		light: twMerge(
			'bg-primary-100 hover:bg-primary-500 active:bg-primary-600 text-primary-500 hover:text-white rounded-full',
			strokebtn && 'border border-gray-300 bg-transparent hover:bg-gray-50'
		),
		scheduled:
			'bg-primary-100 hover:bg-primary-200 active:bg-primary-300 text-primary-500 h-[34px]',
		text: 'bg-transparent hover:bg-transparent active:bg-transparent text-gray-900'
	};

	$: buttonClasses = twMerge(
		'inline-flex items-center justify-center rounded-lg shadow-sm',
		'focus:outline-none transition-colors duration-200',
		'font-medium text-sm',
		sizeClasses,
		!textBtn && !scheduledBtn && variantClasses.default,
		alert && variantClasses.alert,
		danger && variantClasses.danger,
		deemphasized && variantClasses.deemphasized,
		lightbtn && variantClasses.light,
		scheduledBtn && variantClasses.scheduled,
		textBtn && variantClasses.text,
		disabled && 'cursor-not-allowed bg-gray-300 hover:bg-gray-300',
		className
	);

	$: if (scheduledBtn) {
		buttonClasses = twMerge(buttonClasses, 'md:text-sm md:h-[34px]', 'text-xs h-[20px] p-[2px]');
	}
</script>

<!-- svelte-ignore a11y_mouse_events_have_key_events -->
<button
	class={buttonClasses}
	{disabled}
	on:click
	on:mouseover
	on:mouseenter
	on:mouseleave
	{...$$restProps}
>
	{#if beforeIcon}
		<span class="mr-2">
			<img src={beforeIcon} alt="" class="h-4 w-4" />
		</span>
	{/if}
	<slot />
	{#if afterIcon}
		<span class="ml-2">
			<img src={afterIcon} alt="" class="h-4 w-4" />
		</span>
	{/if}
</button>
