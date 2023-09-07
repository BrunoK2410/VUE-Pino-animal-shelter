<template>
  <div>
    <div v-if="isLoading">
      <base-spinner></base-spinner>
    </div>
    <div class="animal-wrapper" v-else-if="hasAnimals">
      <transition-group name="animals">
        <the-animal
          v-for="animal in animals"
          :key="animal.id"
          :type="animal.type"
          :image="animal.gallery[0]"
          :name="animal.name"
          :breed="animal.breed"
        ></the-animal>
      </transition-group>
    </div>
    <h3 v-else>No {{ filterText }} for adoption currently.</h3>
    <button :class="{ show: isShown }" @click="backToTop">
      <font-awesome-icon icon="fa-solid fa-arrow-up" size="xl" beat />
    </button>
  </div>
</template>

<script>
import TheAnimal from "./TheAnimal.vue";
export default {
  data() {
    return {
      isShown: false,
      isLoading: false,
      error: null,
    };
  },
  computed: {
    animals() {
      if (this.$route.path === "/dog") {
        return this.$store.getters["animals/dogs"];
      } else {
        return this.$store.getters["animals/cats"];
      }
    },
    hasAnimals() {
      return !this.isLoading && this.$store.getters["animals/hasAnimals"];
    },
    filterText() {
      if (this.$route.path === "/dog") {
        return "dogs";
      } else {
        return "cats";
      }
    },
  },
  components: {
    TheAnimal,
  },
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
    async loadAnimals() {
      this.isLoading = true;
      try {
        await this.$store.dispatch("animals/loadAnimals");
      } catch (error) {
        this.error = error.message || "Something failed";
      }
      this.isLoading = false;
    },
  },
  created() {
    this.loadAnimals();
    window.addEventListener("scroll", this.handleScroll);
  },
};
</script>

<style scoped>
.animal-wrapper {
  display: flex;
  flex-wrap: wrap;
  margin: 10px;
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

.animals-enter-from {
  transform: translateY(-30px);
}
.animals-leave-to {
  opacity:0;
  transform: translateY(30px);
}
.animals-enter-active,
.animals-leave-active .animals-move {
  opacity: 0;
  transition: all 0.5s ease-out;
}
</style>
