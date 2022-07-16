<script></script>

<div>
  <slot name="card">
  </slot>
</div>

<div>
  <slot name="jugador">
    <span class="card-jugadores">slot productos colocado</span>
  </slot>
</div>

<!-- <div>
  <slot name="producto">
    <span class="missing">slot producto colocado</span>
  </slot>
</div> -->

<style>
  .card-jugadores {
    font-size: 20px;
    color: #999;
  }
</style>
