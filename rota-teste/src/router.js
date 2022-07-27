import Vue from "vue";
import Router from "vue-router";
import HomeVue from "./components/Home.vue";
import SobreVue from "./components/Sobre.vue";
import ProdutosVue from "./components/Produtos.vue";
import ContatosVue from "./components/Contatos.vue";

Vue.use(Router);

export default new Router({
  mode: "history",
  routes: [
    { path: "/", component: HomeVue },
    { path: "/sobre", component: SobreVue },
    { path: "/produtos", component: ProdutosVue },
    { path: "/contatos", component: ContatosVue },
  ],
});
