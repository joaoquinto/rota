<template>
  <section class="container_sobre">
    <div class="sobre">
      <h1 class="title_sobre">Sobre</h1>
      <p class="conteudo_sobre">
        A <strong>beacon</strong> é uma empresa que vende
        <strong>robôs</strong>, para o uso cotidiano e nós temos a honra de
        poder entrar na sua casa e entregar o que há de melhor no ramo!
      </p>
      <a href="mailto:beacon@gmail.com" class="call_to_action"
        >beacon@gmail.com</a
      >
    </div>
  </section>
</template>

<script>
export default {
  name: "sobre-beacon",
};
</script>

<style>
.container_sobre {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  background: url(../assets/thumb-1920-115817.jpg);
  height: 90vh;
  background-repeat: no-repeat;
  background-size: cover;
  background-position-x: center;
}

.sobre {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 300px;
  background: rgb(0 0 1 / 85%);
  padding: 20px 10px;
  color: #fff;
  position: relative;
  top: 30vh;
  margin: 0 auto;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
}

.title_sobre {
  text-transform: uppercase;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  font-size: 2rem;
  margin-bottom: 20px;
}

.conteudo_sobre {
  display: block;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  width: calc(100% - 20px);
  margin: 0 10px;
  line-height: 1.5;
  margin-bottom: 20px;
}

.container_sobre .call_to_action {
  padding: 10px;
  background: tomato;
  cursor: pointer;
  border-radius: 20px;
  text-decoration: none;
  color: #fff;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  transition: color 0.2s;
}

.container_sobre .call_to_action:hover {
  color: #000;
}
</style>