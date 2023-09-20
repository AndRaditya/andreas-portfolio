<template>
  <div>
    <v-toolbar
      height="100vh"
      max-width="100%"
      elevation="0"
      class="mb-6 pt-2 navigation__toolbar"
      :class="{ 'open-navigation__toolbar': drawer }"
    >
      <div class="navbar-container pa-0">
        <navigation-bar-mobile :drawer="drawer" />

        <div
          class="navigation__bar"
          :class="{ 'open-navigation__bar': drawer }"
          elevation="0"
        >
          <div class="navigation__bar--1">
            <p class="text__header--title">Andreas</p>
          </div>
          <div class="navigation__bar--2">
            <div class="navigation__bar--2__child-1">
              <span class="text__header--subtitle">
                <a
                  href="https://www.linkedin.com/in/andreas-raditya/"
                  target="_blank"
                  class="text__header--link"
                  >LinkedIn</a
                >
              </span>
            </div>
            <div class="navigation__bar--2__child-2">
              <span class="text__header--subtitle"
                ><a
                  href="https://github.com/AndRaditya"
                  target="_blank"
                  class="text__header--link"
                  >GitHub</a
                ></span
              >
            </div>
            <div class="navigation__bar--2__child-3">
              <span class="text__header--subtitle">
                <a
                  href="mailto:raditya.aryatama@gmail.com"
                  class="text__header--link"
                  target="_blank"
                  >Email</a
                ></span
              >
            </div>
          </div>

          <div class="navigation__bar-mobile">
            <span
              class="material-symbols-outlined"
              @click.stop="drawer = !drawer"
            >
              menu
            </span>
          </div>

          <div class="navigation__bar--mobile-menu"></div>
        </div>
      </div>
    </v-toolbar>
  </div>
</template>

<script>
import NavigationBarMobile from "./NavigationBarMobile.vue";

export default {
  name: "NavigationBar",
  components: {
    NavigationBarMobile,
  },
  data() {
    return {
      // items: [],
      drawer: false,
      items: [
        {
          title: "Kos",
          link: "dashboard",
          outline: false,
          filled: false,
          icon: "sensor_door",
          class: "nav-list__title",
          class2: "pl-6 pb-1",
        },
        {
          title: "Masuk",
          link: "login",
          outline: false,
          filled: false,
          icon: "login",
          class: "nav-list__title",
          class2: "pl-6 pb-1",
        },
        {
          title: "Buat Akun",
          link: "register",
          outline: true,
          filled: false,
          icon: "account_circle",
          class: "nav-list__title",
          class2: "nav-list__btn-keluar mt-2",
        },
      ],
    };
  },
};
</script>
