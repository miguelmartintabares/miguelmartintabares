<script>
  import { isUserLogin } from "./../Components/stores.js"
  import Navbar from "../Components/Navbar.svelte"
  import { onMount } from "svelte"

  // let estado = false 
  // const si = () => {estado=true}

  // onMount(si)

</script>

<Navbar />
{#if $isUserLogin }
<!-- <div class="spinner"> -->
  <slot />
<!-- </div> -->
{/if}

<style>
  .spinner{

    border: 4px solid rgba(0,0,0,0.1);
    width:40px ;
    height: 40px;
    border-radius:50%;
    border-left-color: #200053;
    animation: spinnerA 1s linear infinite;
  }
  @keyframes spinnerA{
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);

    
    }
  }
</style>