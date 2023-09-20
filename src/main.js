import Vue from "vue";
import vuetify from "@/plugins/vuetify";
import App from "./App.vue";

Vue.config.productionTip = false;

new Vue({
  vuetify,

  el: "#app",
  render: (h) => h(App),

  components: {
    // LoginPage,
  },

  data() {
    return {
      drawer: false,
    };
  },
  methods: {},
});
