<script>

export let spinner = false

console.log("spiner ")


</script>

{#if spinner}
    <div class="spinn">
    </div>
{/if}

<style>
.spinn{

    position: fixed;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    display: grid;
    place-items: center;
    /* background-color: white; */
    z-index: 9999;
    transition: 1s;

    border: 8px solid rgba(0,0,0,0.1);
    width:60px ;
    height: 60px;
    border-radius:50%;
    border-left-color: #00c200;
    animation: spinnerA 0.5s linear infinite;
  }

  @keyframes spinnerA{
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
  </style>