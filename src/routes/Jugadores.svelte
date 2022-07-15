<script>
  import Card from "./Card.svelte"

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
  <Card>
    <div slot="jugador">
      <p>id : {dato.id}</p>
      <p>Nombre : {dato.nombre}</p>
      <p>Apellido : {dato.apellido}</p>
    </div>
  </Card>
{/each}

<style>
</style>
