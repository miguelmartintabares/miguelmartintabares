<script>
  export let isUserLogin, user
</script>

<div class="container">
 
    {#if isUserLogin}
      <img src={user.photoURL} alt={user.displayName} class="avatar-perfil" />
      <spam>{user.displayName}</spam>
      <!-- <p>{$user.email}</p> -->
    {/if}
 
</div>

<style>
  .container {
    display: flex;
    flex-direction: row;
    align-items: center;
    width: 250px;
    margin: 0;
  }
  .avatar-perfil {
    margin: 5px;
    width: 30px;
    border-radius: 50%;
  }
  spam {
    font-size: small;
    color: rgb(212, 212, 212);
  }

  @media screen and (max-width: 480px){

  }
</style>
