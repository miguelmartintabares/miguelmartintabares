<script>
  import { products } from "./stores.js"
  import { itemInCard } from "./stores.js"

  itemInCard.set(0)

  $: {
    let count = 0
    for (let item of $products) {
      count = parseInt(count) + parseInt(item.cantidad)
    }
    itemInCard.set(count)
  }

  function handleLogin(e) {
    e.preventDefault()
  }
  function handleLogout(e) {
    e.preventDefault()
  }
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
      <ul class="navbar-nav me-auto mb-2 mb-md-0">
        <li class="nav-item">
          <a href="/Home" class="nav-link active" aria-current="page">Home</a>
        </li>
        <li class="nav-item">
          <a href="/Jugadores" class="nav-link">jugadores</a>
        </li>

        <li class="nav-item">
          <a class="nav-link " href="/Home">Disabled</a>
        </li>

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
      <div class="col-md-3 ">
        <button
          on:click={handleLogin}
          type="button"
          class="btn btn-outline-light ">Log-in</button
        >
        <button on:click={handleLogout} type="button" class="btn btn-light"
          >Log-out</button
        >
      </div>
    </div>
  </div>
</nav>

<style>
  :global(*){
    box-sizing: border-box;
  }

  @media screen and (max-width: 480) {
  }
</style>
