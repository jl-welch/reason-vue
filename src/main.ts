import { createApp } from "vue";
// Had a bit of a problem working with Vuex in TS
// Usually use pinia now
//@ts-ignore
import { store } from "./stores/store"; 

import App from "./App.vue";
import router from "./router";

import "./assets/main.css";

const app = createApp(App);

// pass the injection key
app.use(store);
app.use(router);

app.mount("#app");
