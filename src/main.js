import { createApp } from "vue";
import App from "./App.vue";
import router from "./router.js";
// import { BootstrapVue, IconsPlugin } from "bootstrap-vue";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";

import BaseCard from "./ui/BaseCard.vue";

const app = createApp(App);

app.component("base-card", BaseCard);

// app.use(BootstrapVue);
// app.use(IconsPlugin);
app.use(router);

app.mount("#app");
