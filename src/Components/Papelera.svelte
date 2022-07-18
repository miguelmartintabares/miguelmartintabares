<script>
  import { uploadFile } from "../firebase"
  import { datos } from "./stores"

  const handleSubmit = async () => {
    try {
      const result = await uploadFile($datos, "combos/" + $datos.name)
      console.log(result)
    } catch (error) {
      console.log(error)
      alert("No se puede subir el archivo en este momento...")
    }
  }

</script>
<div>
  <!-- <form on:submit|preventDefault={handleSubmit}> -->
  <input type="file" rows="3" class="form-control" on:change={(e) => ($datos = e.target.files[0])} />
  <button on:click={handleSubmit} class="btn btn-primary btn-sm " disabled={!$datos}>Subir</button>
<!-- </form> -->
</div>


