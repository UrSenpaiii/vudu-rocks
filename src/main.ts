import { createApp } from "vue";
import App from "./App.vue";
import "bootstrap";
import axios from "axios";
import VueAxios from "vue-axios";
import { createPinia } from "pinia";

axios.defaults.baseURL = "https://jsonplaceholder.typicode.com/";

const app = createApp(App).use(createPinia()).use(VueAxios, axios);
app.provide("axios", app.config.globalProperties.axios);
app.mount("#app");
