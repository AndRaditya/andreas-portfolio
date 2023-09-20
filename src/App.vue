<template>
  <div class="app-container">
    <navigation-bar></navigation-bar>
    <div class="app">
      <landing-page-vue></landing-page-vue>
      <logo-page-vue></logo-page-vue>
      <about-me-vue></about-me-vue>
      <projects-vue></projects-vue>
      <contact-me-vue></contact-me-vue>
    </div>
  </div>
</template>

<script>
import AboutMeVue from "./components/AboutMe.vue";
import ContactMeVue from "./components/ContactMe.vue";
import LandingPageVue from "./components/LandingPage.vue";
import LogoPageVue from "./components/LogoPage.vue";
import NavigationBar from "./components/NavigationBar.vue";
import ProjectsVue from "./components/Projects.vue";

export default {
  name: "App",

  components: {
    NavigationBar,
    AboutMeVue,
    ContactMeVue,
    LandingPageVue,
    LogoPageVue,
    ProjectsVue,
  },
};
</script>

<style>
#app {
  margin: 0 !important;
  padding: 0 !important;
}

@import "../css/style.comp.css";
@import "../css/main.css";
</style>
