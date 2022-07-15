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
    <div>
      <div class="compcard">
      {#if $itemInCard}
        <CompCart />
          <div class="botones-card">
            <button on:click={handleEmail}>Enviar</button>
            <!-- <spam> {$itemInCard}</spam>
            <spam>Total : {$itemInCard}</spam> -->
          </div>
        {/if}
      </div>
    </div>
  </main>
</Card>

<style>
  .container-pedidos {
    display: flex;
  }
  .compcard {
    margin-top: 80px;
    margin-right: 20px;
    margin-left: 20px;
    width: 400px;
    align-content: space-between;
    height: auto;
    
  }
  
  button {
    width: 100px;
    border: 0;
    background-color: rgb(41, 103, 82);
    color: beige;
    border-radius: 5px;
  }
  button:hover {
    background-color: rgb(162, 0, 255);
    transition: 100ms;
    transform: scale(1.01) ;
  }
  .botones-card{
   display: flex;
   justify-content:space-between;
  }
</style>
