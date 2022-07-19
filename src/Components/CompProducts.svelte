<script>
  import { baseProducts } from "./product.js"
  import CompProduct from "./CompProduct.svelte"
</script>

<div class="main-combos">
  <h5>Combos</h5>
  <hr />
  <div class="container-product">
    {#each $baseProducts as dato}      <!--$baseProducts seria la base de dato sw combos--> 
      <CompProduct product={dato} />   <!-- product es la variable para enviar dato a CompProduct-->
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
    margin: 0px 0px 0px 10px;
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
