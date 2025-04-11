import type { SiteData } from '$lib/types';
import { json, type RequestHandler } from '@sveltejs/kit';

export const GET: RequestHandler = async ({ fetch }) => {
	const response = await fetch('/data.json');
	const data = await response.json();

	return json(data as SiteData);
};
