<template>
  <main>
    <div class="container_apresentacao">
      <h1 class="title_apresentacao">Beacon</h1>
      <p class="comprimento_apresentacao">Seja bem vindo!</p>
    </div>
  </main>
</template>

<script>
export default {
  name: "home-beacon",
};
</script>

<style>
main {
  background: url(../assets/thumb-1920-124542.jpg);
  height: 90vh;
  background-repeat: no-repeat;
  background-size: cover;
  background-position-x: center;
}

.container_apresentacao {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 300px;
  height: 200px;
  background: rgb(0 0 1 / 85%);
  color: #fff;
  position: relative;
  top: 30vh;
  margin: 0 auto;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
}

.title_apresentacao {
  text-transform: uppercase;
  margin-bottom: 10px;
}

.comprimento_apresentacao {
  font-size: 0.9rem;
}
</style>