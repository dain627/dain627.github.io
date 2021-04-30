<template>
  <v-container>
    <v-row>
      <v-col cols="12" style="text-align: center">
        <h1>Chef Profile</h1>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="12">
         <!--into Chef Profile table -->
        <v-form ref="form" v-model="valid" lazy-validation>
          <!-- <h3 class="mb-2" style="color: grey">Chef Profile Form</h3> -->
          <v-text-field
            name="business_name"
            v-model="businessname"
            :rules="bnameRules"
            label="Business or chef Name"
            required
            outlined
          ></v-text-field>
          <v-textarea
            name="experience"
            v-model="experience"
            :rules="requiredRules"
            label="Experience"
            required
            outlined
          ></v-textarea>
          <v-textarea
            name="introduction"
            v-model="introduction"
            :rules="requiredRules"
            label="Self-introduction"
            required
            outlined
          ></v-textarea>
          <v-text-field
            name="business_number"
            v-model="contactnumber"
            :rules="requiredRules"
            label="Business Number"
            required
            outlined
          ></v-text-field>
          <v-text-field
            name="identify_photo"
            v-model="photo"
            :rules="requiredRules"
            label="Identify Photo (url)"
            required
            outlined
          ></v-text-field>
          <div style="text-align: center">
            <v-btn
              :disabled="!valid"
              color="normal"
              class="mr-4"
              @click="validate"
            >
              Register
            </v-btn>
          </div>
        </v-form>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import axios from 'axios';
export default {
  data: () => ({
    valid: true,
    businessname: "",
    bnameRules: [
      (v) => !!v || "Business Name is required",
      (v) => (v && v.length <= 12) || "Business Name must be less than 10 characters",
    ],
    experience: "",
    introduction: "",
    contactnumber:"",
    photo: "",
    //
    requiredRules: [(v) => !!v || "This field is required"],
  }),

  methods: {
    validate() {
      const isValid = this.$refs.form.validate();
      if (isValid) {
        //define api
        // GETusershow api  요청 함꼐 하는법
          // axios.get('http://localhost:8090/api/user')
          axios.post('http://localhost:8090/api/dining/chef', new FormData(this.$refs.form.$el))
        .then(function (response) {
          alert("Your Profile is created!")

          // this.$router.push("/my");
          console.log(response);
          
        })
        .catch(function (error) {
          const errors = error.response.data.errors;
          alert(
            errors[Object.keys(errors)[0]][0]
          );
        });
        // this.$router.push("/");
      }
    },
    // reset() {
    //   this.$refs.form.reset();
    //   this.$refs.form.resetValidation();
    // },
  },
};
</script>

<style></style>
