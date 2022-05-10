import Vue from 'vue'
import App from './App.vue'
import 'bootstrap/dist/css/bootstrap.min.css'
import * as VueGoogleMaps from "vue2-google-maps";

Vue.config.productionTip = false

Vue.use(VueGoogleMaps, {
  load: {
    key: "AIzaSyANjda32vvSC7dccZwIPzrATUJwQ3hzFkM",
    libraries: 'places'
  },
});

new Vue({
  render: h => h(App),
}).$mount('#app')
