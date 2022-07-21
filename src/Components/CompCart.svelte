<script>
  import { products } from "./stores.js"
  import CompCartProduct from "./CompCartProduct.svelte"
</script>

<main>
  {#each $products as dato}
    <CompCartProduct product={dato} />
    <!--product exportado de CompCardProduct se usa para enviar product desde acá -->
  {/each}
</main>

<style>
  main {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: auto;
    height: 480px;
    overflow: hidden;
    overflow-y: scroll;
  }
  @media screen and (max-width: 480px) {

    main {
    height: auto;
    overflow: unset;
    overflow-y: unset;
    }
  } 
</style>
