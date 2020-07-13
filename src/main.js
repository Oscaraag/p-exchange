import Vue from "vue";
import App from "./App.vue";
import "@/assets/css/tailwind.css";
import Chartkick from "vue-chartkick";
import { VueSpinners } from "@saeris/vue-spinners";
import Chart from "chart.js";

import { percentFilter } from "@/filters";
import { dolarFilter } from "@/filters";
import router from "@/router";

Vue.config.productionTip = false;
Vue.filter("dollar", dolarFilter);
Vue.filter("percent", percentFilter);
Vue.use(VueSpinners);
Vue.use(Chartkick.use(Chart));

new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
