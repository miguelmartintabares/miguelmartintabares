<script>
  import CompProducts from "../Components/CompProducts.svelte"
  import CompCart from "../Components/CompCart.svelte"
  import Card from "./Card.svelte"
  import { itemInCard } from "../Components/Cart.js"
  import { products } from "../Components/Cart.js"

  const handleEmail = () => {
    console.log($products)
    console.log($itemInCard)
    itemInCard.set(0)
    $products = $products.filter((item) => product.id != item.id)
    console.log($products)
  }
</script>

<Card>
  <main class="container-pedidos" slot="card">
    <CompProducts />
    <div class="compcard">
      {#if $itemInCard}
        <CompCart />
        <div class="botones-card">
          <button on:click={handleEmail}>Enviar</button>
        </div>
      {/if}
    </div>
  </main>
</Card>

<style>
  .container-pedidos {
    display: flex;
  }
  .compcard {
    margin-top: 60px;
    margin-right: 20px;
    margin-left: 20px;
    width: auto;
    height: auto;
  }

  button {
    width: 100%;
    border: 0;
    background-color: rgb(41, 103, 82);
    color: beige;
    border-radius: 5px;
  }
  button:hover {
    background-color: rgb(162, 0, 255);
    transition: 100ms;
    transform: scale(1.01);
  }
  .botones-card {
    display: flex;
    justify-content: space-between;
  }

  @media screen and (max-width: 480px) {
    .container-pedidos {
      display: flex;
      flex-direction: column-reverse;
    }
    button {
      height: 50px;
      font-size: 20px;
    }
    .compcard {
      padding: 0px;
      width: 300px;
      align-content: space-between;
      height: auto;
      padding: 0px;
      margin-top: 80px;
      margin-right: 0px;
      margin-left: 0px;
    }
  }
</style>
