/* eslint-disable */

import Vue from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";

window.axios = require('axios');
window.$ = require('jquery');
window.jQuery = require('jquery');

Vue.config.productionTip = false;

new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
