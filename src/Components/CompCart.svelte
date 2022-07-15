<script>
  import { products } from "./Cart.js"
  import CompCartProduct from "./CompCartProduct.svelte"
</script>
    {#each $products as product}
        <CompCartProduct {product} />
    {/each}
<style>

</style>
