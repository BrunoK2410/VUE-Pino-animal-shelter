<template>
  <div class="card">
    <router-link :to="readMoreLink">
      <img :src="image" />
      <h3>{{ title }}</h3>
      <p>{{ text }}</p>
    </router-link>
  </div>
</template>

<script>
export default {
  props: ["id", "image", "title", "text"],
  computed: {
    readMoreLink() {
      return "/home" + "/" + this.id;
    },
  },
};
</script>

<style scoped>
.card {
  border-bottom: 2px solid;
  margin-bottom: 30px;
}
img {
  width: 100%;
}

p {
  overflow: hidden;
  width: 100%;
  display: -webkit-box;
  -webkit-line-clamp: 4;
  -webkit-box-orient: vertical;
}

a {
  color: inherit;
}

@media (max-width: 768px) {
  .card {
    margin: 10px 20px 0 20px;
    width: auto;
  }
}

@media (min-width: 425px), (max-width: 768) {
  img {
    width: 385px;
  }
}

@media (min-width: 768px) {
  .card {
    margin: 10px 0 0 30px;
  }
  img {
    width: 200px;
  }
}
</style>
