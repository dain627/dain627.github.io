<template>
    <v-container>
        <v-row>
            <v-col cols="12" style="text-align: center">
                <h1>Update Dining Menu</h1>
            </v-col>
        </v-row>
        <v-row>
            <v-col cols="12">
                <!-- ** into Dining table/Chef Profile table ** -->
                <v-form ref="form" v-model="valid" lazy-validation>
                    <h3 class="mb-2" style="color: grey">Edite Form</h3>
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
                        name="menu_images"
                        v-model="image"
                        :rules="requiredRules"
                        label="Menu Image (url)"
                        required
                        outlined
                    ></v-text-field>
                    <v-textarea
                        name="asd"
                        v-model="description"
                        label="Menu List & Description"
                        :rules="requiredRules"
                        required
                        outlined
                    ></v-textarea>
                    <v-text-field
                        name="menu_title"
                        v-model="title"
                        :rules="requiredRules"
                        label="Menu Title"
                        required
                        outlined
                    ></v-text-field>
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
                        name="avaiilability"
                        v-model="available"
                        :rules="requiredRules"
                        label="Set your Available Dining Day & Time"
                        required
                        outlined
                    ></v-textarea>
                    <!-- <v-text-field
            v-model="available"
            :rules="requiredRules"
            label="Available Dining Day & Time"
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
                            UPDATE
                        </v-btn>
                    </div>
                </v-form>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
import { updateMenuApi } from "../libs/api";
export default {
    data: () => ({
        valid: true,
        description: "",
        title: "",
        price: "",
        location: "",
        available: "",
        image: "",
        //
        businessname: "",
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
        items: [
            "Category1",
            "Category2",
            "Category3",
            "Category4",
            "Category5",
            "Category6",
        ],
    }),

    methods: {
        validate() {
            const isValid = this.$refs.form.validate();
            if (isValid) {
                this.$router.push("/browse");
            }
        },
        updateMenu() {
            updateMenuApi(
                new FormData(this.$refs.form.$el),
                this.$route.params.id
            ).then(() => {
                this.$router.go(-1);
            });
        },
    },
};
</script>

<style></style>
