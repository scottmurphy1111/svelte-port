<script lang="ts">
	import '../app.css';

	let { data, children } = $props();
	console.log('data', data);
</script>

{@render children()}
