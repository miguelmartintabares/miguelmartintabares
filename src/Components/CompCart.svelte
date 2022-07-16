<script>
  import { products } from "./Cart.js"
  import CompCartProduct from "./CompCartProduct.svelte"
</script>

<h5>Lista de Pedidos</h5>
<hr />

  {#each $products as product}
    <CompCartProduct {product} />
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
