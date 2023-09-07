<template>
  <base-animal-card>
    <template #card>
      <img :src="image" />
    </template>
    <template #info>
      <h1>{{ name }}</h1>
      <h2>{{ breed }}</h2>
      <router-link :to="readMoreLink"
        ><base-button>Read more</base-button></router-link
      >
    </template>
  </base-animal-card>
</template>

<script>
import BaseAnimalCard from "../UI/BaseAnimalCard.vue";
export default {
  components: {
    BaseAnimalCard,
  },
  props: ["id", "type", "image", "name", "breed"],
  computed: {
    readMoreLink() {
      return "/" + this.type + "/" + this.name.toLowerCase();
    },
  },
};
</script>

<style scoped>
img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  position: absolute;
  top: 0;
  left: 0;
  border-radius: 15px;
}
h1,
h2 {
  color: white;
  margin: 0px;
}
h1 {
  font-size: 30px;
}
h2 {
  font-size: 18px;
}
</style>
