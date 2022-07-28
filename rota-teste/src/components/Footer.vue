<template>
  <footer :style="{ backgroundColor: background }">
    <p>
      Todos os direitos reservados a
      <router-link to="/"><strong>Beacon</strong></router-link>
    </p>
  </footer>
</template>

<script>
export default {
  name: "footer-beacon",
  computed: {
    background() {
      return `#${this.$route.params.bgColor}`;
    },
  },
};
</script>

<style>
footer {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 20px 0;
}

footer p {
  font-family: sans-serif;
  font-size: 0.9rem;
}

footer a {
  color: #000;
  text-decoration: none;
}
</style>