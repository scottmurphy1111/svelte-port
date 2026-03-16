<script lang="ts">
	import AnimateOnScrollElement from '$lib/components/AnimateOnScrollElement.svelte';
	import SectionPanel from '$lib/components/SectionPanel.svelte';
	import type { Contact } from '$lib/types';
	import Icon from '@iconify/svelte';

	let { contact }: { contact: Contact } = $props();

	const phone = '804.836.2326';
	const user = 'scottmurphy1111';
	const domain = 'gmail.com';

	const email = `${user}@${domain}`;
</script>

<SectionPanel id="contact" title="A Special Note">
	<div class="text-primaryBlue flex flex-col gap-8 text-xl font-bold normal-case">
		<AnimateOnScrollElement>
			<p>To put it simply, I love to code ❤️</p>
		</AnimateOnScrollElement>
		<AnimateOnScrollElement>
			<p>
				Whether I'm freelancing, working on personal projects, or collaborating with other
				developers, I find immense joy in the process of creative problem-solving and bringing user
				experiences to life 🏅
			</p>
		</AnimateOnScrollElement>
		<AnimateOnScrollElement>
			<p>I look forward to hearing from you and partnering together in the future 🚀</p>
		</AnimateOnScrollElement>
		<div class="flex flex-col gap-2">
			<AnimateOnScrollElement>
				<div class="mb-1 h-1 w-24 bg-white"></div>
			</AnimateOnScrollElement>
			<AnimateOnScrollElement>
				<div class="flex items-center gap-2">
					<p>
						<a href={`tel:${phone}`}>{phone}</a>
					</p>
					<Icon icon="lucide:phone" class="text-white" />
				</div>
			</AnimateOnScrollElement>
			<AnimateOnScrollElement>
				<div class="flex items-center gap-2">
					<p>
						<a target="_blank" href={`mailto:${email}`}>{email}</a>
					</p>
					<Icon icon="ic:outline-email" class="text-white" />
				</div>
			</AnimateOnScrollElement>
		</div>
		<AnimateOnScrollElement>
			<div class="flex gap-4">
				{#each contact.socials as social (social.link)}
					<a href={social.link} target="_blank">
						<Icon icon={social.icon} class="text-3xl text-white" />
					</a>
				{/each}
			</div>
		</AnimateOnScrollElement>
	</div>
</SectionPanel>
