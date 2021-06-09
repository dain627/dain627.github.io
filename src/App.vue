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
            
            <!--  Help Guide  -->
            <v-dialog
            v-model="dialog"
            fullscreen
            hide-overlay
            transition="dialog-bottom-transition"
            >
            <template v-slot:activator="{ on, attrs }">
            
                <v-btn
                    color="secondary"
                    fab
                    x-small
                    dark
                    v-bind="attrs"
                v-on="on"
                    >
                    <v-icon>mdi-help</v-icon>
                    </v-btn>
            </template>
            <v-card>
                <v-toolbar
                dark
                
                >
                <v-btn
                    icon
                    dark
                    @click="dialog = false"
                >
                    <v-icon>mdi-close</v-icon>
                </v-btn>
                <v-toolbar-title>Web Guide</v-toolbar-title>
                <v-spacer></v-spacer>
                </v-toolbar>
                <v-list
                three-line
                subheader
                >
                <v-list-item>
                    <v-list-item-content>
                        <v-list-item-title style="font-weight: bold; font-size: 130%;">Welcome to UnderGround Dining World!</v-list-item-title>
                        <v-spacer></v-spacer>
                            <v-list-item-action-text style="font-size: 90%;">
                            UnderGround Dining is a private fine-dining booking web service for chefs and customers. 
                            You can register as a chef or a customer. Our service provides different services by each user type. <v-spacer></v-spacer>
                            As a chef member, you can post your personal profile and dining service information for customers. 
                            You can also manage your customer booking list.
                            As a customer member, you can get dining and chef profile information and can book service via our web service.
                             
                            </v-list-item-action-text>
                        </v-list-item-content>
                </v-list-item>
                <v-divider></v-divider>
                <v-subheader>Chef Member Guide</v-subheader>
                <v-list-item>
                    <v-list-item-content>
                    <v-list-item-title style="font-weight: bold;">After login as chef member</v-list-item-title>
                    <v-list-item-subtitle>You can see the MyDining and Post Dining Menu in the side bar.</v-list-item-subtitle>
                    <v-list-item-content><img src="@/assets/help1.png" style="width:10px; hight:20px; box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2); " /></v-list-item-content>
                    </v-list-item-content>
                </v-list-item>
                  <v-list-item>
                    <v-list-item-content>
                    <v-list-item-title style="font-weight: bold;">Register Chef Prifile</v-list-item-title>
                    <v-list-item-subtitle>You can see pen icon button top of right side in MyDining page.</v-list-item-subtitle>
                    <v-list-item-content><img src="@/assets/help2.png" style="width:10px; hight:20px; box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2); " /></v-list-item-content>
                    </v-list-item-content>
                </v-list-item>
                  <v-list-item>
                    <v-list-item-content>
                    <v-list-item-title style="font-weight: bold;">Post Dining Menu</v-list-item-title>
                    <v-list-item-subtitle>After register Chef Prifile, You can post Dining menu via Post Dining menu in the side bar.</v-list-item-subtitle>
                    <v-list-item-content><img src="@/assets/help3.png" style="width:10px; hight:20px; box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2); " /></v-list-item-content>
                    <v-list-item-content><img src="@/assets/help4.png" style="width:10px; hight:20px; box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2); " /></v-list-item-content>
                    </v-list-item-content>
                </v-list-item>
                <v-list-item>
                    <v-list-item-content>
                    <v-list-item-title style="font-weight: bold;">Update&Delete Dining Menu</v-list-item-title>
                    <v-list-item-action-text style="font-size: 90%;">You can update and delete your dining menu via the pen icon and bin icon button top of the right side of the dining menu card which is posted by you on the Browse Dining page.</v-list-item-action-text>
                    <v-list-item-content><img src="@/assets/help8.png" style="width:10px; hight:20px; box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2); " /></v-list-item-content>
                    </v-list-item-content>
                </v-list-item>
                <v-list-item>
                    <v-list-item-content>
                    <v-list-item-title style="font-weight: bold;">Booking List Management</v-list-item-title>
                    <v-list-item-subtitle>You can see your booking list in on Mydining page.</v-list-item-subtitle>
                    <v-list-item-content><img src="@/assets/help5.png" style="width:10px; hight:20px; box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2); " /></v-list-item-content>
                    </v-list-item-content>
                </v-list-item>
                </v-list>
                <v-divider></v-divider>
                <v-list
                three-line
                subheader
                >
                <v-subheader>Customer Member Guide</v-subheader>
                    <v-list-item>
                    <v-list-item-content>
                    <v-list-item-title style="font-weight: bold;">After login as customer member</v-list-item-title>
                    <v-list-item-subtitle>You can see to the Brows Dining manu in the side bar.</v-list-item-subtitle>
                    <v-list-item-content><img src="@/assets/help9.png" style="width:10px; hight:20px; box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2); " /></v-list-item-content>
                    </v-list-item-content>
                </v-list-item>
                  <v-list-item>
                    <v-list-item-content>
                    <v-list-item-title style="font-weight: bold;">Booking the Dining menu</v-list-item-title>
                    <v-list-item-subtitle>You can book the dining menu via the booking button where is the bottom of each dining menu card. </v-list-item-subtitle>
                    <v-list-item-content><img src="@/assets/help6.png" style="width:10px; hight:20px; box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2); " /></v-list-item-content>
                    </v-list-item-content>
                </v-list-item>
                </v-list>
                <v-card-actions class="justify-center">
              <v-btn
                text
                @click="dialog = false"
              >Close</v-btn>
            </v-card-actions>
            </v-card>
            </v-dialog>
   
            <!--  switch Login/Logout button by user log state -->
            <!-- <v-btn v-if="$store.state.isLogined" text @click="logout">
                Logout
            </v-btn>
            <v-btn v-else text @click="$router.push('/login')">
                Login / Join
            </v-btn> -->
            
            <v-btn v-if="accessToken == null" text @click="$router.push('/login')">
                Login / Join
            </v-btn>
             <v-btn v-else text @click="logout">
                Logout
            </v-btn>
            
        </v-app-bar>

        <!-- Menu navigation action -->
        <v-navigation-drawer app v-model="drawer">
            <v-list-item>
                <img class="my-2" src="@/assets/logo2_b.png" height="38px;" />
            </v-list-item>

            <v-divider></v-divider>

            <v-list dense>
                <!--access the menu by User Type-->
                <v-list-item
                    v-for="item in $store.state.isLogined == false
                        ? items
                        : getUserTypeF() == 'chef'
                        ? acc_items
                        : getUserTypeF() == 'customer'
                        ? customers_items
                        : admin_items"
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
import { getUserType } from "./libs/functions";
export default {
    name: "App",

    data: () => ({
        // icons: ["mdi-facebook", "mdi-twitter", "mdi-linkedin", "mdi-instagram"],
        drawer: false,
        accessToken: localStorage.getItem("token"),
        dialog: false,
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

        customers_items: [
            {
                title: "Home",
                link: "/",
            },
            {
                title: "Browse Dining",
                link: "/browse",
            },
        ],

        admin_items: [
            {
                title: "Home",
                link: "/",
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
            this.$router.push("/");
            localStorage.removeItem("token");
            localStorage.removeItem("user_data");
        },

        getUserTypeF() {
            return getUserType();
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
