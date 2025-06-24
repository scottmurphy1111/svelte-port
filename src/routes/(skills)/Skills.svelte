<script lang="ts">
	import AnimateOnScrollElement from '$lib/components/AnimateOnScrollElement.svelte';
	import SectionPanel from '$lib/components/SectionPanel.svelte';
	import type { Skill } from '$lib/types';
	import Icon from '@iconify/svelte';

	let { skills }: { skills: Skill[] } = $props();
</script>

<SectionPanel id="skills" title="Skills & Tools">
	<div class="grid grid-cols-2 gap-4">
		{#each skills as skill}
			<div class="flex w-full flex-col items-stretch justify-center gap-4">
				<AnimateOnScrollElement>
					<div
						class="border-primaryBlue flex h-16 w-16 items-center justify-center rounded-full border-2 p-2 text-4xl"
					>
						<Icon icon={skill.icon} />
					</div>
				</AnimateOnScrollElement>
				<AnimateOnScrollElement>
					<div class="flex h-1 w-1/5 bg-white"></div>
				</AnimateOnScrollElement>
				<div class="flex flex-col items-stretch justify-center">
					{#each skill.skillsArray as item}
						<AnimateOnScrollElement>
							<p class="text-base font-bold md:text-lg">{item}</p>
						</AnimateOnScrollElement>
					{/each}
				</div>
			</div>
		{/each}
	</div>
</SectionPanel>
