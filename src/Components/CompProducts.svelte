<script>
  import { products } from "./product.js"
  import CompProduct from "./CompProduct.svelte"
import CompNav from "./CompNav.svelte"
</script>

<div class="main-combos">
  <h5>Combos</h5>
  <hr>
  <div class="container-product">
    {#each $products as product}
      <CompProduct product={product} />
    {/each}
  </div>
</div>

<style>
  h5{
    font-size: 1.2rem;
    margin: 0;
    padding: 0;
  }
  .main-combos {
    width:70%;
    display: flex;
    flex-direction: column;
    margin-top: 60px;
    margin-left: 10px;
    
  }
  .container-product {
    display: grid;
    grid-auto-flow: dense;
    grid-template-columns: repeat(auto-fill, minmax(135px, 1fr));
    gap: 1rem;
  }
  hr {
    padding: 0;
    margin: 10px;
    column-width: inherit;
  }
</style>
