<script>
import { onMount } from 'svelte';
import { db } from "../firebase"
import {onSnapshot,collection} from "firebase/firestore"
// import { baseProducts } from "./product.js"
import CompProduct from "./CompProduct.svelte"
import { combos } from './stores';

  onMount(()=>{
     onSnapshot(
    collection(db, "combos"),
    (querySnapshot) => {
      $combos = querySnapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id }))
    },
    (err) => {
      console.error(err)
    }
  )
  return console.log("sale")
  })

</script>

<div class="main-combos">
  <div class="container-product">
    {#each $combos as dato}      <!--$baseProducts seria la base de dato sw combos--> 
      <CompProduct product={dato} />   <!-- product es la variable para enviar dato a CompProduct-->
    {/each}
  </div>
</div>

<style>
  .main-combos {
    width: 70%;
    margin: 0px 0px 0px 0px;
    padding: 0;
    height: 100%;
    height: auto;
  }
  .container-product {
    margin: 0px;
    display: grid;
    grid-auto-flow: dense;
    grid-template-columns: repeat(auto-fill, minmax(148px, 1fr));
    justify-items: center;
    gap: 0rem;
    /* height: 280px; */
    /* overflow:hidden;
    overflow-y: scroll; */
  }
  hr {
    padding: 0;
    margin: 0px;
  }
  @media screen and (max-width: 480px) {
    .container-product {
      display: flex;
      flex-direction: column;
      width: 80%;
      gap:1rem;
    }
    .main-combos {
      width: 100%;
      margin: 0px 0px 0px 0px;
    }

    hr {
      margin: 10px 0px 10px 0px;
      width: 300px;
    }
  }
</style>
