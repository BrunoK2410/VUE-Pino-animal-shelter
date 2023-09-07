export default {
  news(state) {
    return state.news;
  },
  hasNews(state) {
    return state.news && state.news.length > 0;
  },
};
