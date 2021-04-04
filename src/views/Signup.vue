<template>
  <v-container>
    <v-row class="my-6">
      <v-col cols="12" style="text-align: center">
        <h1>Register</h1>
      </v-col>
    </v-row>
    <v-form ref="form" v-model="valid" lazy-validation>
      <v-text-field
        name="user_id"
        v-model="name"
        :rules="nameRules"
        label="User Name"
        required
        outlined
      ></v-text-field>

      <v-text-field
        name="password"
        v-model="password"
        :rules="passwordRules"
        label="Password"
        type="password"
        required
        outlined
      ></v-text-field>

      <v-text-field
        name="first_name"
        v-model="firstName"
        :rules="requiredRules"
        label="First Name"
        required
        outlined
      ></v-text-field>

      <v-text-field
        name="last_name"
        v-model="lastName"
        :rules="requiredRules"
        label="Last Name"
        required
        outlined
      ></v-text-field>
      <v-text-field
        name="email"
        v-model="email"
        :rules="emailRules"
        label="Email"
        required
        outlined
      ></v-text-field>
      <v-text-field
        name="contact_number"
        v-model="contact"
        :rules="requiredRules"
        label="Contact Number"
        required
        outlined
      ></v-text-field>

      <v-select
        name="user_type"
        v-model="select"
        :items="items"
        :rules="[(v) => !!v || 'Item is required']"
        label="Member Type"
        outlined
        required
      ></v-select>

      <div style="text-align: center">
        <v-btn
          :disabled="!valid"
          color="normal"
          class="mr-4"
          @click="validate"
        >
          Sign up
        </v-btn>
      </div>

      <!-- <v-btn color="error" class="mr-4" @click="reset">
        Reset Form
      </v-btn> -->
    </v-form>
  </v-container>
</template>

<script>
import axios from 'axios';
export default {
  data: () => ({
    valid: true,
    name: "",
    nameRules: [
      (v) => !!v || "Name is required",
      (v) => (v && v.length <= 12) || "Name must be less than 10 characters",
    ],
    password: "",
    passwordRules: [
      (v) => !!v || "Password is required",
      (v) => (v && v.length >= 8) || "Password must be more than 8 characters",
    ],
    emailRules: [
      (v) => !!v || "E-mail is required",
      (v) => /.+@.+\..+/.test(v) || "E-mail must be valid",
    ],
    requiredRules: [(v) => !!v || "This field is required"],
    firstName: "",
    lastName: "",
    email: "",
    contact: "",
    select: null,
    items: ["chef", "customer"],
  }),

  methods: {
    validate() {
      const isValid = this.$refs.form.validate();
      if (isValid) {
        axios.post('http://localhost:8090/api/user', new FormData(this.$refs.form.$el))
        .then(function (response) {

          console.log(response);
          this.$router.push("/");
          
        })
        .catch(function (error) {
          const errors = error.response.data.errors;
          alert(

            errors[Object.keys(errors)[0]][0]
          );
        });
        
      }
    },
    reset() {
      this.$refs.form.reset();
      this.$refs.form.resetValidation();
    },
  },
};
</script>

<style></style>
