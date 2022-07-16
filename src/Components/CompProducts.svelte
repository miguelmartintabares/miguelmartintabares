<script>
  import { products } from "./product.js"
  import CompProduct from "./CompProduct.svelte"
  import CompNav from "./CompNav.svelte"
</script>

<div class="main-combos">
  <h5>Combos</h5>
  <!-- <CompNav />   selector zoom al pedo para probar -->
  <hr />
  <div class="container-product">
    {#each $products as product}
      <CompProduct {product} />
    {/each}
  </div>
</div>

<style>
  h5 {
    font-size: 1.2rem;
    margin: 0;
    padding: 0;
  }
  .main-combos {
    width: 100%;
    margin: 0px 10px 0px 10px ;
   
  }
  .container-product {
    display: grid;
    grid-auto-flow: dense;
    grid-template-columns: repeat(auto-fill, minmax(140px, 1fr));
    gap: 1rem;
  }
  hr {
    padding: 0;
    margin: 10px;
    column-width: inherit;
  }
  @media screen and (max-width: 480px) {
    .container-product {
      display: grid;
      grid-auto-flow: dense;
      grid-template-columns: repeat(auto-fill, minmax(480px, 1fr));
      gap: 1rem;
    }

    hr {
      margin: 10px 0px 10px 0px;
      width: 300px;
    }
  }
</style>
