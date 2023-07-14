<template>
  <base-news-card
    v-for="article in news"
    :key="article.id"
    :id="article.identificator"
    :image="article.image"
    :title="article.title"
    :text="article.text"
  >
  </base-news-card>
</template>

<script>
import BaseNewsCard from "../UI/BaseNewsCard.vue";
export default {
  components: { BaseNewsCard },
  inject: ["news"],
};
</script>
