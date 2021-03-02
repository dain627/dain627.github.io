<template>
  <v-container>
    <v-row class="my-6">
      <v-col cols="12" style="text-align: center">
        <h1>Register</h1>
      </v-col>
    </v-row>
    <v-form ref="form" v-model="valid" lazy-validation>
      <v-text-field
        v-model="name"
        :rules="nameRules"
        label="User Name"
        required
        outlined
      ></v-text-field>

      <v-text-field
        v-model="password"
        :rules="passwordRules"
        label="Password"
        type="password"
        required
        outlined
      ></v-text-field>

      <v-text-field
        v-model="firstName"
        :rules="requiredRules"
        label="First Name"
        required
        outlined
      ></v-text-field>

      <v-text-field
        v-model="lastName"
        :rules="requiredRules"
        label="Last Name"
        required
        outlined
      ></v-text-field>
      <v-text-field
        v-model="email"
        :rules="emailRules"
        label="Email"
        required
        outlined
      ></v-text-field>
      <v-text-field
        v-model="contact"
        :rules="requiredRules"
        label="Contact Number"
        required
        outlined
      ></v-text-field>

      <v-select
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
export default {
  data: () => ({
    valid: true,
    name: "",
    nameRules: [
      (v) => !!v || "Name is required",
      (v) => (v && v.length <= 10) || "Name must be less than 10 characters",
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
    items: ["Chef", "Customer"],
  }),

  methods: {
    validate() {
      const isValid = this.$refs.form.validate();
      if (isValid) {
        this.$router.push("/");
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
