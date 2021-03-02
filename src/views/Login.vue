<template>
  <v-container>
    <v-row class="my-6">
      <v-col cols="12" style="text-align: center">
        <h1>Login</h1>
      </v-col>
    </v-row>
    <v-form ref="form" v-model="valid" lazy-validation>
      <v-text-field
        v-model="name"
        :rules="nameRules"
        label="Name"
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

      <div style="text-align: center">
        <v-btn
          :disabled="!valid"
          color="normal"
          class="mr-4"
          @click="validate"
        >
          Login
        </v-btn>
        <v-btn @click="$router.push('/signup')">Sign up</v-btn>
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
    select: null,
    items: ["Item 1", "Item 2", "Item 3", "Item 4"],
    checkbox: false,
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
