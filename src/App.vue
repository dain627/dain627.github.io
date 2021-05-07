<template>
    <v-app>
        <v-app-bar app color="darkgray" dark>
            <v-app-bar-nav-icon
                @click.stop="drawer = !drawer"
            ></v-app-bar-nav-icon>
            <img src="@/assets/logo2_w.png" style="height: 32px;" />
            <v-spacer />

            <!--  Darkmode  -->
            <v-btn icon @click="toggle_dark_mode">
                <v-icon>mdi-theme-light-dark</v-icon>
            </v-btn>
            <!--  switch Login/Logout button by user log state -->
            <v-btn v-if="this.$store.state.isLogined" text @click="logout">
                Logout
            </v-btn>
            <v-btn v-else text @click="$router.push('/login')">
                Login / Join
            </v-btn>
        </v-app-bar>

        <!-- Menu navigation action -->
        <v-navigation-drawer app v-model="drawer">
            <v-list-item>
                <img class="my-2" src="@/assets/logo2_b.png" height="38px;" />
            </v-list-item>

            <v-divider></v-divider>

            <v-list dense>
                <!--access the menu by JWT or non-JWT (user type *유저타입으로 변경하려면?)-->
                <v-list-item
                    v-for="item in accessToken !== null ? acc_items : items"
                    :key="item.title"
                    link
                >
                    <!-- <v-list-item-icon>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-icon> -->
                    <v-list-item-content @click="$router.push(item.link)">
                        <!-- <v-list-item-title v-if="accessToken !== null">{{ item.title }}</v-list-item-title>
            <v-list-item-title v-else>{{ item.ltitle }}</v-list-item-title> -->
                        <v-list-item-title>{{ item.title }}</v-list-item-title>
                    </v-list-item-content>
                </v-list-item>
            </v-list>
        </v-navigation-drawer>

        <v-main>
            <router-view />
        </v-main>

        <v-footer dark padless class="mt-2">
            <v-card class="flex" flat tile>
                <v-card-text class="py-2 white--text text-center">
                    {{ new Date().getFullYear() }} —
                    <strong>Underground Dining</strong>
                </v-card-text>
            </v-card>
        </v-footer>
    </v-app>
</template>
<script>
import { logoutApi } from "./libs/api";
export default {
    name: "App",

    data: () => ({
        // icons: ["mdi-facebook", "mdi-twitter", "mdi-linkedin", "mdi-instagram"],
        drawer: false,
        accessToken: localStorage.getItem("token"),

        items: [
            {
                title: "Home",
                link: "/",
            },
            {
                title: "Registration",
                link: "/signup",
            },
            {
                title: "Browse Dining",
                link: "/browse",
            },
        ],

        acc_items: [
            {
                title: "Home",
                link: "/",
            },
            {
                title: "Browse Dining",
                link: "/browse",
            },
            {
                title: "My Dining",
                link: "/my",
            },
            //  {
            //   title: "Chef Profile",
            //   link: "/profile",
            // },
            {
                title: "Post Dining",
                link: "/post",
            },
        ],
    }),

    methods: {
        toggle_dark_mode: function() {
            this.$vuetify.theme.dark = !this.$vuetify.theme.dark;
            localStorage.setItem(
                "dark_theme",
                this.$vuetify.theme.dark.toString()
            );
        },
        logout: function() {
            logoutApi();
            this.$store.state.isLogined = false;
            localStorage.removeItem("token");
            localStorage.removeItem("user_data");
        },
    },
    mounted() {
        const theme = localStorage.getItem("dark_theme");
        if (theme) {
            if (theme === "true") {
                this.$vuetify.theme.dark = true;
            } else {
                this.$vuetify.theme.dark = false;
            }
        } else if (
            window.matchMedia &&
            window.matchMedia("(prefers-color-scheme: dark)").matches
        ) {
            this.$vuetify.theme.dark = true;
            localStorage.setItem(
                "dark_theme",
                this.$vuetify.theme.dark.toString()
            );
        }
    },
};
</script>
