<script lang="ts">
	import AnimateOnScrollElement from '$lib/components/AnimateOnScrollElement.svelte';
	import SectionPanel from '$lib/components/SectionPanel.svelte';
	import type { Contact } from '$lib/types';
	import Icon from '@iconify/svelte';

	let { contact }: { contact: Contact } = $props();

	let phoneRef = $state<HTMLParagraphElement>();
	let emailRef = $state<HTMLParagraphElement>();

	const loadContact = () => {
		const phone = '804.836.2326';

		const user = 'scottmurphy1111';
		const domain = 'gmail.com';

		if (!phoneRef || !emailRef) return;
		phoneRef.innerHTML = `<a href="tel:${phone}">${phone || '804.836.2326'}</a>`;

		emailRef.innerHTML = `<a target="_blank" href="mailto:${user}@${domain}">${user}@${domain}</a>`;
	};

	$effect(() => {
		loadContact();
	});
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
					<p bind:this={phoneRef}></p>
					<Icon icon="lucide:phone" class="text-white" />
				</div>
			</AnimateOnScrollElement>
			<AnimateOnScrollElement>
				<div class="flex items-center gap-2">
					<p bind:this={emailRef}></p>
					<Icon icon="ic:outline-email" class="text-white" />
				</div>
			</AnimateOnScrollElement>
		</div>
		<AnimateOnScrollElement>
			<div class="flex gap-4">
				{#each contact.socials as social}
					<a href={social.link} target="_blank">
						<Icon icon={social.icon} class="text-3xl text-white" />
					</a>
				{/each}
			</div>
		</AnimateOnScrollElement>
	</div>
</SectionPanel>
