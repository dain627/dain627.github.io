import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Login from "../views/Login.vue";
import Signup from "../views/Signup.vue";
import BrowseDining from "../views/BrowseDining.vue";
import PostDining from "../views/PostDining.vue";
import MyDining from "../views/MyDining.vue";
import BookDining from "../views/BookDining.vue";
import Update from "../views/Update.vue";



Vue.use(VueRouter);

const routes = [{
        path: "/",
        name: "Home",
        component: Home,
    },
    {
        path: "/login",
        name: "Login",
        component: Login,
    },
    {
        path: "/signup",
        name: "Signup",
        component: Signup,
    },
    {
        path: "/browse",
        name: "BrowseDining",
        component: BrowseDining,
    },
    {
        path: "/post",
        name: "PostDining",
        component: PostDining,
    },
    {
        path: "/my",
        name: "MyDining",
        component: MyDining,
    },
    {
        path: "/book",
        name: "BookDining",
        component: BookDining,
    },
    {
        path: "/update",
        name: "Update",
        component: Update,
    }
];

const router = new VueRouter({
    mode: "history",
    base: process.env.BASE_URL,
    routes,
});

export default router;