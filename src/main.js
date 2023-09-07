import { createApp } from "vue";
import App from "./App.vue";
import router from "./router.js";
import store from "./store/index.js";
import BaseButton from "./components/UI/BaseButton.vue";
import BaseTextCard from "./components/UI/BaseTextCard.vue";
import BaseSpinner from "./components/UI/BaseSpinner.vue";
import BaseDialog from "./components/UI/BaseDialog.vue";
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { faArrowUp } from "@fortawesome/free-solid-svg-icons";

const app = createApp(App);

app.use(router);
app.use(store);

library.add(faArrowUp);
app.component("base-button", BaseButton);
app.component("base-text-card", BaseTextCard);
app.component("base-spinner", BaseSpinner);
app.component("base-dialog", BaseDialog);
app.component("font-awesome-icon", FontAwesomeIcon);
app.mount("#app");
