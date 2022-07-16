<script>
	let big = false;
</script>


<div class:big>
    <input type=checkbox bind:checked={big}> Zoom
	<!-- some {big ? 'big' : 'small'} text -->
</div>

<style>
	.big {
		color: rgb(56, 76, 57);
	}
</style>