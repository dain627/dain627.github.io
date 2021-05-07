<template>
    <v-container>
        <v-row>
            <v-col cols="12" style="text-align: center">
                <h1>Book Dining</h1>
            </v-col>
        </v-row>
        <v-row>
            <v-col cols="12">
                <v-form ref="form" v-model="valid" lazy-validation>
                    <v-text-field
                        v-model="fullname"
                        :rules="requiredRules"
                        label="Full Name"
                        required
                        outlined
                    ></v-text-field>
                    <!-- <v-text-field
            v-model="lastname"
            :rules="requiredRules"
            label="Last Name"
            required
            outlined
          ></v-text-field> -->
                    <v-text-field
                        v-model="mobile"
                        :rules="requiredRules"
                        label="Mobile"
                        required
                        outlined
                    ></v-text-field>
                    <v-text-field
                        v-model="email"
                        :rules="requiredRules"
                        label="Email"
                        required
                        outlined
                    ></v-text-field>
                    <!-- <v-select
            v-model="select1"
            :items="items1"
            :rules="[(v) => !!v || 'Chef is required']"
            label="Select Chef"
            outlined
            required
          ></v-select>
          <v-select
            v-model="select2"
            :items="items2"
            :rules="[(v) => !!v || 'Menu is required']"
            label="Select Menu"
            outlined
            required
          ></v-select> -->

                    <v-row justify="center">
                        <v-col cols="12">
                            <v-dialog
                                ref="dialog"
                                v-model="modal"
                                :return-value.sync="date"
                                persistent
                                width="290px"
                            >
                                <template v-slot:activator="{ on, attrs }">
                                    <v-text-field
                                        v-model="datetime"
                                        :rules="requiredRules"
                                        label="Picker Date"
                                        prepend-icon="mdi-calendar"
                                        readonly
                                        v-bind="attrs"
                                        v-on="on"
                                        required
                                    ></v-text-field>
                                </template>
                                <v-date-picker v-model="datetime" scrollable>
                                    <v-spacer></v-spacer>
                                    <v-btn
                                        text
                                        color="normal"
                                        @click="modal = false"
                                    >
                                        Cancel
                                    </v-btn>
                                    <v-btn
                                        text
                                        color="normal"
                                        @click="$refs.dialog.save(date)"
                                    >
                                        OK
                                    </v-btn>
                                </v-date-picker>
                            </v-dialog>
                        </v-col>
                    </v-row>
                    <v-subheader class="pa-0"> </v-subheader>
                    <v-textarea
                        v-model="available"
                        label="Message"
                        outlined
                    ></v-textarea>

                    <div style="text-align: center">
                        <v-btn
                            :disabled="!valid"
                            color="normal"
                            class="mr-4"
                            @click="booking"
                        >
                            Book
                        </v-btn>
                    </div>
                </v-form>
            </v-col>
        </v-row>
    </v-container>
    <!-- script
export default {
  data: () => ({
    valid: true,
    //
    requiredRules: [(v) => !!v || "This field is required"],
    select1: null,
    select2: null,
    items1: ["Chef 1", "Chef 2", "Chef 3"],
    items2: ["Food 1", "Food 2", "Food 3"],
    date: new Date().toISOString().substr(0, 10),
    menu: false,
    modal: false,
    menu2: false,
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
/script -->
</template>

<script>
import { bookingApi } from "../libs/api";
export default {
    data: () => ({
        valid: true,
        fullname: "",
        mobile: "",
        email: "",
        datetime: "",
        requiredRules: [(v) => !!v || "This field is required"],
    }),

    methods: {
        validate() {
            const isValid = this.$refs.form.validate();
            if (isValid) {
                this.$router.push("/");
            }
        },
        booking() {
            this.validate();
            bookingApi(
                new FormData(this.$refs.form.$el),
                this.$route.params.id
            ).then((res) => {
                console.log(res);
                alert("booking success!");
                this.$router.go(-1);
            });
        },
    },
};
</script>

<style></style>
