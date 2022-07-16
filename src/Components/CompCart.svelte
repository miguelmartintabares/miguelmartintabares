<script>
  import { products } from "./stores.js"
  import CompCartProduct from "./CompCartProduct.svelte"

</script>

<h5>Lista de Pedidos</h5>
<hr />

  {#each $products as dato}
    <CompCartProduct product={dato} /> <!--product exportado de CompCardProduct se usa para enviar product desde acá -->
  {/each}

<style>
  h5{
    margin: 0;
    padding: 0;
  }
  hr{
    margin:7px;
  }

</style>
