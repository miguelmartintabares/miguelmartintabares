<script>
  import Profile from "./../routes/Profile.svelte"
  import { signOut, onAuthStateChanged } from "firebase/auth"
  import { goto } from "$app/navigation"
  import { datos, isUserLogin, itemInCard, products, user } from "./stores.js"
  import { auth } from "../firebase"
  import { GoogleAuthProvider, signInWithPopup } from "firebase/auth"

  const login = async () => {
    try {
      const provider = new GoogleAuthProvider()
      const res = await signInWithPopup(auth, provider)
      $user = res.user
      $isUserLogin = true
      goto("/Home")
    } catch (error) {
      console.log("error")
      console.log(error)
    }
  }

  const logout = async () => {
    try {
      await signOut(auth)
       $isUserLogin = false
       $itemInCard = false
       $products=[]
       $user=[]
       $datos=0
      goto("/Home")
    } catch (error) {
      console.log(error)
    }
  }

  onAuthStateChanged(auth, (authUser) => {
    $user = authUser
    $isUserLogin = !!authUser
  })
</script>
<nav

  class="navbar fixed-top navbar-expand-md navbar-dark bg-dark"
  aria-label="Fourth navbar example"
>
  <div class="container-fluid">
    <a href="/Historia" class="navbar-brand">Taborin Rugby </a>

    <button
      class="navbar-toggler"
      type="button"
      data-bs-toggle="collapse"
      data-bs-target="#navbarsExample04"
      aria-controls="navbarsExample04"
      aria-expanded="true"
      aria-label="Toggle navigation"
    >
      <span class="navbar-toggler-icon" />
    </button>

    <div class="collapse navbar-collapse" id="navbarsExample04">
      {#if $isUserLogin}
        <ul class="navbar-nav me-auto mb-2 mb-md-0">
          <li class="nav-item">
            <a href="/Home" class="nav-link active" aria-current="page">Home</a>
          </li>
          <li class="nav-item">
            <a href="/Jugadores" class="nav-link">Jugadores</a>
          </li>

          <!-- <li class="nav-item">
            <a class="nav-link " href="/Home">Disabled</a>
          </li> -->

          <li class="nav-item dropdown">
            <a
              class="nav-link dropdown-toggle"
              href="/Home"
              id="dropdown04"
              data-bs-toggle="dropdown"
              aria-expanded="false">Combos</a
            >
            <ul class="dropdown-menu" aria-labelledby="dropdown04">
              <a class="dropdown-item" href="/Agregar">Agregar</a>
              <a class="dropdown-item" href="/Pedidos">Pedidos</a>
              <a class="dropdown-item" href="/Administrar">Administrar</a>
            </ul>
          </li>
        </ul>
        <Profile isUserLogin={$isUserLogin} user={$user} />
      {/if}
      
        {#if $isUserLogin}
          <button on:click={logout} type="button" class="btn btn-outline-light"
            >Salir</button
          >
          {:else}
          <div class="col-md-3 sm">
            <button on:click={login} type="button" class="btn btn-outline-light"
              >Ingresar</button
            >
          </div>
        {/if}
    </div>
  </div>
</nav>
<style>
  :global(*) {
    box-sizing: border-box;
  }
</style>
