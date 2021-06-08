<template>
    <div class="mydining">
        <v-alert v-if="toggle == true" type="success"
            >booking is deleted.</v-alert
        >
        <!----------------My Infomation ----------------->

        <v-container>
            <v-card class="mx-auto" outlined>
                <v-card-title>My Profile</v-card-title>
                <v-row>
                    <v-col cols="12" style="text-align: right">
                        <v-btn
                            dark
                            icon
                            class="mr-4"
                            @click="$router.push('/profile')"
                        >
                            <v-icon color="black">mdi-pencil</v-icon>
                        </v-btn>

                        <!-- <v-btn dark icon>
                            <v-icon color="black">mdi-delete</v-icon>
                        </v-btn> -->
                    </v-col>
                </v-row>
                <v-col cols="12" style="text-align: center">
                    <div>
                        <img
                            style="width: 150px; height: 150px; border-radius: 50%"
                            :src="avatar"
                        />
                    </div>
                </v-col>
                <v-list-item three-line>
                    <v-list-item-content>
                        <v-card-text>
                            <h3>Business Name</h3>
                            <v-card-text>{{ chefname }}</v-card-text>
                            <h3>Experience</h3>
                            <v-card-text>{{ experience }}</v-card-text>
                            <h3>Introduction</h3>
                            <v-card-text>{{ introduction }}</v-card-text>
                            <h3>Business Number</h3>
                            <v-card-text>{{ businessnumber }}</v-card-text>
                        </v-card-text>
                    </v-list-item-content>
                </v-list-item>
            </v-card>
        </v-container>

        <!----------------Booking CRUD Table ----------------->
        <v-data-table
            :headers="headers"
            :items="$store.state.bookingCustomerList"
            :search="search"
            class="elevation-1"
        >
            <template v-slot:top>
                <v-card-title>Current Booked Customers</v-card-title>
                <v-toolbar flat>
                    <!-- <v-toolbar-title class="subtitle-2">booking list</v-toolbar-title> -->
                    <v-spacer></v-spacer>
                    <!--------- Search data table ---------->
                    <v-card-title>
                        <v-text-field
                            v-model="search"
                            append-icon="mdi-magnify"
                            label="Search"
                            single-line
                            hide-details
                        ></v-text-field>
                        <v-divider class="mx-2" inset vertical></v-divider>
                    </v-card-title>

                    <!-- <v-dialog v-model="dialog" max-width="500px">
                        <v-card>
                            <v-card-title>
                                <span class="headline">{{ formTitle }}</span>
                            </v-card-title>
                            <v-card-actions>
                                <v-spacer></v-spacer>
                                <v-btn color="blue darken-1" text @click="close"
                                    >Cancel</v-btn
                                >
                                <v-btn color="blue darken-1" text @click="save"
                                    >Save</v-btn
                                >
                            </v-card-actions>
                        </v-card>
                    </v-dialog> -->
                    <!----------------- Delete Table Data ------------------->
                    <!-- <v-dialog v-model="dialogDelete" max-width="500px">
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
                                    @click="deleteItemConfirm"
                                    >OK</v-btn
                                >
                                <v-spacer></v-spacer>
                            </v-card-actions>
                        </v-card>
                    </v-dialog> -->
                </v-toolbar>
            </template>

            <template v-slot:item.actions="{ item }">
                <!-- <v-icon small class="mr-2" @click="editItem(item)">mdi-pencil</v-icon> -->
                <v-icon small @click="bookingCancel(item.id)"
                    >mdi-delete</v-icon
                >
            </template>
       
        </v-data-table>
    </div>
</template>
<script>
import {
    getBookingListApi,
    getChefProfileApi,
    deleteBookingApi,
} from "../libs/api";
export default {
    data: () => ({
        // dialog: false,
        // dialogDelete: false,
        // data search
        search: "",
        //chef profile
        avatar:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQOWat6S7Xp6x5R_KgSXIdQKd8MZBmlfa-VMINMhHaGQ0yfX8AQpWSKWs7xAa9zlEDkjPs&usqp=CAU",
        chefname: "",
        experience: "",
        introduction: "",
        businessnumber: "",
        //booking list
        headers: [
            { text: "Menu Title", value: "dining_lists.menu_title" },
            { text: "Reservation Name List", value: "reservation_name" },
            { text: "Booking Date", value: "booking_date" },
            { text: "Mobile", value: "reservation_number" },
            { text: "Email", value: "reservation_email" },
            { text: "Note", value: "note" },
            { text: "Actions", value: "actions", sortable: false },
        ],
        BookingCustomerList: [],
        editedIndex: -1,
        editedItem: {
            menutitle: "Image here",
            firstname: "",
            lastname: "",
            bookingdate: 0,
            mobile: 0,
            email: 0,
            note: 0,
        },
        defaultItem: {
            menutitle: "Image here",
            firstname: "",
            lastname: "",
            bookingdate: 0,
            mobile: 0,
            email: 0,
            note: 0,
        },
        toggle: false,
    }),
    computed: {
        formTitle() {
            return this.editedIndex === -1 ? "New Item" : "Edit Item";
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
    created() {
        this.initialize();
    },
    methods: {
        initialize() {},
        // editItem (item) {
        //   this.editedIndex = this.BookingCustomerList.indexOf(item)
        //   this.editedItem = Object.assign({}, item)
        //   this.dialog = true
        // },
        // deleteItem(item) {
        //     this.editedIndex = this.BookingCustomerList.indexOf(item);
        //     this.editedItem = Object.assign({}, item);
        //     this.dialogDelete = true;
        // },
        // deleteItemConfirm() {
        //     this.BookingCustomerList.splice(this.editedIndex, 1);
        //     this.closeDelete();
        // },
        // close() {
        //     this.dialog = false;
        //     this.$nextTick(() => {
        //         this.editedItem = Object.assign({}, this.defaultItem);
        //         this.editedIndex = -1;
        //     });
        // },
        // closeDelete() {
        //     this.dialogDelete = false;
        //     this.$nextTick(() => {
        //         this.editedItem = Object.assign({}, this.defaultItem);
        //         this.editedIndex = -1;
        //     });
        // },
        bookingCancel(id) {
            deleteBookingApi(id).then((res) => {
                console.log(res);
                this.$store.state.bookingCustomerList = this.$store.state.bookingCustomerList.filter(
                    (val) => val.id != id
                );
                this.toggle = true;
                setTimeout(() => (this.toggle = false), 2000);
            });
        },
        // save () {
        //   if (this.editedIndex > -1) {
        //     Object.assign(this.BookingCustomerList[this.editedIndex], this.editedItem)
        //   } else {
        //     this.desserts.push(this.editedItem)
        //   }
        //   this.close()
        // },
    },
    mounted() {
        getBookingListApi()
            .then((res) => {
                this.$store.state.bookingCustomerList = res.data.bookingList;
            })
            .catch((err) => {
                console.log(err);
            });
        getChefProfileApi().then((res) => {
            const {
                business_name,
                business_number,
                introduction,
                experience,
                identify_photo,
            } = res.data.chef_profile;
            this.avatar = identify_photo;
            this.chefname = business_name;
            this.experience = experience;
            this.introduction = introduction;
            this.businessnumber = business_number;
        });
    },
};
</script>
