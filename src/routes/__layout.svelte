<script>
  import { isUserLogin } from "./../Components/stores.js"
  import Navbar from "../Components/Navbar.svelte"
  import { onMount } from "svelte"
  import imagenFondo from "../img/o_1580076182.jpg"
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
  div {
    margin-top:70px;
  }
</style>
