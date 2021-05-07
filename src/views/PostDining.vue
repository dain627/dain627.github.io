<template>
    <v-container>
        <v-row>
            <v-col cols="12" style="text-align: center">
                <h1>Post Dining</h1>
            </v-col>
        </v-row>
        <v-row>
            <v-col cols="12">
                <!--  into Dining table -->
                <v-form ref="form" v-model="valid" lazy-validation>
                    <h3 class="mb-2" style="color: grey">Dining Menu Form</h3>
                    <v-select
                        name="dining_category"
                        v-model="select"
                        :items="items"
                        :rules="[(v) => !!v || 'Item is required']"
                        label="Dining Category"
                        outlined
                        required
                    ></v-select>
                    <v-text-field
                        name="menu_image"
                        v-model="image"
                        :rules="requiredRules"
                        label="Menu Image (url)"
                        required
                        outlined
                    ></v-text-field>
                    <v-text-field
                        name="menu_title"
                        v-model="title"
                        :rules="requiredRules"
                        label="Menu Title"
                        required
                        outlined
                    ></v-text-field>
                    <v-textarea
                        name="menu_description"
                        v-model="description"
                        label="Menu List & Description"
                        :rules="requiredRules"
                        required
                        outlined
                    ></v-textarea>
                    <v-text-field
                        name="price"
                        v-model="price"
                        :rules="requiredRules"
                        label="Price (AU)"
                        required
                        outlined
                    ></v-text-field>
                    <v-text-field
                        name="location"
                        v-model="location"
                        :rules="requiredRules"
                        label="Location"
                        required
                        outlined
                    ></v-text-field>
                    <v-subheader class="pa-0">
                        Let customers know what your schedule looks like and
                        when you are available to provide this service.
                    </v-subheader>
                    <v-textarea
                        name="availability"
                        v-model="availability"
                        :rules="requiredRules"
                        label="Set your Available Dining Date & Time"
                        required
                        outlined
                    ></v-textarea>
                    <v-alert
                        border="top"
                        colored-border
                        type="info"
                        elevation="2"
                        color="orange"
                    >
                        Please note Customers will request to book your dining
                        service. You’ll be notified of new booking requests and
                        given the opportunity to confirm or reject the booking.
                        You can ask questions and discuss requirements with the
                        customer before making this decision.
                    </v-alert>
                    <!--i nto Chef Profile table -->

                    <!-- <h3 class="mb-2" style="color: grey">Chef Profile Form</h3>

          <v-text-field
            name="business_name"
            v-model="businessname"
            :rules="requiredRules"
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
          ></v-text-field> -->
                    <!-- <v-text-field
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
          ></v-text-field> -->
                    <!-- <v-text-field
            name="identify_photo"
            v-model="photo"
            :rules="requiredRules"
            label="Identify Photo (url)"
            required
            outlined
          ></v-text-field> -->
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
import { postDiningMenuApi } from "../libs/api";
export default {
    data: () => ({
        valid: true,
        title: "",
        description: "",
        price: "",
        location: "",
        availability: "",
        image: "",
        // //
        // businessname: "",
        // experience: "",
        // introduction: "",
        // contactnumber:"",
        // photo: "",
        //
        requiredRules: [(v) => !!v || "This field is required"],
        select: null,
        items: [
            "category1",
            "category2",
            "category3",
            "category4",
            "category5",
            "category6",
        ],
    }),

    methods: {
        validate() {
            const isValid = this.$refs.form.validate();
            if (isValid) {
                //define api
                postDiningMenuApi(new FormData(this.$refs.form.$el))
                    .then((response) => {
                        console.log(response);
                        this.$router.push("/bowse");
                    })
                    .catch((error) => {
                        const errors = error.response.data.errors;
                        alert(errors[Object.keys(errors)[0]][0]);
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
