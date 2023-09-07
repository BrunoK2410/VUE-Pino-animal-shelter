import { createRouter, createWebHistory } from "vue-router";
import FullArticle from "./components/news/FullArticle.vue";
import TheAbout from "./components/info/TheAbout.vue";
import TheContact from "./components/info/TheContact.vue";
import StoredAnimals from "./components/my-animals/StoredAnimals.vue";
import AnimalDetails from "./components/my-animals/AnimalDetails.vue";
import TheHome from "./components/info/TheHome.vue";
import TheNotFound from "./components/layouts/TheNotFound.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: "/", redirect: "/home" },
    { path: "/about", component: TheAbout },
    { path: "/contact", component: TheContact },
    { path: "/home", component: TheHome },
    { path: "/home/:articleId", props: true, component: FullArticle },
    { path: "/dog", component: StoredAnimals },
    { path: "/dog/:animalId", component: AnimalDetails },
    { path: "/cat", component: StoredAnimals },
    { path: "/cat/:animalId", component: AnimalDetails },
    { path: "/:notFound(.*)", component: TheNotFound },
  ],
  scrollBehavior(to, from, savedPosition) {
    console.log(to, from, savedPosition);
    if (savedPosition) {
      return savedPosition;
    }
    return { left: 0, top: 0 };
  },
});

export default router;
