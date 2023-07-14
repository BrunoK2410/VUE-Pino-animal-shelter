<template>
  <the-header></the-header>
  <the-navbar></the-navbar>
  <router-view></router-view>
  <the-footer></the-footer>
</template>

<script>
import TheHeader from "./components/layouts/TheHeader.vue";
import TheNavbar from "./components/layouts/TheNavbar.vue";
import TheFooter from "./components/layouts/TheFooter.vue";
import axios from "axios";
export default {
  data() {
    return {
      animals: [],
      news: [],
    };
  },
  mounted() {
    this.getAnimals();
    this.getNews();
  },

  methods: {
    getAnimals() {
      axios
        .get(
          "https://vue-animal-shelter-7c71c-default-rtdb.europe-west1.firebasedatabase.app/animals.json"
        )
        .then((response) => {
          console.log(response);
          this.formatAnimals(response.data);
        });
    },
    formatAnimals(anim) {
      for (let key in anim) {
        this.animals.push({ ...anim[key], id: key });
      }
    },
    getNews() {
      axios
        .get(
          "https://vue-animal-shelter-7c71c-default-rtdb.europe-west1.firebasedatabase.app/news.json"
        )
        .then((response) => {
          console.log(response);
          this.formatNews(response.data);
        });
    },
    formatNews(article) {
      for (let key in article) {
        this.news.push({ ...article[key], id: key });
      }
    },
  },
  provide() {
    return {
      animals: this.animals,
      news: this.news,
    };
  },
  components: {
    TheHeader,
    TheNavbar,
    TheFooter,
  },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Open+Sans:ital@1&display=swap");

* {
  box-sizing: border-box;
}

html {
  font-family: "Roboto", sans-serif;
}

body {
  background-image: url(https://cdn.pixabay.com/photo/2020/12/13/15/48/red-5828562_960_720.jpg);
  background-size: cover;
  margin: 0;
}

a {
  text-decoration: none;
}

li {
  list-style: none;
}
</style>
