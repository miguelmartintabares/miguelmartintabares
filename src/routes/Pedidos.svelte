<script>
  import CompProducts from "../Components/CompProducts.svelte"
  import CompCart from "../Components/CompCart.svelte"
  import Card from "./Card.svelte"
  import { itemInCard } from "../Components/stores.js"
  import { products } from "../Components/stores.js"
  import { goto } from "$app/navigation"
  import {isUserLogin,user} from "../Components/stores"

  export const product = {}

  export const handleEmail = () => {
    console.log($user.displayName)
    console.log($user.email)
    console.log($products)
    itemInCard.set(false)
    $products=[]

  }
</script>

<Card>
  <main slot="card" class="container-pedidos">
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
      margin-top: 0px;
      margin-bottom: 30px;
      height: 50px;
      font-size: 20px;
    }
    .compcard {
      padding: 0px;
      width: 300px;
      align-content: space-between;
      height: auto;
      padding: 0px;
      margin-top: 60px;
      margin-right: 10px;
      margin-left: 10px;
    }
  }
</style>
