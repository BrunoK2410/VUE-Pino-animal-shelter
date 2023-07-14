<template>
  <base-text-card>
    <img :src="article?.image" />
    <h1>{{ article?.title }}</h1>
    <p>{{ article?.text }}</p>
  </base-text-card>
</template>
<script>
export default {
  inject: ["news"],
  computed: {
    article() {
      const articleId = this.$route.params.articleId;
      const selectedArticle = this.news.find(
        (article) => article.identificator === articleId
      );
      return selectedArticle;
    },
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
