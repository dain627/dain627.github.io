import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Login from "../views/Login.vue";
import Signup from "../views/Signup.vue";
import BrowseDining from "../views/BrowseDining.vue";
import PostDining from "../views/PostDining.vue";
import ChefProfile from "../views/ChefProfile.vue";
import MyDining from "../views/MyDining.vue";
import BookDining from "../views/BookDining.vue";
import Update from "../views/Update.vue";
// import UserManage from "../views/UserManage.vue";
// import DiningListManage from "../views/DiningListManage.vue";
// import BookingManage from "../views/BookingManage.vue";
import Admin from "../views/Admin.vue";

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
        path: "/profile",
        name: "ChefProfile",
        component: ChefProfile,
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
        path: "/book/:id",
        name: "BookDining",
        component: BookDining,
    },
    {
        path: "/update/:id",
        name: "Update",
        component: Update,
    },
    {
        path: "/admin",
        name: "adminPage",
        component: Admin,
    },
];

const router = new VueRouter({
    mode: "history",
    base: process.env.BASE_URL,
    routes,
});

export default router;