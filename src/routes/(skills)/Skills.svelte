<script lang="ts">
	import GridRow from '$lib/components/GridRow.svelte';
	import SectionPanel from '$lib/components/SectionPanel.svelte';
	import type { Skill } from '$lib/types';
	import Icon from '@iconify/svelte';

	let { skills }: { skills: Skill[] } = $props();
</script>

<SectionPanel id="skills" title="Skills & Tools">
	<GridRow>
		{#each skills as skill}
			<div class="flex w-full flex-col items-stretch justify-center gap-4">
				<div
					class="border-primaryBlue flex h-16 w-16 items-center justify-center rounded-full border-2 p-2 text-4xl"
				>
					<Icon icon={skill.icon} />
					<!-- <img
						src={`${skill.image}`}
						alt="skills icon"
						class="border-primaryBlue h-16 w-16 rounded-full border-2 p-2"
					/> -->
				</div>
				<div class="flex h-1 w-1/5 bg-white"></div>
				<div class="flex flex-col items-stretch justify-center">
					{#each skill.skillsArray as item}
						<p class="text-base font-bold md:text-lg">{item}</p>
					{/each}
				</div>
			</div>
		{/each}
	</GridRow>
	<!-- <p class="text-lg">I have a diverse skill set that includes:</p>
	<ul class="mt-4 ml-6 list-disc">
		<li>Web Development (HTML, CSS, JavaScript)</li>
		<li>Frontend Frameworks (React, Svelte)</li>
		<li>Backend Development (Node.js, Express)</li>
		<li>Database Management (SQL, MongoDB)</li>
		<li>Version Control (Git, GitHub)</li>
		<li>Responsive Design and UI/UX Principles</li>
	</ul>
	<p class="mt-4">I am always eager to learn new technologies and improve my skills.</p> -->
</SectionPanel>
