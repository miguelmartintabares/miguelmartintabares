<script>
  export let bg_c = "blueviolet"
  export let bg_wd = "100%"
  export let ct = "black"
  export let wd = "100%"
  export let hg = "100%"
  export let br = "0px"
  export let ta = "center"
  export let contenido = "text default"
  export let ai = "center"
</script>

<div style="background-color:{bg_c}; 
            width:{bg_wd}; 
            align-content: {ai}; 
            opacity: 0.5 ;
            z-index: 0 ;"
    >
  <h3
    style=" color:{ct};
            width: {wd};
            height:{hg};
            border-radius:{br};
            text-align:{ta};
            z-index: 1 ;"
    >
    {contenido}
  </h3>
</div>
