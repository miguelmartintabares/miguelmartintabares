<script>


  let archivoUrl
  let docus ={}

  const archivoHandler = async (e)=> {

    const archivo = e.target.files[0];
    const storageRef = app.storage().ref();
    const archivoPath = storageRef.child(archivo.name);
    await archivoPath.put(archivo);
    console.log("archivo cargado:",archivo.name);
    const enlaceUrl = await archivoPath.getDownloadURL();
    archivoUrl=enlaceUrl

  }

  const submitHandler = async (e)=> {
    e.preventDefault()
    const nombreArchivo = e.target.nombre.value;
    if (!nombreArchivo) {
    alert("coloca un nombre")
    return
    }
    
    const coleccionRef =  app.firestore().collection("combos");
    const docu = await coleccionRef.doc(nombreArchivo).set({nombre: nombreArchivo, url: archivoUrl});
    console.log("archivo cargado:", nombreArchivo, "ulr:", archivoUrl);
    window.location="/"
  }

  const leeColeccion= async ()=>{
    const docusList = await app.firestore().collection("combos").get();
    docus=docusList.docs.map((doc)=> doc.data())
  }

</script>


    <form onSubmit={submitHandler}  >
      <input type="file" onChange={archivoHandler} />
      <input type="text" name="nombre" placeholder="nombra tu archivo" />
      <button>Enviar </button>
       </form>
       <ul>
        {#each docus as doc}
            <li>
                <h3>{doc.nombre}</h3>
                <img src={doc.url} height="100px" width="100px" alt="imagen"/>
            </li>
        {/each}
       </ul>


