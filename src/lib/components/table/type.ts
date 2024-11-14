/* eslint-disable @typescript-eslint/no-explicit-any */

// export type SvelteNode = typeof SvelteComponent | ((item: unknown) => SvelteComponent);

export interface Column<T> {
	key: keyof T | string;
	label: string;
	width?: string;
	render?: any;
	sortable?: boolean;
}

export interface TableAction {
	label: string;
	icon?: any;
	action: (id: string) => void;
}

export interface Performer {
	id: string;
	name: string;
	avatar?: string;
	status: 'confirmed' | 'invited';
	position: 'HOST' | 'GUEST' | 'FEATURE' | 'HEADLINER';
	set: number;
	notes?: string;
}
