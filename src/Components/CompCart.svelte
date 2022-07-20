<script>
  import { products } from "./stores.js"
  import CompCartProduct from "./CompCartProduct.svelte"
  import Profile from "../routes/Profile.svelte";
  import {isUserLogin, user} from "./stores"


</script>

<h5>Lista de Pedidos</h5>
<div>
  <Profile isUserLogin={$isUserLogin} user={$user} />
</div>
<hr />
{#each $products as dato}
  <CompCartProduct product={dato} />
  <!--product exportado de CompCardProduct se usa para enviar product desde acá -->
{/each}

<style>
  div {
    display: flex;
    flex-direction: row;
    align-items: center;
  }

  h5 {
    text-align: center;
    margin: 0;
    padding: 0;
  }
  hr {
    margin: 7px;
  }
</style>
