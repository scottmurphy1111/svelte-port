<script lang="ts">
	import GridRow from '$lib/components/GridRow.svelte';
	import SectionPanel from '$lib/components/SectionPanel.svelte';
	import type { Testimonial } from '$lib/types';

	let { testimonials }: { testimonials: Testimonial[] } = $props();
</script>

<SectionPanel id="testimonials" title="Testimonials" light>
	<GridRow>
		{#each testimonials as testimonial}
			<div class="col-span-2 flex w-full flex-col gap-2">
				<p class="text-lg">{@html `"${testimonial.copy}"`}</p>
				<p class="text-sm text-gray-500">{testimonial.reporter}</p>
			</div>
		{/each}
	</GridRow>
</SectionPanel>
