<template>
  <the-header></the-header>
  <the-navbar></the-navbar>
  <router-view v-slot="slotProps">
    <transition name="route" mode="out-in" >
      <component :is="slotProps.Component"></component>
    </transition>
  </router-view>
  <the-footer></the-footer>
</template>

<script>
import TheHeader from "./components/layouts/TheHeader.vue";
import TheNavbar from "./components/layouts/TheNavbar.vue";
import TheFooter from "./components/layouts/TheFooter.vue";
export default {
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

.route-enter-from {
  opacity: 0;
  transform: translateY(30px);
}
.route-leave-to {
  opacity: 0;
  transform: translateY(30px);
}
.route-enter-active {
  transition: all 1s ease-out;
}
.route-leave-active {
  transition: all 0.3s ease-in;
}
.route-enter-to,
.route-leave-from {
  opacity: 1;
  transform: translateY(0);
}
</style>
