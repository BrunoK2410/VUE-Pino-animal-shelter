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
  <button :class="{ show: isShown }" @click="backToTop">
    <font-awesome-icon icon="fa-solid fa-arrow-up" size="xl" beat />
  </button>
</template>

<script>
import TheAnimal from "./TheAnimal.vue";
export default {
  data() {
    return {
      isShown: false,
    };
  },
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
  methods: {
    handleScroll() {
      if (
        document.body.scrollTop > 200 ||
        document.documentElement.scrollTop > 200
      ) {
        this.isShown = true;
      } else {
        this.isShown = false;
      }
    },
    backToTop() {
      window.scrollTo({ top: 0, behavior: "smooth" });
    },
  },
  mounted() {
    window.addEventListener("scroll", this.handleScroll);
  },
};
</script>

<style scoped>
div {
  display: flex;
  flex-wrap: wrap;
  margin: 20px;
}

button {
  background-color: #e84135;
  border: none;
  padding: 20px;
  border-radius: 50%;
  position: fixed;
  bottom: 125px;
  right: 60px;
  z-index: 999;
  cursor: pointer;
  display: none;
}

.show {
  display: block;
}

button:hover {
  color: white;
}

@media (max-width: 768px) {
  div {
    margin: 0px;
  }
}
</style>
