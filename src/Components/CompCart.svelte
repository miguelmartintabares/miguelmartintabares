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
</style>
