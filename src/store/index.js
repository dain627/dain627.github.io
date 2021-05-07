import Vue from "vue";
import Vuex from "vuex";
// import axios from 'axios';

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        isLogined: localStorage.getItem("token") ? true : false,
        bookingCustomerList: [],
        menuList: [
            {
                dining_category: "ASD",
                id: 123,
                menu_image:
                    "https://user-images.githubusercontent.com/9162729/27467096-2a2eb3fc-57e8-11e7-9574-4347a9864255.jpg",
                menu_title: "asdasd",
                price: 5000,
                location: "QWEQWEqwr",
                menu_description:
                    "ASDQWQWFQWGFAGAGAefuiaebngiuefnieubflwubrluiawbuliwdb",
                availability: "qweqwrfqwrqw",
                creator: {
                    business_name: "QWEQWR",
                    identity_photo:
                        "https://user-images.githubusercontent.com/9162729/27467096-2a2eb3fc-57e8-11e7-9574-4347a9864255.jpg",
                    introduction: "QWEQWE",
                    experience: "QWEQWR",
                    business_number: "ASDASD",
                    id: 53,
                },
            },
        ],
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
