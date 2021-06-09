<template>
    <v-card class="mx-auto my-12" max-width="">
        <v-toolbar color="blue" dark flat>
            <v-icon left>
                mdi-account
            </v-icon>
            <v-toolbar-title class="text-center justify-center py-6"
                >Admin Dashboard</v-toolbar-title
            >
            <v-spacer></v-spacer>

            <!-- <v-text-field
        append-icon="mdi-microphone"
        class="mx-4"
        flat
        hide-details
        label="Search"
        prepend-inner-icon="mdi-magnify"
        solo-inverted
      ></v-text-field> -->

            <template v-slot:extension>
                <v-tabs v-model="tabs" centered>
                    <v-tab v-for="item in items" :key="item">
                        {{ item }}
                    </v-tab>
                </v-tabs>
            </template>
        </v-toolbar>

        <v-tabs-items v-model="tabs">
            <v-tab-item>
                <!-- <v-card flat>
          <v-card-text>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </v-card-text>
        </v-card> -->
                <v-data-table
                    :headers="headers"
                    :items="desserts"
                    sort-by=""
                    class="elevation-1"
                >
                    <template v-slot:top>
                        <v-toolbar flat>
                            <v-toolbar-title>User Manage</v-toolbar-title>
                            <v-divider class="mx-4" inset vertical></v-divider>
                            <v-spacer></v-spacer>
                            <v-dialog v-model="dialog" max-width="500px">
                                <template v-slot:activator="{ on, attrs }">
                                    <v-btn
                                        color="primary"
                                        dark
                                        class="mb-2"
                                        v-bind="attrs"
                                        v-on="on"
                                    >
                                        Add User
                                    </v-btn>
                                </template>
                                <v-card>
                                    <v-card-title>
                                        <span class="headline">{{
                                            formTitle
                                        }}</span>
                                    </v-card-title>

                                    <v-card-text>
                                        <v-container>
                                            <v-form ref="form" lazy-validation>
                                                <v-row>
                                                    <v-col
                                                        cols="12"
                                                        sm="6"
                                                        md="4"
                                                    >
                                                        <v-text-field
                                                            name="user_id"
                                                            v-model="
                                                                editedItem.user_id
                                                            "
                                                        
                                                            label="User ID"
                                                        ></v-text-field>
                                                    </v-col>
                                                    <v-col
                                                        cols="12"
                                                        sm="6"
                                                        md="4"
                                                    >
                                                        <v-text-field
                                                            name="user_type"
                                                            v-model="
                                                                editedItem.user_type
                                                            "
                                                            label="User Type"
                                                        ></v-text-field>
                                                    </v-col>
                                                    <v-col
                                                        cols="12"
                                                        sm="6"
                                                        md="4"
                                                    >
                                                        <v-text-field
                                                            name="password"
                                                            v-model="
                                                                editedItem.password
                                                            "
                                                            label="Password"
                                                        ></v-text-field>
                                                    </v-col>
                                                    <v-col
                                                        cols="12"
                                                        sm="6"
                                                        md="4"
                                                    >
                                                        <v-text-field
                                                            name="first_name"
                                                            v-model="
                                                                editedItem.first_name
                                                            "
                                                            label="Firstname"
                                                        ></v-text-field>
                                                    </v-col>
                                                    <v-col
                                                        cols="12"
                                                        sm="6"
                                                        md="4"
                                                    >
                                                        <v-text-field
                                                            name="last_name"
                                                            v-model="
                                                                editedItem.last_name
                                                            "
                                                            label="Lastname"
                                                        ></v-text-field>
                                                    </v-col>
                                                    <v-col
                                                        cols="12"
                                                        sm="6"
                                                        md="4"
                                                    >
                                                        <v-text-field
                                                            name="email"
                                                             v-model="
                                                                editedItem.email
                                                            "
                                                            label="Email"
                                                        ></v-text-field>
                                                    </v-col>
                                                    <v-col
                                                        cols="12"
                                                        sm="6"
                                                        md="4"
                                                    >
                                                        <v-text-field
                                                            name="contact_number"
                                                             v-model="
                                                                editedItem.contact_number
                                                            "
                                                            label="Contact Number"
                                                        ></v-text-field>
                                                    </v-col>
                                                </v-row>
                                            </v-form>
                                        </v-container>
                                    </v-card-text>

                                    <v-card-actions>
                                        <v-spacer></v-spacer>
                                        <v-btn
                                            color="blue darken-1"
                                            text
                                            @click="close"
                                        >
                                            Cancel
                                        </v-btn>
                                        <v-btn
                                            color="blue darken-1"
                                            text
                                            @click="saveB(editedItem.id)"
                                        >
                                            Save
                                        </v-btn>
                                    </v-card-actions>
                                </v-card>
                            </v-dialog>
                            <v-dialog v-model="dialogDelete" max-width="500px">
                                <v-card>
                                    <v-card-title class="headline"
                                        >Are you sure you want to delete this
                                        item?</v-card-title
                                    >
                                    <v-card-actions>
                                        <v-spacer></v-spacer>
                                        <v-btn
                                            color="blue darken-1"
                                            text
                                            @click="closeDelete"
                                            >Cancel</v-btn
                                        >
                                        <v-btn
                                            color="blue darken-1"
                                            text
                                            @click="
                                                deleteItemConfirm(editedItem)
                                            "
                                            >OK</v-btn
                                        >
                                        <v-spacer></v-spacer>
                                    </v-card-actions>
                                </v-card>
                            </v-dialog>
                        </v-toolbar>
                    </template>
                    <template v-slot:item.actions="{ item }">
                        <v-icon small class="mr-2" @click="editItem(item)">
                            mdi-pencil
                        </v-icon>
                        <v-icon small @click="deleteItem(item)">
                            mdi-delete
                        </v-icon>
                    </template>
                    <!-- <template v-slot:no-data>
                        <v-btn color="primary" @click="initialize">
                            Reset
                        </v-btn>
                    </template> -->
                </v-data-table>
            </v-tab-item>

            <v-tab-item>
                <v-card flat>
                    <v-card-title class="headline">
                        This page will set up to Dining List management page
                    </v-card-title>
                    <v-card-text>
                        <p>
                            Duis lobortis massa imperdiet quam. Donec vitae orci
                            sed dolor rutrum auctor. Vestibulum facilisis, purus
                            nec pulvinar iaculis, ligula mi congue nunc, vitae
                            euismod ligula urna in dolor. Praesent congue erat
                            at massa.
                        </p>

                        <p>
                            Aenean posuere, tortor sed cursus feugiat, nunc
                            augue blandit nunc, eu sollicitudin urna dolor
                            sagittis lacus. Pellentesque egestas, neque sit amet
                            convallis pulvinar, justo nulla eleifend augue, ac
                            auctor orci leo non est. Etiam sit amet orci eget
                            eros faucibus tincidunt. Donec sodales sagittis
                            magna.
                        </p>

                        <p class="mb-0">
                            Ut leo. Suspendisse potenti. Duis vel nibh at velit
                            scelerisque suscipit. Fusce pharetra convallis urna.
                        </p>
                    </v-card-text>
                </v-card>
            </v-tab-item>
            <v-tab-item>
                <v-card flat>
                    <v-card-title class="headline">
                        This page will set up to Booking management page
                    </v-card-title>
                    <v-card-text>
                        <p>
                            Maecenas ullamcorper, dui et placerat feugiat, eros
                            pede varius nisi, condimentum viverra felis nunc et
                            lorem. Sed hendrerit. Maecenas malesuada. Vestibulum
                            ullamcorper mauris at ligula. Proin faucibus arcu
                            quis ante.
                        </p>

                        <p class="mb-0">
                            Etiam vitae tortor. Curabitur ullamcorper ultricies
                            nisi. Sed magna purus, fermentum eu, tincidunt eu,
                            varius ut, felis. Aliquam lobortis. Suspendisse
                            potenti.
                        </p>
                    </v-card-text>
                </v-card>
            </v-tab-item>
        </v-tabs-items>
    </v-card>
