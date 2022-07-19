<script>
  import CompProducts from "../Components/CompProducts.svelte"
  import CompCart from "../Components/CompCart.svelte"
  import Card from "./Card.svelte"
  import { itemInCard } from "../Components/stores.js"
  import { products } from "../Components/stores.js"
  import { goto } from "$app/navigation"
  import {isUserLogin,user} from "../Components/stores"

  export const product = {}
  let listaPedido=[]
  let total=0
  let parcial=0

  export const handleEmail = () => {
    $itemInCard=false
    total=$products.map((item)=> item.precio * item.cantidad )
    total=total.reduce((a,b)=> a+b)
    listaPedido=[...$products]
     console.log(listaPedido)
     $products=[]
  }
  const calculaMontoTotal= (a,b)=>{
    
    console.log(a*b)


  }
</script> 

<Card>
  <main slot="card" class="container-pedidos">
    <CompProducts />
    <div class="compcard">
      {#if $itemInCard}
        <CompCart />
        <div class="botones-card">
          <button on:click={handleEmail}>Realizar Pedido</button>
        </div>
      {:else}
      
      <div class="pedido">
        <h4>Su pedido...</h4>
        <p>{$user.displayName}, {$user.email}</p>

        <hr>
        {#each listaPedido as lista}
         <div class="lista">
          <p>Combo Nº: {lista.numerocombo}</p>
          <p>$ {lista.precio}</p>
          <p>Cant.: {lista.cantidad}</p>
          <p>$ {lista.precio * lista.cantidad} </p>
          
         </div>
          <hr>
        {/each}

         <p class="total">Total:${total} </p>
      </div>
      {/if}
    </div>
  </main>
</Card>

<style>
  .total{
    align-self: flex-end;
  }
  hr{
    margin: 0;
  }
  .lista{
    display: flex;
    flex-direction: row;
    justify-content:space-between;
  }
  p{
    margin: 5px;
    font-size:0.7rem;
    padding: 0px;
    
  }
  .pedido{

    background: rgb(241, 241, 241);
    width: 300px;
    height:auto;
    border: 1px solid;
    border-radius: 5px;
    padding: 10px;
    text-align: center;
  }
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
