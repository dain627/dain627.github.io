<template>
<!-- This will be connected with the database on the backend -->
  <v-container>
    <v-row>
      <v-col cols="12" style="text-align: center">
        <h1>Detailed Dining</h1>
      </v-col>
    </v-row>
   <v-row >
      <v-col cols="12">
  <v-card
    max-width="375"
    class="mx-auto"
  >
    <v-img
      src="@/assets/food1.jpg"
      height="300px"
      dark
    >
      <v-row class="fill-height">
        <v-card-title >
          <v-spacer></v-spacer>
           <v-col cols="12" align="center">
          <v-btn
            dark
            icon
            class="mr-4"
            @click="$router.push('/book')"
          >
            <v-icon right>mdi-pencil</v-icon>
          </v-btn>

          <v-btn
            dark
            icon
          >
            <v-icon right>mdi-delete</v-icon>
          </v-btn>
          </v-col>
        </v-card-title>

        <v-spacer></v-spacer>

        <v-card-title class="white--text pl-12 pt-12">
          <div class="display-1 pl-12 pt-12">
            Menu name
          </div>
        </v-card-title>
      </v-row>
    </v-img>

    <v-list two-line>
      <v-list-item>
        <v-list-item-icon>
          <v-icon color="indigo">
            mdi-phone
          </v-icon>
        </v-list-item-icon>

        <v-list-item-content>
          <v-list-item-title>(650) 555-1234</v-list-item-title>
          <v-list-item-subtitle>Mobile</v-list-item-subtitle>
               <v-card-text>
          I'm a thing. But, like most politicians, he promised more than he could deliver. You won't have time for sleeping, soldier, not with all the bed making you'll be doing. Then we'll go with that data file! Hey, you add a one and two zeros to that or we walk! You're going to do his laundry? I've got to find a way to escape.
        </v-card-text>
        </v-list-item-content>

        <v-list-item-icon>
          <v-icon>mdi-message-text</v-icon>
        </v-list-item-icon>
      </v-list-item>

      <v-list-item>
        <v-list-item-action></v-list-item-action>

        <v-list-item-content>
          <v-list-item-title>(323) 555-6789</v-list-item-title>
          <v-list-item-subtitle>Au$</v-list-item-subtitle>
        </v-list-item-content>

        <v-list-item-icon>
          <v-icon>mdi-message-text</v-icon>
        </v-list-item-icon>
      </v-list-item>

      <v-divider inset></v-divider>

      <v-list-item>
        <v-list-item-icon>
          <v-icon color="indigo">
            mdi-email
          </v-icon>
        </v-list-item-icon>

        <v-list-item-content>
          <v-list-item-title>aliconnors@example.com</v-list-item-title>
          <v-list-item-subtitle>Personal</v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>

      <v-list-item>
        <v-list-item-action></v-list-item-action>

        <v-list-item-content>
          <v-list-item-title>ali_connors@example.com</v-list-item-title>
          <v-list-item-subtitle>Work</v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>

      <v-divider inset></v-divider>

      <v-list-item>
        <v-list-item-icon>
          <v-icon color="indigo">
            mdi-map-marker
          </v-icon>
        </v-list-item-icon>

        <v-list-item-content>
          <v-list-item-title>1400 Main Street</v-list-item-title>
          <v-list-item-subtitle>Orlando, FL 79938</v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>
    </v-list>
    <!--chef Profile--> 
    
  </v-card>
   
      </v-col>
    </v-row>
      <v-row>
      <v-col cols="12" >
  <v-card
    max-width="375"
    class="mx-auto"
  >
    <v-img
      src="https://images.unsplash.com/photo-1600565193348-f74bd3c7ccdf?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MXx8Y2hlZnxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=60"
      height="300px"
      dark
    >
      <v-row class="fill-height">
        <v-card-title>
          <v-btn
            dark
            icon
          >
            <v-icon>mdi-chevron-left</v-icon>
          </v-btn>

          <v-spacer></v-spacer>

          <v-btn
            dark
            icon
            class="mr-4"
          >
            <v-icon>mdi-pencil</v-icon>
          </v-btn>

          <v-btn
            dark
            icon
          >
            <v-icon>mdi-dots-vertical</v-icon>
          </v-btn>
        </v-card-title>

        <v-spacer></v-spacer>

        <v-card-title class="white--text pl-12 pt-12">
          <div class="display-1 pl-12 pt-12">
            Ali Conners
          </div>
        </v-card-title>
      </v-row>
    </v-img>

    <v-list two-line>
      <v-list-item>
        <v-list-item-icon>
          <v-icon color="indigo">
            mdi-phone
          </v-icon>
        </v-list-item-icon>

        <v-list-item-content>
          <v-list-item-title>(650) 555-1234</v-list-item-title>
          <v-list-item-subtitle>Mobile</v-list-item-subtitle>
        </v-list-item-content>

        <v-list-item-icon>
          <v-icon>mdi-message-text</v-icon>
        </v-list-item-icon>
      </v-list-item>

      <v-list-item>
        <v-list-item-action></v-list-item-action>

        <v-list-item-content>
          <v-list-item-title>(323) 555-6789</v-list-item-title>
          <v-list-item-subtitle>Work</v-list-item-subtitle>
        </v-list-item-content>

        <v-list-item-icon>
          <v-icon>mdi-message-text</v-icon>
        </v-list-item-icon>
      </v-list-item>

      <v-divider inset></v-divider>

      <v-list-item>
        <v-list-item-icon>
          <v-icon color="indigo">
            mdi-email
          </v-icon>
        </v-list-item-icon>

        <v-list-item-content>
          <v-list-item-title>aliconnors@example.com</v-list-item-title>
          <v-list-item-subtitle>Personal</v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>

      <v-list-item>
        <v-list-item-action></v-list-item-action>

        <v-list-item-content>
          <v-list-item-title>ali_connors@example.com</v-list-item-title>
          <v-list-item-subtitle>Work</v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>

      <v-divider inset></v-divider>

      <v-list-item>
        <v-list-item-icon>
          <v-icon color="indigo">
            mdi-map-marker
          </v-icon>
        </v-list-item-icon>

        <v-list-item-content>
          <v-list-item-title>1400 Main Street</v-list-item-title>
          <v-list-item-subtitle>Orlando, FL 79938</v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>
    </v-list>
  </v-card>
  
   
      </v-col>
    </v-row>
  

    <!-- <v-row>
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
    </v-row>-->
  </v-container>
