/* Importando vue */
import Vue from "vue";
/* importando vue router */
import Router from "vue-router";
/* importando componentes */
import HomeVue from "./components/Home.vue";
import SobreVue from "./components/Sobre.vue";
import ProdutosVue from "./components/Produtos.vue";
import ContatosVue from "./components/Contatos.vue";

/* Declarando na instância que o vue router vai ser utilzado */
Vue.use(Router);

/* Declarando as rotas */
const routers = [
  /*
   * Utilizando dynamic route
   * syntax:
   * /users/:username	Nomeando a rota e o param
   * /users/eduardo Rececendo parm
   * Esse param vai ser encontrado em $route.params  { username: 'eduardo' }
   */
  { path: "/:bgColor", component: HomeVue },
  { path: "/sobre/:bgColor", component: SobreVue },
  { path: "/produtos/:bgColor", component: ProdutosVue },
  { path: "/contatos", component: ContatosVue },
];

/* exportando a instância do vue router */
export default new Router({
  mode: "history",
  /* Informando as rotas para a instância */
  routes: routers,
});
