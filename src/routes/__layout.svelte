
<script>
  import { isUserLogin } from "./../Components/stores.js"
  import Navbar from "../Components/Navbar.svelte"
</script>

<Navbar />
{#if $isUserLogin}
  <div>
   <slot />
  </div>
{/if}

<style>
  div {
    margin-top:70px;
  }
</style>