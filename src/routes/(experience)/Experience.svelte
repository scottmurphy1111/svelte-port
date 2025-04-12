<script lang="ts">
	import SectionPanel from '$lib/components/SectionPanel.svelte';
	import type { Experience } from '$lib/types';

	let { experience }: { experience: Experience[] } = $props();
</script>

<SectionPanel id="experience" title="Experience" light>
	<div class="mx-auto flex w-full flex-col gap-8 normal-case">
		{#each experience as job, i}
			<div class="flex w-full flex-col gap-4">
				<div class="flex flex-col gap-2">
					<div class="flex w-full flex-col gap-2">
						<h3 class=" w-auto text-lg font-bold">{job.position}</h3>
						<div
							class=" h-6 w-full bg-contain bg-no-repeat text-base"
							style:background-image={`url(${job.logo})`}
						></div>
					</div>
					<div class="flex flex-col gap-0 text-sm text-gray-500">
						<p>{job.company}</p>
						<div class="flex gap-2">
							<p>{job.date}</p>
							|
							<p>{job.cityState}</p>
						</div>
					</div>
				</div>
				<ul class="list-disc pl-4 text-base md:text-lg">
					{#each job.tasks as task}
						<li class="mb-2">{task}</li>
					{/each}
				</ul>
			</div>
			{#if experience.length > i + 1}
				<div class="h-0.5 bg-gray-200"></div>
			{/if}
		{/each}
	</div>
</SectionPanel>
