<script lang="ts">
	import digiBg from '$lib/images/digi-bg1.png';
</script>

<div class="static-bg" style:background-image={`url('${digiBg}')`}></div>
<div class="bg-overlay"></div>

<style>
	.bg-overlay {
		height: 100vh;
		width: 100%;
		background-color: rgba(8, 42, 76, 0.1);
		margin: 0 auto;
		position: fixed;
		z-index: 2;
		top: 0;
		left: 0;
		transition: all 0.15s ease-out;
	}

	.static-bg {
		height: 100vh;
		width: 100%;
		margin: 0 auto;
		position: fixed;
		top: 0;
		left: 0;
		z-index: 1;
		background-repeat: repeat;
		background-position: center center;
		background-size: cover;
	}
</style>
