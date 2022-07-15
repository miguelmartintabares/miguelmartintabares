<script>
  import Pedidos from "./Pedidos.svelte"
  import Card from "./Card.svelte"

  import img1 from "../img/combo_img1.png"
  import img2 from "../img/combo_img2.png"
  import img3 from "../img/combo_img3.png"
  import img4 from "../img/combo_img4.png"
 
  
  $: dato = Combos

  let Combos = [
    {
      id: 1,
      numerocombo: "1",
      infocombo: "Caja de 6 unidades",
      precio: "960",
      pedido: false,
      img: img1,
      cantidad:""
    },
    {
      id: 2,
      numerocombo: "2",
      infocombo: "Caja de 12 unidades",
      precio: "1920",
      pedido: false,
      img: img2,
      cantidad:""
    },
    {
      id: 3,
      numerocombo: "3",
      infocombo: "Aca va la info del combo",
      precio: "960",
      pedido: false,
      img: img3,
      cantidad:""
    },
    {
      id: 4,
      numerocombo: "4",
      infocombo: "Aca va la info del combo",
      precio: "1920",
      pedido: false,
      img: img4,
      cantidad:""
    },
    {
      id: 5,
      numerocombo: "5",
      infocombo: "Caja de 6 unidades",
      precio: "960",
      pedido: false,
      img: img1,
      cantidad:""
    },
    {
      id: 6,
      numerocombo: "6",
      infocombo: "Caja de 12 unidades",
      precio: "1920",
      pedido: false,
      img: img2,
      cantidad:""
    },
    {
      id: 7,
      numerocombo: "7",
      infocombo: "Aca va la info del combo",
      precio: "960",
      pedido: false,
      img: img3,
      cantidad:""
      
      
    },
    {
      id: 8,
      numerocombo: "8",
      infocombo: "Aca va la info del combo",
      precio: "1920",
      pedido: false,
      img: img4,
      cantidad:""
    },
  ]

  function handleClick(dato) {
    dato.pedido = true
    console.log("click!!", dato.numerocombo)
    console.log("cantidad!!", dato.cantidad)
  }

</script>

<main>
  <div class="container">
    {#each Combos as dato}
      <Card>
        <!-- <div class="eslot" slot="combo">
          <img class="card-image " src={dato.img} alt={dato.id} />
          <div class="infocombo">
            <p>Combo Nº : {dato.numerocombo}</p>
            <p class="precio">Precio : ${dato.precio}</p>
            <hr />
            <p class="detalle">Detalle : {dato.infocombo}</p>
            <hr />
            <div class="footer">
              <input type="number" bind:value={dato.cantidad} placeholder="cantidad" min="0" max="20" />
              <button on:click={() => handleClick(dato)} class="btn btn-success"
                >Agregar</button
              >
            </div>
          </div>
        </div> -->
      </Card>
    {/each}
  </div>

 <!-- <div class="canasto">pedidos {dato.cantidad}</div> -->
  
</main>

<style>
  main {
    display: flex;
  }
  .container {
    display: grid;
    grid-auto-flow: dense;
    grid-template-columns: repeat(auto-fill, minmax(210px, 1fr));
    gap: 1rem;
  }

  .eslot {
    margin-top: 20px;
    width: 211px;
    height: auto;
    border: 1px solid #aaa;
    border-radius: 15px;
    box-shadow: 2px 2px 8px rgba(0, 0, 0, 0.1);
  }

  .card-image {
    background-color: grey;
    width: 210px;
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
    width: 100px;
    background-color: rgb(41, 103, 82);
    color: rgb(255, 255, 255);
    border: 0;
    border-radius: 0px 0px 10px 0px;
  }
  input {
    width: 100px;
    border-radius: 0px 0px 0px 10px;
    padding: 5px;
  }
  .detalle {
    width: 210px;
  }
  .canasto {
    padding: 10px;
    margin-top: 20px;
    width: 211px;
    height: auto;
    border: 1px solid #aaa;
    border-radius: 15px;
    box-shadow: 2px 2px 8px rgba(0, 0, 0, 0.1);
  }
</style>
