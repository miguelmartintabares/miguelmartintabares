<script>
  import Slots from "./Slots.svelte"

  const datosEnCero = [
    {
      id: 0,
      nombre: "",
      edad: "",
      dni: "",
      año_nacimiento: 0,
    },
  ]
  const datosJugador = [
    {
      id: 1,
      nombre: "Diego",
      apellido: "Pete",
      edad: "",
      dni: "",
      año_nacimiento: 2004,
    },
    {
      id: 2,
      nombre: "Pablo",
      apellido: "Marmol",
      edad: "",
      dni: "",
      año_nacimiento: 2005,
    },
    {
      id: 3,
      nombre: "Victor",
      apellido: "Robles",
      edad: "",
      dni: "",
      año_nacimiento: 2005,
    },
    {
      id: 4,
      nombre: "Juan",
      apellido: "Perez",
      edad: "",
      dni: "",
      año_nacimiento: 2007,
    },
  ]
</script>

{#each datosJugador as dato}
  <Slots>
    <div slot="jugadores">
      <div class="jugador">
        <div class="jugador-Slots">
          <p>id : {dato.id}</p>
          <p>Nombre : {dato.nombre}</p>
          <p>Apellido : {dato.apellido}</p>
          <p>dni : {dato.dni}</p>
          <p>edad : {dato.apellido}</p>
          <p>Clase : {dato.apellido}</p>
        </div>
      </div>
    </div>
  </Slots>
{/each}

<style>
  .jugador {
    margin: 0px;
    padding: 0;
    color: white;
  }
  .jugador-Slots {
    display: flex;
    margin: 10px;
    padding: 0;
    color: white;
  }
</style>
