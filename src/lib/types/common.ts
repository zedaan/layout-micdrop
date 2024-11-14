/* eslint-disable @typescript-eslint/no-explicit-any */
import type { SvelteComponent } from 'svelte';

export interface TableColumn {
	key: string;
	label: string;
	sortable?: boolean;
	width?: string;
	align?: 'left' | 'center' | 'right';
	renderCell?: (row: any) => {
		component: typeof SvelteComponent;
		props: Record<string, any>;
	};
}

export interface ButtonProps {
	variant?: 'primary' | 'secondary' | 'tertiary' | 'danger' | 'ghost' | 'link';
	size?: 'sm' | 'md' | 'lg';
	icon?: typeof SvelteComponent<any>;
	iconPosition?: 'left' | 'right';
	fullWidth?: boolean;
	disabled?: boolean;
	loading?: boolean;
	type?: 'button' | 'submit' | 'reset';
	href?: string;
	external?: boolean;
	class?: string;
}

export interface ActionItem {
	id: string;
	label: string;
	icon?: typeof SvelteComponent<any>;
	variant?: 'default' | 'danger' | 'warning' | 'success';
	disabled?: boolean;
	hidden?: boolean;
	shortcut?: string;
	onClick?: () => void;
}

export interface MenuProps {
	items: ActionItem[];
	position?: 'left' | 'right' | 'top' | 'bottom';
	align?: 'start' | 'center' | 'end';
	width?: number | string;
	maxHeight?: number | string;
	closeOnClick?: boolean;
	closeOnClickOutside?: boolean;
}

export interface BadgeProps {
	label: string;
	variant?:
		| 'success'
		| 'error'
		| 'warning'
		| 'info'
		| 'neutral'
		| 'gray'
		| 'green'
		| 'blue'
		| 'red'
		| 'yellow';
	size?: 'sm' | 'md' | 'lg';
	icon?: typeof SvelteComponent<any>;
	iconPosition?: 'left' | 'right';
	rounded?: boolean;
	outlined?: boolean;
	clickable?: boolean;
}

export interface TooltipProps {
	content: string;
	position?: 'top' | 'right' | 'bottom' | 'left';
	delay?: number;
	maxWidth?: number | string;
	theme?: 'light' | 'dark';
}

export interface TableColumn {
	key: string;
	label: string;
	sortable?: boolean;
	width?: string;
	renderCell?: (row: any) => {
		component: typeof SvelteComponent;
		props: Record<string, any>;
	};
}

export interface TableProps {
	columns: TableColumn[];
	data: any[];
	isLoading?: boolean;
	enableSort?: boolean;
	enableSelect?: boolean;
}

export interface TableEvents {
	sort: { column: string; direction: 'asc' | 'desc' };
	select: string[];
}
