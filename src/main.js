import Vue from "vue";
import App from "./App.vue";
import router from "./router";
// import Vue from 'vue'
import VueMaterial from "vue-material";
import "vue-material/dist/vue-material.min.css";
import VCalendar from "v-calendar";

// Use v-calendar & v-date-picker components
Vue.use(VCalendar, {
  componentPrefix: "vc" // Use <vc-calendar /> instead of <v-calendar />
  // ...other defaults
});
Vue.use(VueMaterial);
Vue.config.productionTip = false;

new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
