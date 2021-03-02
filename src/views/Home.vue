<template>
  <v-container>
    <v-row>
      <v-col cols="12" style="text-align: center; ">
        <h2>Welcome To Underground Dining World</h2>
      </v-col>
      <v-col cols="12">
        <img src="@/assets/image3.png" alt="" width="100%" />
      </v-col>
    </v-row>
    <v-row>
       <v-col cols="12" style="text-align: center; margin:0 0 2em 0;">
        <v-btn color="normal" @click="$router.push('/signup')">Get Stared Now</v-btn>
      </v-col>
    </v-row>
    <v-row class="ma-0" style="box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);">
      <v-col cols="12">
        <img src="@/assets/image1.jpg" width="100%" />
      </v-col>
      <v-col cols="12" style="text-align: center">
        <v-btn color="normal" @click="$router.push('/signup')">Post Dining</v-btn>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="12">
        <v-row>
          <v-col cols="12">
            <v-row class="ma-0" style="box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);;">
              <v-col cols="12">
                <v-carousel
                  v-model="carousel"
                  hide-delimiters
                  :show-arrows="$vuetify.breakpoint.smAndUp"
                  :height="$vuetify.breakpoint.smAndUp ? '500px' : '200px'"
                >
                  <v-carousel-item
                    v-for="(food, index) in foodItems"
                    :key="index"
                    :src="food"
                  >
                  </v-carousel-item>
                </v-carousel>
              </v-col>
              <v-col cols="12">
                <v-list flat>
                  <v-list-item-group>
                    <v-list-item v-for="(item, i) in listItems" :key="i">
                      <v-list-item-content>
                        <v-list-item-title
                          v-text="item.text"
                        ></v-list-item-title>
                      </v-list-item-content>
                    </v-list-item>
                  </v-list-item-group>
                </v-list>
                 <v-col cols="12" style="text-align: center">
        <v-btn color="normal" @click="$router.push('/browse')">Book Dining</v-btn>
      </v-col>
              </v-col>
            </v-row>
          </v-col>
        </v-row>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  data: () => ({
    carousel: 0,
    foodItems: [
      require("@/assets/image2.jpg"),
      require("@/assets/image2.jpg"),
      require("@/assets/image2.jpg"),
      require("@/assets/image2.jpg"),
      require("@/assets/image2.jpg"),
    ],
    listItems: [
      {
        text: "Chef Name",
      },
      {
        text: "Location",
      },
      {
        text: "Dining Category",
      },
      {
        text: "Menu",
      },
      {
        text: "Price",
      },
    ],
  }),
};
</script>

<style></style>
