<script>
  import CompCart from "./../Components/CompCart.svelte"
  import { datos, products } from "../Components/stores.js"
  import CompProducts from "../Components/CompProducts.svelte"
  import { itemInCard } from "../Components/stores.js"
  import Spinner from "../Components/Spinner.svelte"
  import Toastify from "toastify-js"
  import Slots from "./Slots.svelte"
  import TituloPagina from "../Components/TituloPagina.svelte"

  export const product = {}
  let listaPedido = []

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

   const cancelar = () => {
    toast("Cancelado")
    $itemInCard = false
    $products = []
  }
   const handleEmail = () => {
    toast("Pedido Enviado...")
    $itemInCard = false
     const total = $products
      .map((item) => item.precio * item.cantidad)
      .reduce((a, b) => a + b)
    listaPedido = [...$products]
    $products = []
  }
</script>

<Slots>
  <main slot="pedidos">
    <TituloPagina
      contenido="Pedidos"
      bg_c=" rgb(41, 103, 82)"
      ai="center"
      ct="white"
      bg_wd="38%"
    />
    <div class="container">
      <CompProducts />
      <div class="compcard">
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
</Slots>

<style>
  .container {
    display: flex;
    height: 480px;
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
