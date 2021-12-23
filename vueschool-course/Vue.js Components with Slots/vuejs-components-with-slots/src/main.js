import Vue from "vue";
import App from "./views/Lessons/1/index.vue";
import "@/assets/index.css";

Vue.config.productionTip = false;

new Vue({
  render: (h) => h(App),
}).$mount("#app");
