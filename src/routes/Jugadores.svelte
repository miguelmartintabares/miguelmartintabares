<script>
	import TituloPagina from './../Components/TituloPagina.svelte';
  import Slots from "./Slots.svelte"

</script>
  <Slots>
    <main slot="jugadores">
      <TituloPagina contenido="Jugadores" bg_c=" rgb(41, 103, 82)" ai="center" ct="white"  bg_wd="38%"/>
    </main>
  </Slots>

<style>
</style>
