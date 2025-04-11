<script lang="ts">
	interface Props {
		children?: import('svelte').Snippet;
		center?: boolean;
	}

	let { children, center }: Props = $props();
</script>

<div
	class="grid w-full place-items-start gap-8"
	class:!place-items-center={center}
	style={`grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)`}
>
	{@render children?.()}
</div>
