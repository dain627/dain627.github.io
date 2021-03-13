<template>
  <v-app>
    <v-app-bar app color="darkgray" dark>
      <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
      <img src="@/assets/logo2_w.png" style="height: 32px;" />
      <v-spacer />
      <v-btn text @click="$router.push('/login')">
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
        <v-list-item v-for="item in items" :key="item.title" link>
          <!-- <v-list-item-icon>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-icon> -->
          <v-list-item-content @click="$router.push(item.link)">
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
          {{ new Date().getFullYear() }} — <strong>Underground Dining</strong>
        </v-card-text>
      </v-card>
    </v-footer>
  </v-app>
</template>
<script>
export default {
  name: "App",

  data: () => ({
    
    // icons: ["mdi-facebook", "mdi-twitter", "mdi-linkedin", "mdi-instagram"],
    drawer: false,
    items: [
      {
        title: "Home",
        link: "/",
      },
      // if access as a login user, hide this menu link
       {
        title: "Registration",
        link: "/signup",
      },
      {
        title: "Post Dining",
        link: "/post",
      },
      {
        title: "Browse Dining",
        link: "/browse",
      },
      {
        title: "My Dining",
        link: "/my",
      },
    ],
  }),
};
</script>