</template>
<script>
import { createUser, getUsers, updateUser, deleteUser } from "../libs/api";
// export default {
//   data () {
//     return {
//       tabs: null,
//         items: [
//         'User', 'DiningList', 'Booking',
//       ],
//       text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
//     }
//   },
// }

export default {
    data: () => ({
        tabs: null,
        items: ["User", "Dining List", "Booking"],
        text:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",

        dialog: false,
        dialogDelete: false,
        headers: [
            { text: "User ID",align: "start", sortable: false, value: "user_id" },
            { text: "User Type", sortable: false, value: "user_type" },
            // { text: "password", sortable: false, value: "password" },
            { text: "Firstname", sortable: false, value: "first_name" },
            { text: "Lastname", sortable: false, value: "last_name" },
            { text: "Email", sortable: false, value: "email" },
            { text: "Contact number", sortable: false, value: "contact_number" },
            { text: "Actions", value: "actions", sortable: false },
        ],
        desserts: [{ asd: "ASD" }],
        editedIndex: -1,
        editedItem: {
            // user_id: "",
            // user_type:"",
            // fat: 0,
            // carbs: 0,
            // protein: 0,
        },
        defaultItem: {
            // name: "",
            // calories: 0,
            // fat: 0,
            // carbs: 0,
            // protein: 0,
        },
    }),

    computed: {
        formTitle() {
            return this.editedIndex === -1 ? "New User" : "Edit User";
        },
    },

    watch: {
        dialog(val) {
            val || this.close();
        },
        dialogDelete(val) {
            val || this.closeDelete();
        },
    },

    // created() {
    //     this.initialize();
    // },
    mounted() {
        getUsers().then((res) => {
            this.desserts = res.data.users;
        });
    },

    methods: {
        saveB(id) {
            if (this.editedIndex === -1) this.createUserA();
            else this.updateUserA(id);
            this.close();
        },
        deleteUserA(id) {
            deleteUser(id).then(() => {
                console.log("complete");
            });
        },
        updateUserA(id) {
            updateUser(new FormData(this.$refs.form.$el), id).then(() => {
                console.log("complete");
            });
        },
        createUserA() {
            createUser(new FormData(this.$refs.form.$el)).then(() => {
                console.log("complete");
                this.close();
            });
        },
        // initialize() {
        //     this.desserts = [
        //         {
        //             id: 5,
        //             name: "Dain Hong",
        //             calories: 159,
        //             fat: 6.0,
        //             carbs: 24,
        //             protein: 4.0,
        //         },
        //         {
        //             name: "Harry Potter",
        //             calories: 237,
        //             fat: 9.0,
        //             carbs: 37,
        //             protein: 4.3,
        //         },
        //         {
        //             name: "Eric Clapton",
        //             calories: 262,
        //             fat: 16.0,
        //             carbs: 23,
        //             protein: 6.0,
        //         },
        //         {
        //             name: "Zim Morison",
        //             calories: 305,
        //             fat: 3.7,
        //             carbs: 67,
        //             protein: 4.3,
        //         },
        //     ];
        // },

        editItem(item) {
            this.editedIndex = this.desserts.indexOf(item);
            this.editedItem = Object.assign({}, item);
            this.dialog = true;
        },

        deleteItem(item) {
            this.editedIndex = this.desserts.indexOf(item);
            this.editedItem = Object.assign({}, item);
            this.dialogDelete = true;
        },

        deleteItemConfirm(item) {
            console.log(item);
            this.deleteUserA(item.id);
            this.desserts.splice(this.editedIndex, 1);
            this.closeDelete();
        },

        close() {
            this.dialog = false;
            this.$nextTick(() => {
                this.editedItem = Object.assign({}, this.defaultItem);
                this.editedIndex = -1;
            });
        },

        closeDelete() {
            this.dialogDelete = false;
            this.$nextTick(() => {
                this.editedItem = Object.assign({}, this.defaultItem);
                this.editedIndex = -1;
            });
        },

        save() {
            if (this.editedIndex > -1) {
                Object.assign(this.desserts[this.editedIndex], this.editedItem);
            } else {
                this.desserts.push(this.editedItem);
            }
            this.close();
        },
    },
};
</script>