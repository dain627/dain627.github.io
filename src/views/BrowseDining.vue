<template>
<!-- Rendering Dining table data -->
  <v-card
      :loading="loading"
    class="mx-auto my-12"
    max-width="374"
  >
<!-- Rendering MenuTitle here -->
    <v-img
      src="@/assets/food3.jpg"
      height="200px"
    >
   <v-row>
        <v-col cols="12" style="text-align: right"> 
          <v-btn
            dark
            icon
            class="mr-4"
            @click="$router.push('/update')"
          >
            <v-icon>mdi-pencil</v-icon>
          </v-btn>

          <v-btn
            dark
            icon
          >
            <v-icon>mdi-delete</v-icon>
          </v-btn>   
        </v-col> 
        </v-row>
        </v-img>
 <!-- Rendering MenuTitle here -->
    <v-card-title>
      Menu Title
    </v-card-title>
    <v-spacer></v-spacer>

    <v-list-item>
      <v-list-item-action>
        <list-subtitle>
          Category
        </list-subtitle>
      </v-list-item-action>
  <!-- Rendering DingCategory here -->
      <v-list-item-content>
      <v-card-subtitle>
        Dining Category name here
      </v-card-subtitle>
      </v-list-item-content>
     </v-list-item>

      <v-list-item>
      <v-list-item-action>
        <list-subtitle>
         Price(AU)
        </list-subtitle>
      </v-list-item-action>
  <!-- Rendering Price here -->
      <v-list-item-content>
      <v-card-subtitle>
          Dining Price here
      </v-card-subtitle>
      </v-list-item-content>
     </v-list-item>
     
      <v-list-item>
      <v-list-item-action>
        <list-subtitle>
          Location
        </list-subtitle>
      </v-list-item-action>
  <!-- Rendering Location here -->
      <v-list-item-content>
      <v-card-subtitle>
        Location address here
      </v-card-subtitle>
      </v-list-item-content>
     </v-list-item>

       <v-list-item>
      <v-list-item-action>
        <list-subtitle>
          Schedule 
        </list-subtitle>
      </v-list-item-action>
  <!-- Rendering Availability here -->
      <v-list-item-content>
      <v-card-subtitle>
        Available Dining Date&Time
      </v-card-subtitle>
      </v-list-item-content>
     </v-list-item>


    <v-card-actions>
      <v-btn
        color="gray"
        text
      >
        Menu Description
      </v-btn>

      <v-spacer></v-spacer>

      <v-btn
        icon
        @click="show = !show"
      >
        <v-icon>{{ show ? 'mdi-chevron-up' : 'mdi-chevron-down' }}</v-icon>
      </v-btn>
    </v-card-actions>

    <v-expand-transition>
      <div v-show="show">
        <v-divider></v-divider>
  <!-- Rendering MenuDescription here -->
        <v-card-text>
          I'm a thing. But, like most politicians, he promised more than he could deliver. You won't have time for sleeping, soldier, not with all the bed making you'll be doing. Then we'll go with that data file! Hey, you add a one and two zeros to that or we walk! You're going to do his laundry? I've got to find a way to escape.
        </v-card-text>
      </div>
    </v-expand-transition>
  <!-- Rendering Chef Profile table data -->
       <v-card-actions>
      <v-btn
        color="gray"
        text
      >
        Chef Profile
      </v-btn>

      <v-spacer></v-spacer>

      <v-btn
        icon
        @click="show2 = !show2"
      >
        <v-icon>{{ show2 ? 'mdi-chevron-up' : 'mdi-chevron-down' }}</v-icon>
      </v-btn>
    </v-card-actions>

    <v-expand-transition>
      <div v-show="show2">
        <v-divider></v-divider>

        <v-card-text>
         <v-row>
      <v-col cols="12" >
  <v-card
    max-width="375"
    class="mx-auto"
  >
  <!-- Rendering IdentifyPhoto here -->
    <v-img
      src="https://images.unsplash.com/photo-1600565193348-f74bd3c7ccdf?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MXx8Y2hlZnxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=60"
      height="300px"
      dark
    >
    </v-img>
    <!-- Rendering BusinessName here -->
      <v-card-title>
       Chef Name (Buciness name)
      </v-card-title>
    <v-spacer></v-spacer>

    <v-list-item>
      <v-list-item-action>
        <list-subtitle>
          Chef Introduction
        </list-subtitle>
      </v-list-item-action>
    <!-- Rendering Introduction here -->
      <v-list-item-content>
      <v-card-subtitle>
         Introduction here
      </v-card-subtitle>
      </v-list-item-content>
     </v-list-item>

      <v-list-item>
      <v-list-item-action>
        <list-subtitle>
         Experience
        </list-subtitle>
      </v-list-item-action>
    <!-- Rendering Experience here -->
      <v-list-item-content>
      <v-card-subtitle>
        Experience list here
      </v-card-subtitle>
      </v-list-item-content>
     </v-list-item>
    
      <v-list-item>
      <v-list-item-action>
        <list-subtitle>
          Contact Number
        </list-subtitle>
      </v-list-item-action>
    <!-- Rendering BusinessNumber here -->
      <v-list-item-content>
      <v-card-subtitle>
         Contact info here
      </v-card-subtitle>
      </v-list-item-content>
     </v-list-item>

  </v-card>
  
   
      </v-col>
    </v-row>
        </v-card-text>
      </div>
    </v-expand-transition>
       <v-card-actions >
         <v-col cols="12" style="text-align: center">
       <v-btn color="normal" @click="$router.push('/book')">Book Now</v-btn>
       <!-- 게스트로 접속상태 일때
        <v-btn color="normal" @click="$router.push('/signup')">Post Dining</v-btn>-->
       </v-col>
    </v-card-actions>
  </v-card>
</template>
<script>
  export default {
    data: () => ({
      show: false,
      show2: false,
    }),
  }
  
</script>