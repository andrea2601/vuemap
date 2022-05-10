<template>
  <div id="app">
    <div class="mb-1" style="overflow-x: hidden">
      <main>
        <Navigator></Navigator>
        <form>
          <label class="text-white container-fluid" for="select"
            >Seleziona targa</label
          >
          <select
            id="select"
            class="form-select"
            aria-label="Default select example"
            v-model= "targa"
            v-on:change= "setResults"
          >
          <option v-for= "(item, key) in cars.total" :key= "key" :value= "item.targa">{{item.targa}} - {{item.marca}} {{item.modello}}</option>
          
          </select>
        </form>

        <Car v-if="v == 1" :auto="data"></Car>
      </main>
    </div>
    <div class="row">
       <GoogleMap :latitude= "lat" :longitude= "lng" :title= "targa"  :key= "componentKey" />
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
      componentsKey: 0
    };
  },

  methods: {
     forceRerender() {
      this.componentKey += 1;  
    },
    setResults() {
      console.log("Set results");

      console.log("CARS:");
      console.log(this.cars);

      console.log("Targa:");
      console.log(this.targa);

      for (this.i = 0; this.i < this.cars.total.length; this.i++) {
        if (this.cars.total[this.i].targa == this.targa) {
          //this.data[0] = this.cars.total[this.i];
          this.data.splice(0, 1, this.cars.total[this.i]);
        }
      }
      console.log('data:');
      console.log(this.data[0]);
      this.v = 1;
      console.log("v=1");

      console.log("assegno lat e long");
      
        this.lat= this.data[0].dispositivo_default[0].posizioni.ultima.lat,
       this.lng= this.data[0].dispositivo_default[0].posizioni.ultima.lng,
      
      console.log(this.lat);
      console.log(this.lng);
       this.forceRerender();
    },
  },
};
</script>

