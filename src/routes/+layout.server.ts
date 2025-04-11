import type { SiteData } from '$lib/types';
import type { LayoutServerLoad } from './$types';

export const load: LayoutServerLoad = async ({ fetch }) => {
	const response = await fetch('/api/siteData');

	const data = (await response.json()) as SiteData;

	return {
		...data
	};
};
