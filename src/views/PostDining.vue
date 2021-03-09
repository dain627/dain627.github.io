<template>
  <v-container>
    <v-row>
      <v-col cols="12" style="text-align: center">
        <h1>Post Dining</h1>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="12">
        <!-- ** into Dining table/Chef Profile table ** -->
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
            label="Menu List & Description"
            :rules="requiredRules"
            required
            outlined
          ></v-textarea>
           <v-text-field
            v-model="price"
            :rules="requiredRules"
            label="Menu Title"
            required
            outlined
          ></v-text-field>
          <v-text-field
            v-model="price"
            :rules="requiredRules"
            label="Price (AU)"
            required
            outlined
          ></v-text-field>
          <v-text-field
            v-model="location"
            :rules="requiredRules"
            label="Location"
            required
            outlined
          ></v-text-field>
      <v-subheader class="pa-0">
       Let customers know what your schedule looks like and when you are available to provide this service.
      </v-subheader>
          <v-textarea
            v-model="available"
            :rules="requiredRules"
            label="Set your Available Dining Day & Time"
            required
            outlined
          ></v-textarea>
          <v-alert
      border="top"
      colored-border
      type="info"
      elevation="2"
      color="orange">
Please note

Customers will request to book your dining service. You’ll be notified of new booking requests and given the opportunity to confirm or reject the booking.

You can ask questions and discuss requirements with the customer before making this decision.
      </v-alert>
          <!-- <v-text-field
            v-model="image"
            :rules="requiredRules"
            label="Main Image (url)"
            required
            outlined
          ></v-text-field> -->

          <h3 class="mb-2" style="color: grey">Chef Profile Form</h3>

          <v-text-field
            v-model="businessname"
            :rules="requiredRules"
            label="Business or chef Name"
            required
            outlined
          ></v-text-field>
          <v-textarea
            v-model="experience"
            :rules="requiredRules"
            label="Experience"
            required
            outlined
          ></v-textarea>
          <v-textarea
            v-model="introduction"
            :rules="requiredRules"
            label="Self-introduction"
            required
            outlined
          ></v-textarea>
          <v-text-field
            v-model="contactnumber"
            :rules="requiredRules"
            label="Contact Number"
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
    location: "",
    available: "",
    image: "",
    //
    businessname: "",
    experience: "",
    introduction: "",
    contactnumber:"",
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
