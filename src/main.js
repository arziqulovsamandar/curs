import "./assets/main.css";
import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from './store'

import "../bootstrap-5.0.2-dist/css/bootstrap.min.css";



const app = createApp(App).use(store).use(router).mount("#app");
