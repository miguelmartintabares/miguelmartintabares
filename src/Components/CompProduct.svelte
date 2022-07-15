<script>
  import { products } from "./Cart.js"

  export let product = {}

  export let cantidadEnInput = ""

  const enviar = (e) => {
    cantidadEnInput = e.target.value
  }

  const buyProductCant = (cant) => {
    if(cantidadEnInput === 0)return
    for (let item of $products) {
      if (item.id == product.id) {
        item.cantidad = cant
        $products = $products
        cantidadEnInput = ""
        return
      }
    }
    product.cantidad = cant
    $products = [...$products, product]
    cantidadEnInput = ""
  }
</script>

<div class="eslot">
  <img class="card-image " src={product.img} alt={product.id} />
  <div class="infocombo">
    <p>Combo Nº : {product.numerocombo}</p>
    <p class="precio">Precio : ${product.precio}</p>
    <hr />
    <p class="detalle">Detalle : {product.infocombo}</p>
    <hr />
    <div class="footer">
      <input
        class="input-product"
        on:change={enviar}
        on:keyup={enviar}
        value={cantidadEnInput}
        type="number"
        placeholder="cantidad"
        min="1"
        max="50"
      />

      {#if cantidadEnInput}
        <button
          on:click={() => buyProductCant(cantidadEnInput)}
          disabled={cantidadEnInput.length === 0}>Agregar</button
        >
      {/if}
    </div>
  </div>
</div>

<style>
  .eslot {
    margin-top: 0px;
    width: 150px;
    height: auto;
    border: 1px solid #aaa;
    border-radius: 15px;
    box-shadow: 5px 5px 8px rgba(0, 0, 0, 0.75);
    opacity: 0.9;
    background-color: white;
    transition: 100ms;
  }
  .eslot:hover {
    transform: scale(1.2);
    opacity: 1;
    z-index: 100;
  }
  .card-image {
    width: 148px;
    margin-bottom: 5px;
    background-size: cover;
    border-radius: 15px 15px 0 0;
  }
  .eslot:hover {
    transform: scale(1.2);
    opacity: 1;
    z-index: 100;
  }
  .card-image {
    background-color: grey;

    width: 148px;
    margin-bottom: 5px;
    background-size: cover;
    border-radius: 15px 15px 0 0;
  }

  hr {
    margin: 5px;
  }

  p {
    margin: 0;
    margin-right: 0px;
    font-size: 0.6rem;
    font-weight: 900;
    font-weight: 900;
  }
  .infocombo {
    margin: 5px;
  }

  .footer {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }

  button {
    width: 70px;
    background-color: rgb(41, 103, 82);
    color: rgb(255, 255, 255);
    border: 0;
    border-radius: 0px 0px 10px 0px;
    font-size: 12px;
  }
  button:hover {
    background-color: rgb(162, 0, 255);
    transition: 100ms;
  }
  input {
    width: 70px;
    border: 1px solid;
  }
  button:hover {
    background-color: rgb(162, 0, 255);
    transition: 100ms;
  }
  input {
    width: 70px;
    border: 1px solid;
    border-radius: 0px 0px 0px 10px;
    padding: 5px;
  }
  .detalle {
    width: max-content;
  }

  .input-product {
    font-size: 0.65rem;
  }

  @media screen and (max-width: 480px) {
    .eslot {
      margin: 10px;
      width: 380px;
      height: 600px;
      opacity: 1;
    }
    .eslot:hover {
      transform: scale(1);
      opacity: 1;
      z-index: 100;
    }
    .card-image {
      width: 380px;
      margin-bottom: 20px;
    }
    p {
      font-size: 1.2rem;
      font-weight: 900;
    }
    .infocombo {
      margin: 25px;
    }
    button {
      width: 160px;
      height: 40px;
      font-size: large;
    }
    input {
      width: 160px;
      height: 40px;
      border: 1px solid;
      border-radius: 0px 0px 0px 10px;
      padding: 5px;
    }
    .input-product {
      font-size: 25px;
      text-align: center;
    }
  }
  .input-product {
    font-size: 0.65rem;
  }
</style>
