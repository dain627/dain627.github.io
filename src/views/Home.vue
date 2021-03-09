<template>
  <v-container>
    <v-row>
      <v-col cols="12" style="text-align: center; ">
        <h2>Welcome To Underground Dining World</h2>
      </v-col>
      <v-col cols="12">
        <v-img src="@/assets/image3.png" alt="" width="100%" height="300">
        <template >
        <v-row
          class="fill-height ma-0"
          align="center"
          justify="center"
        >
          <v-col cols="12" style="text-align: center; margin:0 0 2em 0;">
        <v-btn color="normal" @click="$router.push('/signup')">Get Stared Now</v-btn>
        </v-col>
        </v-row>
        </template>
        </v-img>
      </v-col>
    </v-row>
     
    <v-row>
       <v-col>
      </v-col>
    </v-row>
   
    <v-row class="ma-0" style="box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);">
      <v-col cols="12">
        <img src="@/assets/image1.jpg" width="100%" />
      </v-col>
      <v-col cols="12" style="text-align: center">
         <!-- 게스트로 접속상태 일때-->
        <v-btn color="normal" @click="$router.push('/signup')">Post Dining</v-btn>
        <!-- 쉐프멤버로그인상태일때
        <v-btn color="normal" @click="$router.push('/post')">Post Dining</v-btn>-->
      </v-col>
    </v-row>

    <v-row>
      <v-col cols="12">
        <v-row class="ma-0" style="box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);">
          <v-col cols="12">
            <img src="@/assets/image2.jpg" width="100%" />
          </v-col>
          <v-col cols="12" style="text-align: center">
            <v-btn color="normal" @click="$router.push('/browse')">Browse Dining</v-btn>
          </v-col>
        </v-row>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
</script>

<style></style>
