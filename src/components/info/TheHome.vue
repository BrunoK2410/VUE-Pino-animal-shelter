<template>
  <div class="welcome">
    <h1>ALL THEY NEED IS YOUR LOVE</h1>
    <p>
      Finding the right pet is an easy task. Here at Pino,we do our best to save
      animals and give them the best life until they find their rightful home.
    </p>
    <div class="navigation">
      <router-link to="/dog">Adopt a dog</router-link>
      <router-link to="/cat">Adopt a cat</router-link>
    </div>
  </div>
  <div class="main-content">
    <div class="news">
      <h2>News and Notifications</h2>
      <stored-news></stored-news>
    </div>
    <div class="adoption-tab">
      <div class="dogs">
        <router-link to="/dog"><h2>Dogs</h2></router-link>
        <the-animal
          v-for="dog in slicedDogs"
          :key="dog.id"
          :id="dog.identificator"
          :type="dog.type"
          :image="dog.gallery[0]"
          :name="dog.name"
          :breed="dog.breed"
        ></the-animal>
      </div>
      <div class="cats">
        <router-link to="/cat"><h2>Cats</h2></router-link>
        <the-animal
          v-for="cat in slicedCats"
          :key="cat.id"
          :id="cat.identificator"
          :type="cat.type"
          :image="cat.gallery[0]"
          :name="cat.name"
          :breed="cat.breed"
        ></the-animal>
      </div>
    </div>
  </div>
</template>

<script>
import StoredNews from "../news/StoredNews.vue";
import TheAnimal from "../my-animals/TheAnimal.vue";

export default {
  components: {
    StoredNews,
    TheAnimal,
  },
  inject: ["animals"],
  data() {
    return {
      limitDogs: 4,
      limitCats: 4,
    };
  },
  computed: {
    slicedDogs() {
      const dogs = this.animals.filter((animal) => animal.type === "dog");
      return this.limitDogs ? dogs.slice(0, this.limitDogs) : dogs;
    },
    slicedCats() {
      const cats = this.animals.filter((animal) => animal.type === "cat");
      return this.limitCats ? cats.slice(0, this.limitCats) : cats;
    },
  },
};
</script>

<style scoped>
.welcome {
  background-color: #f2837c;
  color: white;
  font-family: "Open Sans", sans-serif;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.navigation > a {
  background-color: #e84135;
  color: white;
  padding: 10px 10px;
  margin: 4px 12px 12px 0;
  cursor: pointer;
  border-radius: 16px;
  font-size: 20px;
}

.navigation > a:hover {
  background-color: #ec665d;
}

h2 {
  display: flex;
  font-family: "Open Sans", sans-serif;
  color: #e84135;
  margin: 10px 0 10px 20px;
}

.main-content {
  display: flex;
}

.news {
  display: flex;
  flex-direction: column;
  flex-basis: 50%;
  margin-bottom: 30px;
}

.adoption-tab {
  display: flex;

  flex-basis: 50%;
}

.adoption-tab h2 {
  width: max-content;
  border-bottom: 3px solid #e84135;
}

.adoption-tab h2:hover {
  border-color: #ec665d;
}

.dogs,
.cats {
  width: 300px;
}

.dogs > *,
.cats > * {
  margin-bottom: 30px;
  height: auto;
}

.navigation {
  display: flex;
  margin-left: auto;
  margin-right: auto;
}
@media (max-width: 320px), (min-width: 320px) {
  .welcome {
    padding-left: 10px;
    padding-right: 10px;
  }
  h1 {
    margin: 0;
    font-size: 40px;
  }

  .main-content {
    flex-direction: column;
  }

  .adoption-tab {
    flex-direction: column;
    margin-left: auto;
    margin-right: auto;
  }

  .adoption-tab h2 {
    margin-left: 32px;
    margin-bottom: 20px;
  }
}

@media (min-width: 768px) {
  h2 {
    margin: 30px;
  }

  .main-content {
    flex-direction: row;
  }

  .cats {
    margin-right: 30px;
  }

  .dogs {
    margin-left: auto;
    margin-right: 20px;
  }

  .dogs,
  .cats {
    width: 220px;
  }
}

@media (max-width: 425px) {
  h2 {
    justify-content: center;
  }
}

@media (min-width: 600px) {
  .adoption-tab {
    flex-direction: row;
    margin-left: 30px;
  }
  .dogs {
    margin-right: 20px;
  }
}

@media (min-width: 1440px) {
  .cats {
    margin-right: unset;
  }
  .dogs {
    margin-left: unset;
  }
  .adoption-tab {
    margin-left: 200px;
  }
}
</style>
