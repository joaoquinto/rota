<template>
  <header class="container_header" :style="{ backgroundColor: background }">
    <router-link class="logo_header" to="/9acd32">Beacon</router-link>
    <nav>
      <ul class="container__links">
        <li><router-link to="/9acd32">Inicio</router-link></li>
        <li><router-link to="/sobre/1a243c">Sobre</router-link></li>
        <li><router-link to="/produtos/216297">Produtos</router-link></li>
      </ul>
    </nav>
  </header>
</template>

<script>
export default {
  name: "header-beacon",
  computed: {
    background() {
      return `#${this.$route.params.bgColor}`;
    },
  },
};
</script>

<style>
* {
  list-style: none;
  box-sizing: border-box;
  padding: 0;
  margin: 0;
}

.container_header {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 20px 0;
  background-color: yellowgreen;
}

.container_header a {
  text-decoration: none;
  color: #000;
}

a.logo_header {
  text-transform: uppercase;
  color: #fff;
  font-weight: bold;
  font-family: "Lucida Sans", "Lucida Sans Regular", "Lucida Grande",
    "Lucida Sans Unicode", Geneva, Verdana, sans-serif;
  cursor: pointer;
}

.container__links {
  display: flex;
  flex-direction: column;
  text-align: center;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
}

.container__links li {
  padding: 8px;
  background: tomato;
  cursor: pointer;
  font-weight: bold;
  border-radius: 20px;
  transition: background 0.4s;
}

.container__links li + li {
  margin-top: 10px;
}

.container__links li {
  background: #fff;
}

@media (min-width: 800px) {
  .container_header {
    flex-direction: row;
    align-items: baseline;
    justify-content: space-between;
    padding: 10px 10px 20px 10px;
  }

  .logo_header {
    margin-bottom: 0;
  }

  .container__links {
    flex-direction: row;
    align-items: baseline;
  }

  .container__links li + li {
    margin-left: 10px;
  }
}
</style>