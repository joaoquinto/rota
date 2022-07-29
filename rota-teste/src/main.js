import Vue from "vue";
import App from "./App.vue";
/* Importando o arquivo router.js */
import router from "./router";

Vue.config.productionTip = false;

new Vue({
  /* Fazendo o router ser montado antes da renderização */
  router,
  render: (h) => h(App),
}).$mount("#app");
