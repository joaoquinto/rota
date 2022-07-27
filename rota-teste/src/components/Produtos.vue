<template>
  <section class="container_produtos">
    <h1 class="title_produtos">Produtos</h1>
    <ul class="container_itens">
      <li v-for="{ id, nome, img } in produtos" :key="id">
        <div class="container_item">
          <h2 class="title_produto">{{ nome }}</h2>
          <img class="img_produto" :src="img" :alt="nome" />
        </div>
      </li>
    </ul>
  </section>
</template>

<script>
export default {
  name: "produtos-beacon",
  data() {
    return {
      produtos: [
        {
          id: "001",
          nome: "Robô governanta",
          img: "http://adigaskell.org/wp-content/uploads/2018/06/robot-housework.jpg",
        },
        {
          id: "002",
          nome: "Robô de segurança",
          img: "https://images8.alphacoders.com/656/thumb-1920-656329.jpg",
        },
        {
          id: "003",
          nome: "Robô de companhia",
          img: "https://img.olhardigital.com.br/wp-content/uploads/2020/01/20200106070100.jpg",
        },
      ],
    };
  },
};
</script>

<style>
.img_produto {
  display: block;
  max-width: 100%;
  border-radius: 10px;
}
.container_produtos {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 9.8vh 0;
}

.title_produtos {
  font-size: 2.6rem;
  margin-top: 20px;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
}

.container_itens {
  display: flex;
  flex-direction: column;
  width: calc(100% - 20px);
  margin: 10vh 10px;
}

.container_itens li + li {
  margin-top: 30px;
}

.container_item {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px 10px;
  border-radius: 10px;
}

.title_produto {
  color: #000;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  text-align: center;
  margin-bottom: 10px;
}

@media (min-width: 800px) {
  .container_itens {
    flex-direction: row;
    width: 80%;
  }

  .container_itens li {
    flex: 33.3333%;
  }

  .container_itens li + li {
    margin-top: 0px;
    margin-left: 10px;
  }

  .container_item img {
    max-height: 300px;
  }
}
</style>