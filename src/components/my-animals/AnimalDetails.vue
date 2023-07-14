<template>
  <div class="container">
    <div class="gallery">
      <img v-for="i in [currentIndex]" :key="i" :src="currentImage" />
      <a class="prev" @click="prev">&#10094;</a>
      <a class="next" @click="next">&#10095;</a>
    </div>
    <div class="information">
      <ul>
        <li>Name: {{ pet?.name }}</li>
        <li>Birthday: {{ pet?.birthday }}</li>
        <li>Sex: {{ pet?.sex }}</li>
        <li>Breed: {{ pet?.breed }}</li>
        <li>Microchip: {{ pet?.microchip }}</li>
        <li>Treatment: {{ pet?.treatment }}</li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  inject: ["animals"],

  data() {
    return {
      currentIndex: 0,
      images: [],
    };
  },

  methods: {
    next() {
      this.currentIndex += 1;
    },
    prev() {
      this.currentIndex -= 1;
    },
  },
  computed: {
    currentImage() {
      return this.pet?.gallery[
        Math.abs(this.currentIndex) % this.pet?.gallery.length
      ];
    },
    pet() {
      const animalId = this.$route.params.animalId;
      const selectedAnimal = this.animals.find(
        (animal) => animal.identificator === animalId
      );
      return selectedAnimal;
    },
  },
};
</script>

<style scoped>
.prev,
.next {
  cursor: pointer;
  position: absolute;
  top: 50%;
  width: auto;
  margin-top: -22px;
  padding: 8px;
  color: #e84135;
  font-weight: bold;
  font-size: 18px;
  transition: 0.6s ease;
  border-radius: 0 3px 3px 0;
  user-select: none;
}

.prev:hover,
.next:hover {
  background-color: rgba(0, 0, 0, 0.8);
}
.next {
  right: 0;
  border-radius: 3px 0 0 3px;
}

.container {
  display: flex;
}
.gallery {
  display: flex;
  margin: 50px 20px 50px auto;
  position: relative;
}

.gallery img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: 50% 30%;
}

.information {
  background-color: #e84135;
  border-radius: 5px;
  border: solid;
  margin-top: 50px;
  margin-right: auto;
  width: 400px;
  height: fit-content;
}

ul {
  font-size: 16px;
}

li {
  list-style: square;
  margin: 20px 0;
  color: white;
}

@media (max-width: 768px) {
  .container {
    flex-direction: column;
  }

  .gallery {
    margin: 20px auto 0px auto;
  }

  .information {
    margin: 20px 10px 20px 10px;
    width: unset;
  }
}

@media (max-width: 320px) {
  .gallery {
    margin-left: 10px;
  }
}

@media (max-width: 375px) {
  .gallery {
    width: 300px;
    height: 225px;
  }
  .information {
    width: fit-content;
  }
}

@media (min-width: 375px) {
  .gallery {
    width: 350px;
    height: 262px;
  }
}

@media (min-width: 425px) {
  .gallery {
    width: 400px;
    height: 300px;
  }
}

@media (min-width: 600px) {
  .gallery {
    width: 580px;
    height: 435px;
  }
}

@media (min-width: 768px) {
  .gallery {
    width: 100%;
    height: 350px;
    margin: 20px 10px 20px 10px;
  }
  .container {
    flex-direction: row;
  }

  .information {
    width: 100%;
    margin: 20px 20px 20px 10px;
  }
}

@media (min-width: 896px) {
  .gallery {
    width: 580px;
    height: 435px;
  }
  .information {
    width: unset;
  }
}

@media (min-width: 1024px) {
  .gallery {
    width: 630px;
    height: 470px;
  }
  .information {
    width: 500px;
  }

  ul {
    font-size: 18px;
  }
}

@media (min-width: 1440px) {
  .gallery {
    width: 800px;
    height: 600px;
    margin: 50px 20px 50px 50px;
  }

  .information {
    width: 500px;
    margin: 50px 50px 0 0;
  }
  .prev,
  .next {
    padding: 18px;
    font-size: 25px;
  }
}
</style>
