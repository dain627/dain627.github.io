<template>
    <div>
        <v-alert v-if="toggle == true" type="success"
            >Your Profile is created!</v-alert
        >

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
    </div>
</template>

<script>
import { postChefProfileApi } from "../libs/api";
export default {
    data: () => ({
        valid: true,
        businessname: "",
        bnameRules: [
            (v) => !!v || "Business Name is required",
            (v) =>
                (v && v.length <= 10) ||
                "Business Name must be less than 10 characters",
        ],
        experience: "",
        introduction: "",
        contactnumber: "",
        photo: "",
        //
        requiredRules: [(v) => !!v || "This field is required"],
        toggle: false,
    }),

    methods: {
        validate() {
            const isValid = this.$refs.form.validate();
            if (isValid) {
                postChefProfileApi(new FormData(this.$refs.form.$el))
                    .then((response) => {
                        console.log(response);
                        this.toggle = true;
                        setTimeout(() => (this.toggle = false), 2000);
                        this.$router.push("/my");
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
