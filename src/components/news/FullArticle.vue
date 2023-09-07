<template>
  <base-text-card>
    <img :src="article?.image" />
    <h1>{{ article?.title }}</h1>
    <p>{{ article?.text }}</p>
  </base-text-card>
</template>
<script>
export default {
  computed: {
    article() {
      const articleId = this.$route.params.articleId.split("-").join(" ");
      console.log(articleId);
      const selectedArticle = this.$store.getters["news/news"].find(
        (art) => art.title.toLowerCase() === articleId
      );
      return selectedArticle;
    },
  },
  created() {
    this.$store.dispatch("news/loadNews");
  },
};
</script>

<style scoped>
img {
  border-top-left-radius: 21px;
  border-top-right-radius: 21px;
}
p {
  line-height: 30px;
}
</style>
