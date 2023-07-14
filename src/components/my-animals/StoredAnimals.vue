<template>
  <div>
    <the-animal
      v-for="pet in pets"
      :key="pet.id"
      :id="pet.identificator"
      :type="pet.type"
      :image="pet.gallery[0]"
      :name="pet.name"
      :breed="pet.breed"
    ></the-animal>
  </div>
</template>

<script>
import TheAnimal from "./TheAnimal.vue";
export default {
  computed: {
    pets() {
      if (this.$route.path === "/dog") {
        return this.animals.filter((animal) => animal.type === "dog");
      } else {
        return this.animals.filter((animal) => animal.type === "cat");
      }
    },
  },
  components: {
    TheAnimal,
  },
  inject: ["animals"],
};
</script>

<style scoped>
div {
  display: flex;
  flex-wrap: wrap;
  margin: 20px;
}

@media (max-width: 768px) {
  div {
    margin: 0px;
  }
}
</style>
