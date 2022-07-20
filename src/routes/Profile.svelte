<script>
  export let isUserLogin, user

  import imgAvatar from "../img/no-picture-available-icon-1.jpg"

console.log(user.photoURL)
</script>

<div class="container">
  {#if isUserLogin}
    {#if !user.photoURL}
      <spam> <strong>Usuario </strong> </spam>
      <img src={imgAvatar} alt="" class="avatar-perfil" />
      <spam> {user.displayName} </spam>
    {:else}
      <spam> <strong>Usuario </strong> </spam>
      <img src={user.photoURL} alt="" class="avatar-perfil" />
      <spam> {user.displayName} </spam>
    {/if}
  {/if}
</div>

<style>
  .container {
    display: flex;
    flex-direction: row;
    align-items: center;
    width: auto;
    margin: 0;
  }
  .avatar-perfil {
    margin: 2px;
    width: 30px;
    height: 30px;
    border-radius: 50%;
  }
  spam {
    font-size: small;
    color: rgb(212, 212, 212);
  }

  @media screen and (max-width: 480px) {
  }
</style>
