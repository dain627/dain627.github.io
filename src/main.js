import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import vuetify from "./plugins/vuetify";
import store from "./store";
import axios from "axios";
/// all third part import here
Vue.config.productionTip = false;

new Vue({
    store,
    router,
    vuetify,
    axios,
    render: (h) => h(App),
}).$mount("#app");
