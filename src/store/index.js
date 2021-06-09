import Vue from "vue";
import Vuex from "vuex";
// import axios from 'axios';

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        isLogined: localStorage.getItem("token") ? true : false,
        bookingCustomerList: [],
        menuList: [],
    },
    mutations: {
        // change the data
    },
    actions: {
        // insert function
    },
    getters: {
        // insert functio
    },
});