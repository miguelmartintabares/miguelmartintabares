<script>
  import CompCart from "./../Components/CompCart.svelte"
  import { datos, isUserLogin } from "./../Components/stores.js"
  import CompProducts from "../Components/CompProducts.svelte"
  import Card from "./Card.svelte"
  import { itemInCard } from "../Components/stores.js"
  import { products } from "../Components/stores.js"
  import { user } from "../Components/stores"
  import Spinner from "../Components/Spinner.svelte"
  import Toastify from "toastify-js"

  export const product = {}

  let listaPedido = []
  let total = 0
  export const toast = (texto) => {
    Toastify({
      text: texto,
      duration: 3000,
      gravity: "top",
      position: "right",
      offset: {
        x: 0, // horizontal axis - can be a number or a string indicating unity. eg: '2em'
        y: 50, // vertical axis - can be a number or a string indicating unity. eg: '2em'
      },
    }).showToast()
  }

  export const cancelar = () => {
    toast("Cancelado")
    $itemInCard = false
    $products = []
    $datos = 0
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
  <main slot="card">
    <div class="container">
      <div class="spin">
        <Spinner spinner={false} />
      </div>
      <!-- <h2 class="fijo">Combos</h2> -->
      <CompProducts />
      <div class="compcard">
        <!-- <h2 class="fijo">Lista de Pedidos</h2> -->
        {#if $itemInCard}
          <CompCart />
          <div class="botones-card">
            <button on:click={handleEmail}>Enviar </button>
            <button on:click={cancelar}>Cancelar</button>
          </div>
        {/if}
      </div>
    </div>
  </main>
</Card>

<style>
  .container {
    display: flex;
    height: 500px;
    width: auto;
    overflow: hidden;
    overflow-y: scroll;
  }
  .compcard {
    width: 400;
  }
  button {
    margin-top: 5px;
    width: 35%;
    border: 0;
    background-color: rgb(41, 103, 82);
    color: beige;
    border-radius: 1px;
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
     height: auto;
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
