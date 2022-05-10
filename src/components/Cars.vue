<template>
  <div>
    <table class="table table-borderless mb-3 ">
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
          <td>{{ auto[0].dispositivo_default[0].posizioni.ultima.via }}</td>
          <td>
            {{ auto[0].dispositivo_default[0].posizioni.ultima.send_time }}
          </td>
        </tr>
      </tbody>
    </table>
    <!-- <div class="row">
       <GoogleMap :latitude= "lat" :longitude= "lng" :title= "targa" />
    </div> -->
  </div>
</template>

<script>
//import GoogleMap from "./Map.vue";

export default {
  components: {
    //GoogleMap
    },
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