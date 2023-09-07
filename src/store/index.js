import { createStore } from "vuex";
import animalsModule from "./modules/animals/index.js";
import newsModule from "./modules/news/index.js";

const store = createStore({
  modules: {
    animals: animalsModule,
    news: newsModule,
  },
});

export default store;
