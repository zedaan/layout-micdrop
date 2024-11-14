/* eslint-disable @typescript-eslint/no-explicit-any */
import type { SvelteComponent } from 'svelte';

export type PerformerStatus =
	| 'confirmed'
	| 'invited'
	| 'pending'
	| 'cancelled'
	| 'pinned'
	| 'declined';
export type PerformerPosition = 'HOST' | 'GUEST' | 'FEATURE' | 'HEADLINER' | 'MC';

export interface PerformerBase {
	id: string;
	name: string;
	avatar: string;
	email?: string;
	phone?: string;
	status: PerformerStatus;
	position: PerformerPosition;
	set: number;
	notes: string;
	displayOnEventPage?: boolean;
	createdAt?: Date;
	updatedAt?: Date;
}

export interface PerformerMetadata {
	previousShows?: number;
	lastPerformance?: Date;
	rating?: number;
	specialRequirements?: string[];
	socialMedia?: {
		twitter?: string;
		instagram?: string;
		website?: string;
	};
}

export interface Performer extends PerformerBase {
	metadata?: PerformerMetadata;
}

export interface BookingState {
	performers: Performer[];
	isLoading: boolean;
	error: string | null;
	filters: {
		status?: PerformerStatus[];
		position?: PerformerPosition[];
		search?: string;
	};
	sorting: {
		field: keyof Performer;
		direction: 'asc' | 'desc';
	};
}

export type BookingAction =
	| { type: 'SET_PERFORMERS'; payload: Performer[] }
	| { type: 'ADD_PERFORMER'; payload: Performer }
	| { type: 'UPDATE_PERFORMER'; payload: { id: string; updates: Partial<Performer> } }
	| { type: 'REMOVE_PERFORMER'; payload: string }
	| { type: 'SET_LOADING'; payload: boolean }
	| { type: 'SET_ERROR'; payload: string | null }
	| { type: 'SET_FILTERS'; payload: BookingState['filters'] }
	| { type: 'SET_SORTING'; payload: BookingState['sorting'] }
	| { type: 'REORDER_PERFORMERS'; payload: string[] };

export interface Performer {
	id: string;
	name: string;
	avatar: string;
	status: PerformerStatus;
	position: PerformerPosition;
	set: number;
	notes: string;
	displayOnEventPage?: boolean;
	email?: string;
	phone?: string;
}

export interface CellProps {
	performer: Performer;
}

export interface TableCellComponent {
	component: typeof SvelteComponent;
	props: Record<string, any>;
}

export interface ActionItem {
	id: string;
	label: string;
	icon?: typeof SvelteComponent<any>;
	variant?: 'default' | 'danger' | 'warning' | 'success';
	disabled?: boolean;
	hidden?: boolean;
}

export interface PositionCellProps {
	position: PerformerPosition;
	onChange: (position: PerformerPosition) => void;
}

export interface SetCellProps {
	set: number;
	onChange: (set: number) => void;
}

export interface NotesCellProps {
	notes: string;
	onEdit: () => void;
}

export interface StatusCellProps {
	status: PerformerStatus;
	onStatusChange: (status: PerformerStatus) => void;
}

export interface ActionButtonsProps {
	performer: Performer;
	onAction: (actionId: string) => void;
}
