<template>
  <div id="app" class="bg-dark" style="overflow-x: hidden">
    <div class="mb-1" style="overflow-x: hidden;">
      <main>

        <Navigator></Navigator>

        <label class="container-fluid text-white display-5" for="select"
          >Seleziona targa</label
        >
        <select
          id="select"
          class="form-select"
          aria-label="Default select example"
          v-model="targa"
          v-on:change="setResults"
        >
          <option
            v-for="(item, key) in cars.total"
            :key="key"
            :value="item.targa"
          >
            {{ item.targa }} - {{ item.marca }} {{ item.modello }}
          </option>
        </select>

        <Car v-if="v == 1" :auto="data"></Car>
      </main>
    </div>
    <div class="row">
      <GoogleMap
        :latitude="lat"
        :longitude="lng"
        :title="targa"
        :key="componentKey"
      />
    </div>
  </div>
</template>

<script>
import GoogleMap from "./components/Map.vue";
import Car from "./components/Cars.vue";
import json from "./positions.json";
import Navigator from "./components/Navigator.vue";

export default {
  name: "App",
  components: {
    GoogleMap,
    Car,
    Navigator,
  },
  data() {
    return {
      cars: json,
      v: 0,
      i: 0,
      targa: "",
      data: [],
      lat: 13.7013266,
      lng: 35.05434,
      componentsKey: 0,
    };
  },

  methods: {
    forceRerender() {
      this.componentKey += 1;
    },
    setResults() {
    
      for (this.i = 0; this.i < this.cars.total.length; this.i++) {
        if (this.cars.total[this.i].targa == this.targa) {
          this.data.splice(0, 1, this.cars.total[this.i]);
        }
      }
      
      this.v = 1;

      this.lat = this.data[0].dispositivo_default[0].posizioni.ultima.lat
      this.lng = this.data[0].dispositivo_default[0].posizioni.ultima.lng
        
      this.forceRerender();
    },
  },
};
</script>
<style>
  .display-5{
    font-size: calc(1.425rem + 2.1vw) !important;
  }
  @media (min-width:1366px) {
  select {
    height: 40px !important;
    font-size: 20px !important;
  }
  select option {
    height: 60px !important;
    font-size: 18px !important;
  }
}
  @media (min-width:1920px) {
  select {
    height: 60px !important;
    font-size: 30px !important;
  }
  select option {
    height: 60px !important;
    font-size: 15px !important;
  }
}
</style>

