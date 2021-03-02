<template>
  <v-container>
    <v-row>
      <v-col cols="12" style="text-align: center">
        <h1>Post Dining</h1>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="12">
        <v-form ref="form" v-model="valid" lazy-validation>
          <h3 class="mb-2" style="color: grey">Dining Menu Form</h3>
          <v-select
            v-model="select"
            :items="items"
            :rules="[(v) => !!v || 'Item is required']"
            label="Dining Category"
            outlined
            required
          ></v-select>

          <v-textarea
            v-model="description"
            label="Menu description"
            :rules="requiredRules"
            outlined
          ></v-textarea>

          <v-text-field
            v-model="price"
            :rules="requiredRules"
            label="Price"
            required
            outlined
          ></v-text-field>

          <v-text-field
            v-model="time"
            :rules="requiredRules"
            label="Service Time"
            required
            outlined
          ></v-text-field>
          <v-text-field
            v-model="image"
            :rules="requiredRules"
            label="Menu image (url)"
            required
            outlined
          ></v-text-field>

          <h3 class="mb-2" style="color: grey">Chef Profile Form</h3>

          <v-text-field
            v-model="nickname"
            :rules="requiredRules"
            label="Nickname"
            required
            outlined
          ></v-text-field>
          <v-text-field
            v-model="experience"
            :rules="requiredRules"
            label="Experience"
            required
            outlined
          ></v-text-field>
          <v-text-field
            v-model="introduction"
            :rules="requiredRules"
            label="Introduction"
            required
            outlined
          ></v-text-field>
          <v-text-field
            v-model="address"
            :rules="requiredRules"
            label="Address"
            required
            outlined
          ></v-text-field>
          <v-text-field
            v-model="suburb"
            :rules="requiredRules"
            label="Suburb"
            required
            outlined
          ></v-text-field>
          <v-text-field
            v-model="postcode"
            :rules="requiredRules"
            label="Postcode"
            required
            outlined
          ></v-text-field>
          <v-text-field
            v-model="state"
            :rules="requiredRules"
            label="State"
            required
            outlined
          ></v-text-field>
          <v-text-field
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
              Post
            </v-btn>
          </div>
        </v-form>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  data: () => ({
    valid: true,
    description: "",
    price: "",
    time: "",
    image: "",
    //
    nickname: "",
    experience: "",
    introduction: "",
    address: "",
    suburb: "",
    postcode: "",
    state: "",
    photo: "",
    //
    requiredRules: [(v) => !!v || "This field is required"],
    select: null,
    items: ["Category1", "Category2", "Category3","Category4","Category5","Category6"],
  }),

  methods: {
    validate() {
      const isValid = this.$refs.form.validate();
      if (isValid) {
        this.$router.push("/");
      }
    },
  },
};
</script>

<style></style>
