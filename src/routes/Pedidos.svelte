<script>
	import { datos, isUserLogin } from './../Components/stores.js';

  import CompProducts from "../Components/CompProducts.svelte"
  import CompCart from "../Components/CompCart.svelte"
  import Card from "./Card.svelte"
  import { itemInCard } from "../Components/stores.js"
  import { products } from "../Components/stores.js"
  import { user } from "../Components/stores"
  import Spinner from "../Components/Spinner.svelte"
  import Toastify from "toastify-js"
  
  export const product = {}

  let listaPedido = []
  let total = 0
  export const toast=(texto)=>{
    Toastify({ 
      text: texto, 
      duration:3000, 
      gravity:"top", 
      position: "right", 
      offset: {
        x: 0, // horizontal axis - can be a number or a string indicating unity. eg: '2em'
        y:50 // vertical axis - can be a number or a string indicating unity. eg: '2em'
    },}).showToast()
  }
  
  export const cancelar=()=>{
    toast("Cancelado")
    $itemInCard = false
    $products=[]
    $datos=0
  }
  export const handleEmail = () => {
    toast("Pedido Enviado...")
    $itemInCard = false
    total = $products
      .map((item) => item.precio * item.cantidad)
      .reduce((a, b) => a + b)

    listaPedido = [...$products]
    console.log(listaPedido)
    $products = []
  }
</script>

<Card>
  <main slot="card" class="container">
    <div class="spin">
      <Spinner spinner={false} />
    </div>
      <CompProducts />
    <div class="compcard">
      {#if $itemInCard}
        <CompCart />
        <div class="botones-card">
          <button on:click={handleEmail}>Enviar </button>
          <button on:click={cancelar}>Cancelar</button>
        </div>
      <!-- {:else if listaPedido.length }
        <div class="pedido">
          <h4>Pedido Realizado con Exito...</h4>
          <p>{$user.displayName}, {$user.email}</p>
          <hr />
          {#each listaPedido as lista}
            <div class="lista">
              <p>Combo Nº: {lista.numerocombo}</p>
              <p>$ {lista.precio}</p>
              <p>Cant.: {lista.cantidad}</p>
              <p>$ {lista.precio * lista.cantidad}</p>
            </div>
            <hr />
          {/each}
          <p class="total">Total:${total}</p>
          <hr>
        </div>
         <div class="botones-lista"> 
        <button>Realizar otro Pedido</button>
        <button >Cancelar Pedido</button>
      </div> -->
      {/if}
      
    </div>
    
  </main>
</Card>

<style>
  .total {
    align-self: flex-end;
  }
  hr {
    margin: 0;
  }
  .lista {
    display: flex;
    flex-direction: row;
    text-align: center;

  }
  p {
    margin: 5px;
    font-size: 0.7rem;
    padding: 0px;
  }
  .pedido {
    background: rgb(206, 255, 187);
    width: 300px;
    height: auto;
   
    border-radius: 5px;
    padding: 10px;
    text-align: center;
  }
  .container {
    display: flex;
  }
  .compcard {
    margin-right: 20px;
    margin-left: 20px;
    width: auto;
    height: auto;
  }

  button {
    margin-top: 5px;
    width: 35%;
    border: 0;
    background-color: rgb(41, 103, 82);
    color: beige;
    border-radius: 5px;
    font-size: 15px;
    height: 30px;
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
    .container {
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
      margin-right: 10px;
      margin-left: 10px;
    }
  }
</style>
