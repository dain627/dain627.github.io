<template>
<!-- This will be connected with the database on the backend -->
  <v-container>
    <v-row>
      <v-col cols="12" style="text-align: center">
        <h1>Browse Dining</h1>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="12">
        <v-carousel v-model="carousel">
          <v-carousel-item
            v-for="(item, i) in items"
            :key="i"
            :src="item.src"
            reverse-transition="fade-transition"
            transition="fade-transition"
          ></v-carousel-item>
        </v-carousel>
      </v-col>
      <v-col cols="12">
        <v-card>
          <v-card-title>{{ dinings[carousel].name }}</v-card-title>
          <v-card-text>
            <h3>Menus</h3>
            <p>{{ String(dinings[carousel].menu) }}</p>
            <h3>Location</h3>
            <p>{{ dinings[carousel].location }}</p>
          </v-card-text>
        </v-card>
      </v-col>
      <v-col cols="12">
        <v-card>
          <v-img
            height="250"
            :src="chefs[carousel].image"
            style="object-fit: cover"
          ></v-img>

          <v-card-title>{{ chefs[carousel].name }}</v-card-title>
          <v-card-text>{{ chefs[carousel].description }}</v-card-text>
        </v-card>
      </v-col>
      <v-col cols="12" style="text-align: center">
        <v-btn color="normal" @click="$router.push('/book')">Book Now</v-btn>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      carousel: 0,
      items: [
        {
          src: require("@/assets/food1.jpg"),
        },
        {
          src: require("@/assets/food2.jpg"),
        },
        {
          src: require("@/assets/food3.jpg"),
        },
      ],
      dinings: [
        {
          name: "Dining name 1",
          menu: ["menu1", "menu2", "menu3"],
          location: "Underground",
        },
        {
          name: "Dining name 2",
          menu: ["menu4", "menu5", "menu6"],
          location: "Underground",
        },
        {
          name: "Dining name 3",
          menu: ["menu7", "menu8", "menu9"],
          location: "Underground",
        },
      ],
      chefs: [
        {
          image:
            "https://images.unsplash.com/photo-1600565193348-f74bd3c7ccdf?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MXx8Y2hlZnxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=60",
          name: "Chef 1",
          description: "chef 1 description",
        },
        {
          image:
            "https://images.unsplash.com/photo-1577219491135-ce391730fb2c?ixid=MXwxMjA3fDB8MHxzZWFyY2h8M3x8Y2hlZnxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=60",
          name: "Chef 2",
          description: "chef 2 description",
        },
        {
          image:
            "https://images.unsplash.com/photo-1566554273541-37a9ca77b91f?ixid=MXwxMjA3fDB8MHxzZWFyY2h8OHx8Y2hlZnxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=60",
          name: "Chef 3",
          description: "chef 3 description",
        },
      ],
    };
  },
};
</script>

<style></style>
