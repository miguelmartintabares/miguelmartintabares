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
    margin-left: 10px;
    padding: 0;
  }
  .main-combos {
    width: 100%;
    margin: 60px 0px 0px 10px;
    padding: 0;
    height: 100%;
  }
  .container-product {
    margin: 0px;
    display: grid;
    grid-auto-flow: dense;
    grid-template-columns: repeat(auto-fill, minmax(148px, 1fr));
    justify-items: center;
    gap: 0rem;
  }
  hr {
    padding: 0;
    margin: 0px;
  }
  @media screen and (max-width: 480px) {
    .container-product {
      display: flex;
      flex-direction: column;
      width: 80%;
      gap: 1rem;
    }
    .main-combos {
      width: 100%;
      margin: 10px 0px 0px 10px;
   
    }

    hr {
      margin: 10px 0px 10px 0px;
      width: 300px;
    }
  }
</style>
