<script lang="ts">
	import AnimateOnScrollElement from '$lib/components/AnimateOnScrollElement.svelte';
	import GridRow from '$lib/components/GridRow.svelte';
	import SectionPanel from '$lib/components/SectionPanel.svelte';
	import type { About, iAboutItem } from '$lib/types';
	import AboutItem from './AboutItem.svelte';

	let { about }: { about: About[] } = $props();

	const aboutItems = $state(
		about.map((item) => ({
			...item,
			revealDescription: '',
			open: false
		}))
	);

	const revealDescription = (item: iAboutItem, description: string) => {
		item.revealDescription += description[0];

		if (description.length <= 1) return;
		setTimeout(() => {
			revealDescription(item, description.slice(1));
		}, 12);
	};

	const toggleDescription = (item: iAboutItem) => {
		if (item.open) {
			const currentItem = aboutItems.find((i) => i === item);
			currentItem ? (currentItem.open = false) : null;
			setTimeout(() => {
				item.revealDescription = '';
			}, 250);
		} else {
			aboutItems.map((item) => (item.open = false));
			item.revealDescription = '';
			item.open = true;
			setTimeout(() => {
				revealDescription(item, item.description);
			}, 75);
		}
	};
</script>

<SectionPanel id="about" title="About Scott">
	<GridRow>
		<div class="mx-auto flex w-full flex-col flex-wrap gap-2 normal-case">
			{#each aboutItems as item}
				<AnimateOnScrollElement>
					<AboutItem {item} {toggleDescription} />
				</AnimateOnScrollElement>
			{/each}
		</div>
	</GridRow>
</SectionPanel>
