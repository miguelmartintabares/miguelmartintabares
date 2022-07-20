<script>
  import { products } from "./stores.js"
  import CompCartProduct from "./CompCartProduct.svelte"
</script>

<div>
  {#each $products as dato}
    <CompCartProduct product={dato} />
    <!--product exportado de CompCardProduct se usa para enviar product desde acá -->
  {/each}
</div>

<style>
  div {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  h5 {
    color: aliceblue;
    margin: 1px;
    padding: 0;
  }
  hr {
    margin: 7px;
  }
</style>
