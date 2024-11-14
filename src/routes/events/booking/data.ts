import type { Performer } from '$lib/types/booking';
import avatar from '$lib/assets/Avatar.png';

export const performers: Performer[] = [
	{
		id: '1',
		name: 'Dana Gould',
		avatar: avatar,
		status: 'confirmed',
		position: 'HOST',
		set: 10,
		notes: 'Can I go up early?'
	},
	{
		id: '2',
		name: 'Natasha Pearl Hansen and Her Very Long Name',
		avatar: avatar,
		status: 'invited',
		position: 'GUEST',
		set: 20,
		notes: 'Gonna be late to the sh...'
	},
	{
		id: '3',
		name: 'Natasha Pearl Hansen and Her Very Long Name',
		avatar: avatar,
		status: 'confirmed',
		position: 'FEATURE',
		set: 20,
		notes: 'Gonna be late to the sh...'
	},
	{
		id: '4',
		name: 'Natasha Pearl Hansen and Her Very Long Name',
		avatar: avatar,
		status: 'invited',
		position: 'HEADLINER',
		set: 20,
		notes: 'Gonna be late to the sh...'
	},
	{
		id: '5',
		name: 'Natasha Pearl Hansen and Her Very Long Name',
		avatar: avatar,
		status: 'confirmed',
		position: 'GUEST',
		set: 20,
		notes: 'Gonna be late to the sh...'
	}
];

export const Pinned: Performer[] = [
	{
		id: '1',
		name: 'Dana Gould',
		avatar: avatar,
		status: 'pinned',
		position: 'HOST',
		set: 10,
		notes: 'Can I go up early?'
	}
];

export const Declined: Performer[] = [
	{
		id: '1',
		name: 'Dana Gould',
		avatar: avatar,
		status: 'declined',
		position: 'HOST',
		set: 10,
		notes: 'Can I go up early?'
	},
	{
		id: '2',
		name: 'Natasha Pearl Hansen and Her Very Long Name',
		avatar: avatar,
		status: 'declined',
		position: 'GUEST',
		set: 20,
		notes: 'Gonna be late to the sh...'
	},
	{
		id: '3',
		name: 'Natasha Pearl Hansen and Her Very Long Name',
		avatar: avatar,
		status: 'declined',
		position: 'FEATURE',
		set: 20,
		notes: 'Gonna be late to the sh...'
	}
];

export const RosterTableData = [
	{
		id: '1',
		name: 'Jese Leos',
		avatar: avatar,
		ethnicity: 'Asian , White',
		position: 'HOST',
		lastbooked: '12/44/2023'
	},
	{
		id: '2',
		name: 'Jese Leos',
		avatar: avatar,
		ethnicity: 'Asian , red',
		position: 'GUEST',
		lastbooked: '12/44/2023'
	},
	{
		id: '3',
		name: 'Jese Leos',
		avatar: avatar,
		ethnicity: 'Asian , black',
		position: 'FEATURE',
		lastbooked: '12/44/2023'
	},
	{
		id: '4',
		name: 'Jese Leos',
		avatar: avatar,
		ethnicity: 'Asian , black',
		position: 'FEATURE',
		lastbooked: '12/44/2023'
	}
];
