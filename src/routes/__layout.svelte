<script>
  import { isUserLogin } from "./../Components/stores.js"
  import Navbar from "../Components/Navbar.svelte"
  import { onMount } from "svelte"

  // let estado = false
  // const si = () => {estado=true}

  // onMount(si)
</script>

<Navbar />
{#if $isUserLogin}
  <div>
    <slot />
  </div>
{/if}

<style>
  div{
    margin: 60px;
  }
</style>
