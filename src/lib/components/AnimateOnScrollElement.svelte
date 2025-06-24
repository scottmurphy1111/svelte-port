<script lang="ts">
	import { tick } from 'svelte';

	interface Props {
		children?: import('svelte').Snippet;
		class?: string;
	}

	let { class: classNames, children }: Props = $props();
	let elementRef: HTMLElement | null = $state(null);
	let elHeight = $state(0);

	let klass = classNames ? classNames : '';

	let visible = $state(false);

	const initObserver = $state(() => {
		if (!elementRef) return;
		elHeight = elementRef.offsetHeight;
		const observer = new IntersectionObserver(
			(entries) => {
				entries.forEach((entry) => {
					if (entry.isIntersecting) {
						visible = true;
						observer.unobserve(entry.target);
					}
				});
			},
			{
				root: null,
				rootMargin: '0px 0px -100px 0px',
				threshold: 0
			}
		);
		observer.observe(elementRef);
		return () => {
			if (elementRef) {
				observer.unobserve(elementRef);
			}
		};
	});

	tick().then(() => {
		initObserver?.();
	});
</script>

<div bind:this={elementRef} class={`h-[${elHeight}px] ${klass}`}>
	<div
		class="transform-none opacity-0 transition-all duration-500 ease-in-out"
		class:opacity-100={visible}
	>
		{@render children?.()}
	</div>
</div>
