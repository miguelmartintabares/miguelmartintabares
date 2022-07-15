<script>
  import { products } from "./Cart.js"

  export let product

  const agregarUnidad = () => {
    product.cantidad++
    $products = $products
  }

  const restarUnidad = () => {
    if (--product.cantidad != 0) {    //decrementa primero y luego chequea si es dist de cero
      $products = $products
    } else {
      $products = $products.filter((item) => product.id != item.id)
    }
  }

  const removeProduct = () => {
    $products = $products.filter((item) => product.id != item.id)
  }
</script>

<div class="card-list">
  <img src={product.img} alt={product.img} />
  <p>Combo Nº {product.numerocombo}</p>
  <p>Cantidad {product.cantidad}</p>
  <p>Total ${product.precio * product.cantidad}</p>
  <button on:click={agregarUnidad}> + </button>
  <button on:click={restarUnidad}> - </button>
  <button on:click={removeProduct}> x </button>
</div>

<style>
  p {
    font-size: 1rem;
    margin: 8px;
    color: rgb(255, 255, 255);
  }
  .card-list {
    background-color: rgb(103, 119, 104);
    display: flex;
    text-align: center;
    margin:2px;
    padding: 0;
    border-radius: 30px 0px 30px 10px;
    box-shadow:5px 5px 5px rgba(0, 0, 0,0.5);
  }
  img {
    height: 70px;
    width: auto;
    border-radius: 30px 0px 30px 10px;
  }
  button {
    height: 25px;
    border: 1px solid;
    align-items: center;
    border-radius: 5px;
  }
  button:hover{
   background-color: rgb(162, 0, 255);
   transition:100ms;
  }
</style>
