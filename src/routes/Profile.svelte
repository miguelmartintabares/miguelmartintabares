<script>
  import { isUserLogin, user } from "./../Components/stores.js"
</script>

<div class="container">
  <div>
    {#if $isUserLogin}
      <img src={$user.photoURL} alt={$user.displayName} class="avatar-perfil" />
      <spam>{$user.displayName}</spam>
      <!-- <p>{$user.email}</p> -->
    {/if}
  </div>
</div>

<style>
  .container {
    width:250px;
    margin: 0;
  }
  .avatar-perfil {
    width: 30px;
    border-radius: 50%;
  }
  spam{
    font-size: small;
    color: rgb(212, 212, 212);
  }
</style>
