<script lang="ts">
	import SectionPanel from '$lib/components/SectionPanel.svelte';
	import type { Experience } from '$lib/types';

	let { experience }: { experience: Experience[] } = $props();
</script>

<SectionPanel id="experience" title="Experience" light>
	<div class="mx-auto flex w-full flex-col gap-8">
		{#each experience as job, i}
			<div class="flex w-full flex-col gap-4">
				<div class="flex flex-col">
					<div class="flex w-full flex-col md:flex-row md:items-center md:justify-start md:gap-4">
						<h3 class="md:xl w-auto text-lg font-bold">{job.position}</h3>
						<div
							class="md:lg h-6 w-full bg-contain bg-no-repeat text-base md:w-1/4"
							style:background-image={`url(${job.logo})`}
						></div>
					</div>
					<div class="flex flex-col text-sm text-gray-500 md:flex-row md:items-center md:gap-4">
						<p>{job.company}</p>
						<p>{job.date}</p>
						<p>{job.cityState}</p>
					</div>
				</div>
				<ul class="list-disc pl-4 text-base md:text-lg">
					{#each job.tasks as task}
						<li>{task}</li>
					{/each}
				</ul>
			</div>
			{#if experience.length > i + 1}
				<div class="h-0.5 bg-gray-200"></div>
			{/if}
		{/each}
	</div>
</SectionPanel>
