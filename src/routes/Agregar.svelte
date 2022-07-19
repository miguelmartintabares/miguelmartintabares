<script>
  import { db } from "../firebase"
  import {
    onSnapshot,
    collection,
    addDoc,
    deleteDoc,
    doc,
    updateDoc,
  } from "firebase/firestore"
  import Toastify from "toastify-js"
  import { onDestroy } from "svelte"
  import CompProduct from "../Components/CompProduct.svelte"
  import { uploadFile } from "../firebase"
  import { datos } from "../Components/stores"

  let combo = {
    nombre: "",
    numerocombo: "",
    infocombo: "",
    precio: "",
    img: "",
  }

  let combos = []
  let inputElement
  let spin = false
  let editStatus = false
  let currentId = ""

  const unSub = onSnapshot(
    collection(db, "combos"),
    (querySnapshot) => {
      combos = querySnapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id }))
    },
    (err) => {
      console.error(err)
    }
  )
  const addCombo = async () => {
    try {
      await addDoc(collection(db, "combos"), {
        ...combo,
        createdAt: Date.now(),
      })
      Toastify({ text: "Nuevo combo Creado" }).showToast()
    } catch (error) {
      console.error(error)
    }
  }
  const deleteCombo = async (id) => {
    try {
      await deleteDoc(doc(db, "combos", id))
    } catch (error) {
      console.error(error)
    }
  }
  const editCombo = (currencombo) => {
    currentId = currencombo.id
    combo.nombre = currencombo.nombre
    combo.numerocombo = currencombo.numerocombo
    combo.infocombo = currencombo.infocombo
    combo.precio = currencombo.precio
    combo.img = currencombo.img

    editStatus = true
  }
  const updateCombo = async () => {
    try {
      await updateDoc(doc(db, "combos", currentId), combo)
      Toastify({ text: "Combo Actualizado" }).showToast()
    } catch (error) {
      console.error(error)
    }
  }
  const handleSubmit = () => {
    console.log(combo.img)
    if (!combo.nombre) return
    if (!combo.img) return
    if(!combos)return
    if (!editStatus) {
      addCombo()
    } else {
      updateCombo()
      editStatus = false
      currentId = ""
    }

    combo = {
      nombre: "",
      numerocombo: "",
      infocombo: "",
      precio: "",
      img: "",
    }
    inputElement.focus()
  }

  const onCancel = () => {
    editStatus = false
    currentId = ""
    combo = {
      nombre: "",
      numerocombo: "",
      infocombo: "",
      precio: "",
      img: "",
    }
  }

  const handleLoadImg = async () => {
    try {
      Toastify({ text: "Cargando imagen en servidor" }).showToast()
      spin = true
      const result = await uploadFile($datos, "combos/" + $datos.name)
      combo.img = result
      Toastify({ text: "Imagen cargada" }).showToast()
      console.log(combo.img)
      spin = false
    } catch (error) {
      Toastify({ text: "Error al cargar" }).showToast()
      console.log(error)
      alert("No se puede subir el archivo en este momento...")
    }
  }

  onDestroy(unSub)
</script>

<main>
  <div class="container-md ">
    <div class="row">
      <div class="col-md-4 mt-5">
        <!-- combo Form -->
        <form
          on:submit|preventDefault={handleSubmit}
          class="card card-body p-2"
        >
          <div class="mb-3">
            <label for="nombre" class="fs-5 text-secondary"
              >Ingresar datos del combo</label
            >
            <input
              type="text"
              bind:value={combo.nombre}
              bind:this={inputElement}
              placeholder="Nombre o Titulo"
              class="form-control"
            />
          </div>

          <div class="mb-1">
            <input
              type="number"
              bind:value={combo.numerocombo}
              rows="1"
              placeholder="Numero de Combo"
              class="form-control"
            />
            <textarea
              bind:value={combo.infocombo}
              rows="1"
              placeholder="Info Combo"
              class="form-control"
            />
            <input
              type="number"
              bind:value={combo.precio}
              rows="3"
              placeholder="$ Precio"
              class="form-control"
            />
            <input
              type="file"
              rows="3"
              class="form-control form-control-sm"
              on:change={(e) => ($datos = e.target.files[0])}
            />
            <div>
            <button
              on:click={handleLoadImg}
              class="btn btn-primary btn-sm "
              disabled={!$datos}
              >Subir
              {#if spin}
                <span
                  class="spinner-border spinner-border-sm"
                  role="status"
                  aria-hidden="true"
                />
                Cargando Imagen...
              {/if}
            </button>
        </div>
          </div>

          <div class="mt-2">
            <button class="btn btn-primary btn-sm " disabled={!combo.nombre}>
              <!-- <i class="material-icons">save</i> -->
              <span class="ms-2"
                >{#if !editStatus}Save{:else}Update{/if}</span
              >
            </button>
            <button on:click={onCancel} class="btn btn-info btn-sm"
              >Cancel</button
            >
          </div>
        </form>
      </div>
      <div class="col-md-8">
        <div class="contenedor ">
          {#each combos as combo}
            <div class="edicion">
              <CompProduct product={combo} />
              <div class="botones">
                <button on:click={deleteCombo(combo.id)} class="btn btn-danger"
                  >Borrar</button
                >
                <button
                  class="btn btn-success"
                  style="vertical-align:middle"
                  on:click={editCombo(combo)}>Editar</button
                >
              </div>
            </div>
          {/each}
        </div>
      </div>
    </div>
  </div>

  <!-- Render all combos -->
</main>


<!-- {#each combos as combo}
  <div class="card card-body mt-2">
    <div class="d-flex justify-content-between">
      <h5>{combo.nombre}</h5>
      <button class="material-icons" style="vertical-align:middle" on:click={editCombo(combo)}>Edit</button>
    </div>
    <p>Combo N: {combo.numerocombo}</p>
    <p>Detalle: {combo.infocombo}</p>
    <p>${combo.precio}</p>
    <img src={combo.img} alt={combo.nombre}/>
    <div>
      <button on:click={deleteCombo(combo.id)} class="btn btn-danger">
        <button class="material-icons" style="vertical-align:middle">Delete</button>
        <span style="vertical-align:middle">Delete</span>
      </button>
    </div>
  </div>
  {/each} -->

<!-- TEMPLATE -->
<style>
  main {
    margin-top: 60px;
    display: flex;
    flex-direction: row;
    justify-content: center;
  }
  .contenedor {
    margin: 0px;
    display: grid;
    grid-auto-flow: dense;
    grid-template-columns: repeat(auto-fill, minmax(148px, 1fr));
    justify-items: center;
    gap: 1rem;
  }
  .edicion {
    text-align: center;
  }
  .botones {
    margin: 12px;
  }
  @media screen and (max-width: 480px) {
    .contenedor {
      display: flex;
      flex-direction: column;
    }
  }
</style>
