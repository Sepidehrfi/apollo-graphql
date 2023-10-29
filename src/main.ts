import { createApp, h } from "vue";
import App from "./App.vue";
import GoogleMap from "vue-google-maps-ui";

const app = createApp({
  render: () => h(App)
});

app.component("Googlemap", GoogleMap).mount("#app");
