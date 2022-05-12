<template>
  <div>
    <div class="full-table">
      <table class="table table-borderless table-striped table-dark mb-1">
        <thead>
          <tr>
            <th scope="col">Targa</th>
            <th scope="col">Marca</th>
            <th scope="col">Modello</th>
            <th scope="col">Colore</th>
            <th scope="col">Ultima Posizione</th>
            <th scope="col">Ora Ultima Pos.</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{{ auto[0].targa }}</td>
            <td>{{ auto[0].marca }}</td>
            <td>{{ auto[0].modello }}</td>
            <td>{{ auto[0].colore }}</td>
            <td>
              Via {{ auto[0].dispositivo_default[0].posizioni.ultima.via }}
            </td>
            <td>
              {{ auto[0].dispositivo_default[0].posizioni.ultima.send_time }}
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <div class="short-table">
      <table class="table table-borderless table-striped table-dark mb-1">
        <tbody>
          <tr>
            <th scope="row">Targa</th>
            <td>{{ auto[0].targa }}</td>
          </tr>
          <tr>
            <th scope="row">Marca</th>
            <td>{{ auto[0].marca }}</td>
          </tr>
          <tr>
            <th scope="row">Modello</th>
            <td>{{ auto[0].modello }}</td>
          </tr>
          <tr>
            <th scope="row">Colore</th>
            <td>{{ auto[0].colore }}</td>
          </tr>
          <tr>
            <th scope="row">Ultima Posizione</th>
            <td>Via {{ auto[0].dispositivo_default[0].posizioni.ultima.via }}</td>
          </tr>
          <tr>
            <th scope="row">Ora Ultima Posizione</th>
            <td>{{ auto[0].dispositivo_default[0].posizioni.ultima.send_time }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    auto: {
      type: Array,
      reqired: true,
    },
  },
  data() {
    return {
      lat: this.auto[0].dispositivo_default[0].posizioni.ultima.lat,
      lng: this.auto[0].dispositivo_default[0].posizioni.ultima.lng,
      targa: this.auto[0].targa,
    };
  },
};
</script>
<style>
.short-table {
  display: none;
}

@media only screen and (orientation: portrait) {
  .short-table {
    display: flex;
  }
  .full-table {
    display: none;
  }
}
@media (min-width:1366px) {
  .full-table {
    font-size: 20px;
  }
}
@media (min-width:1920px) {
  .full-table {
    font-size: 25px;
  }
}
</style>