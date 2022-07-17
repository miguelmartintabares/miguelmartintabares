<script>
	import { isUserLogin } from './../Components/stores.js';
  import Navbar from "../Components/Navbar.svelte"
 
</script>

<Navbar />
{#if $isUserLogin}
<slot/>
{/if}   


