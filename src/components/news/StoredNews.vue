<template>
  <base-dialog :show="!!error" title="An error occurred!" @close="handleError">
    <p>{{ error }}</p>
  </base-dialog>
  <div v-if="isLoading">
    <base-spinner></base-spinner>
  </div>
  <base-news-card
    v-else-if="hasNews"
    v-for="article in news"
    :key="article.id"
    :image="article.image"
    :title="article.title"
    :text="article.text"
  >
  </base-news-card>
  <h3 v-else>No news found.</h3>
</template>

<script>
import BaseNewsCard from "../UI/BaseNewsCard.vue";
export default {
  components: { BaseNewsCard },
  data() {
    return {
      isLoading: false,
      error: null,
    };
  },
  computed: {
    news() {
      return this.$store.getters["news/news"];
    },
    hasNews() {
      return !this.isLoading && this.$store.getters["news/hasNews"];
    },
  },
  methods: {
    async loadNews() {
      this.isLoading = true;
      try {
        await this.$store.dispatch("news/loadNews");
      } catch (error) {
        this.error = error.message || "Something failed";
      }
      this.isLoading = false;
    },
    handleError() {
      this.error = null;
    },
  },
  created() {
    this.loadNews();
  },
};
</script>
