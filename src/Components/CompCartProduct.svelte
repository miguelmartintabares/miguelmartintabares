<script>
  import { itemInCard, products } from "./stores.js"
  
  export let product 

  const agregarUnidad = () => product.cantidad++
  const restarUnidad = () => {
    if (--product.cantidad != 0) {    //decrementa primero y luego chequea si es dist de cero
    } else {
      $products = $products.filter((e) => product.id != e.id)
    }
  }
  
  const removeProduct = () => {
    $products = $products.filter((e) => product.id != e.id) // dejo en product el ide(e.id) no clikeado
    console.log($products,$itemInCard)
    if($products.length===0)$itemInCard=false
  }


</script>

<div class="card-list">
  <img src={product.img} alt={product.numerocombo} />
  <p>Combo Nº {product.numerocombo}</p>
  <p>Cantidad {product.cantidad}</p>
  <p>Total ${product.precio * product.cantidad}</p>
  <p on:click={removeProduct} class="material-symbols-outlined">
    delete_forever
  </p>
</div>

<style>
  
  .card-list {
    background-color: rgb(103, 119, 104);
    display: flex;
    text-align: center;
    margin-bottom: 10px;
    padding: 0;
    border-radius: 30px 0px 30px 10px;
    box-shadow: 5px 5px 5px rgba(0, 0, 0, 0.5);
    height: 60px;
    width: 300px;
  }
  img {
    height: 70px;
    width: auto;
    border-radius: 30px 0px 30px 10px;
  }
  p {
    font-size: 0.81rem;
    margin: 8px;
    color: rgb(255, 255, 255);
  }
  .material-symbols-outlined {
    font-size: 2.5rem;
    color: white;
  }
  .material-symbols-outlined:hover {
    color: red;
  }
  @media screen and (max-width: 480px) {
    
    .card-list {
    background-color: rgb(103, 119, 104);
    display: flex;
    text-align: center;
    margin-bottom: 30px;
    padding: 0;
    border-radius: 30px 0px 30px 10px;
    box-shadow: 5px 5px 5px rgba(0, 0, 0, 0.5);
    height: 50px;
    width: 300px;
  }
  }
</style>