</template>

<script>
// export default {
//   data() {
//     return {
//       carousel: 0,
//       items: [
//         {
//           src: require("@/assets/food1.jpg"),
//         },
//         {
//           src: require("@/assets/food2.jpg"),
//         },
//         {
//           src: require("@/assets/food3.jpg"),
//         },
//       ],
//       dinings: [
//         {
//           name: "Dining name 1",
//           menu: ["menu1", "menu2", "menu3"],
//           location: "Underground",
//         },
//         {
//           name: "Dining name 2",
//           menu: ["menu4", "menu5", "menu6"],
//           location: "Underground",
//         },
//         {
//           name: "Dining name 3",
//           menu: ["menu7", "menu8", "menu9"],
//           location: "Underground",
//         },
//       ],
//       chefs: [
//         {
//           image:
//             "https://images.unsplash.com/photo-1600565193348-f74bd3c7ccdf?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MXx8Y2hlZnxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=60",
//           name: "Chef 1",
//           description: "chef 1 description",
//         },
//         {
//           image:
//             "https://images.unsplash.com/photo-1577219491135-ce391730fb2c?ixid=MXwxMjA3fDB8MHxzZWFyY2h8M3x8Y2hlZnxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=60",
//           name: "Chef 2",
//           description: "chef 2 description",
//         },
//         {
//           image:
//             "https://images.unsplash.com/photo-1566554273541-37a9ca77b91f?ixid=MXwxMjA3fDB8MHxzZWFyY2h8OHx8Y2hlZnxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=60",
//           name: "Chef 3",
//           description: "chef 3 description",
//         },
//       ],
//     };
//   },
// };
</script>

<style></style>
