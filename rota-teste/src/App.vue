<template>
  <div id="app">
    <header-vue></header-vue>
    <router-view></router-view>
    <footer-vue></footer-vue>
  </div>
</template>

<script>
import FooterVue from "./components/Footer.vue";
import HeaderVue from "./components/Header.vue";

export default {
  name: "App",
  components: {
    HeaderVue,
    FooterVue,
  },
};
</script>

<style>
</style>
