
<template>
  <div class="mydining">
    <!----------------My Infomation ----------------->
     <v-container>
      <v-card class="mx-auto" outlined>
      <v-card-title>My Information</v-card-title>
        <v-col cols="12" style="text-align: center">
        <v-list-item-avatar size="150">
          <v-img :src="avatar"></v-img>
        </v-list-item-avatar>
        </v-col>
      <v-list-item three-line>
        <v-list-item-content>
        <v-card-text>
         <h3>Chef Name</h3>
        <p>{{ chefname }}</p>
         <h3>Contact Number</h3>
        <p>{{ contactnumber }}</p>
         <h3>Email</h3>
        <p>{{ email }}</p>
        <h3>Experience</h3>
        <p>{{ experience }}</p>
        <h3>Introduction</h3>
        <p>{{ introduction }}</p>
        <h3>Contact Number</h3>
        <p>{{ contactnumber }}</p>
        <h3>Address</h3>
        <p>{{ address }}</p>
         <h3>Suburb</h3>
        <p>{{ suburb }}</p>
         <h3>Postcode</h3>
        <p>{{ postcode }}</p>
         <h3>State</h3>
        <p>{{ state }}</p>
      </v-card-text>
        </v-list-item-content>
      </v-list-item>
    </v-card>

    <!-- <v-card class="my-4" outlined>
      <v-card-title>My Dining Service</v-card-title>
      <v-card-text>
         <h3>Chef Name</h3>
        <p>{{ chefname }}</p>
         <h3>Contact Number</h3>
        <p>{{ contactnumber }}</p>
         <h3>Email</h3>
        <p>{{ email }}</p>
        <h3>Introduction</h3>
        <p>{{ introduction }}</p>
        <h3>Contact Number</h3>
        <p>{{ contactnumber }}</p>
        <h3>Address</h3>
        <p>{{ address }}</p>
         <h3>Suburb</h3>
        <p>{{ suburb }}</p>
         <h3>Postcode</h3>
        <p>{{ postcode }}</p>
         <h3>State</h3>
        <p>{{ state }}</p>
      </v-card-text>
    </v-card> -->

  </v-container>  
   
    <!----------------Booking CRUD Table ----------------->
    <v-data-table :headers="headers" :items="BookingCustomerList" :search="search" class="elevation-1">
    <template v-slot:top>
       <v-card-title>Current Booked Customers</v-card-title>
      <v-toolbar flat>
        <!-- <v-toolbar-title class="subtitle-2">booking list</v-toolbar-title> -->
        <v-spacer></v-spacer>
        <!--------- Search data table ---------->
        <v-card-title>
            <v-text-field v-model="search" append-icon="mdi-magnify" label="Search" single-line hide-details></v-text-field>
            <v-divider class="mx-2" inset vertical></v-divider>
        </v-card-title>
        
        <v-dialog v-model="dialog" max-width="500px">
          <v-card>
            <v-card-title>
              <span class="headline">{{ formTitle }}</span>
            </v-card-title>

            <!----------------- Edit Table Data ------------------->
            <v-card-text>
              <v-container>
                <v-row>
                  <v-col cols="12" sm="6" md="4">
                    <v-text-field v-model="editedItem.roomimage" label="Menu Title"></v-text-field>
                  </v-col>
                  <v-col cols="12" sm="6" md="4">
                    <v-text-field v-model="editedItem.roomimage" label="First Name"></v-text-field>
                  </v-col>
                  <v-col cols="12" sm="6" md="4">
                    <v-text-field v-model="editedItem.roomtype" label="Last Name"></v-text-field>
                  </v-col>
                  <v-col cols="12" sm="6" md="4">
                    <v-text-field v-model="editedItem.bookingdate" label="BookingDate"></v-text-field>
                  </v-col>
                  <v-col cols="12" sm="6" md="4">
                    <v-text-field v-model="editedItem.numberofadult" label="Mabile"></v-text-field>
                  </v-col>
                  <v-col cols="12" sm="6" md="4">
                    <v-text-field v-model="editedItem.numberofchildren" label="Email"></v-text-field>
                  </v-col>
                  <v-col cols="12" sm="6" md="4">
                    <v-text-field v-model="editedItem.checkindate" label="Note"></v-text-field>
                  </v-col>
                </v-row>
              </v-container>
            </v-card-text>
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn color="blue darken-1" text @click="close">Cancel</v-btn>
              <v-btn color="blue darken-1" text @click="save">Save</v-btn>
            </v-card-actions>
          </v-card>
        </v-dialog>
          <!----------------- Delete Table Data ------------------->
        <v-dialog v-model="dialogDelete" max-width="500px">
          <v-card>
            <v-card-title class="headline">Are you sure you want to delete this item?</v-card-title>
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn color="blue darken-1" text @click="closeDelete">Cancel</v-btn>
              <v-btn color="blue darken-1" text @click="deleteItemConfirm">OK</v-btn>
              <v-spacer></v-spacer>
            </v-card-actions>
          </v-card>
        </v-dialog>
      </v-toolbar>
    </template>

    <template v-slot:item.actions="{ item }">
      <!-- <v-icon small class="mr-2" @click="editItem(item)">mdi-pencil</v-icon> -->
      <v-icon small @click="deleteItem(item)">mdi-delete</v-icon>
    </template>
    <template v-slot:no-data>
      <v-btn color="primary" @click="initialize">Reset</v-btn>
    </template>
  </v-data-table>
  </div>
</template>
<script>
  export default {
    data: () => ({
      dialog: false,
      dialogDelete: false,
      // data search
      search: '',
      avatar:
        "https://www.epicure.com.au/wp-content/uploads/2017/08/ben_swinbourne_resized.png",
      chefname:'Chef Name here',
      headers: [
        { text: 'Menu Title', value: 'menutitle' },
        { text: 'First Name', value: 'firstname' },
        { text: 'Last Name', value: 'lastname' },
        { text: 'Booking Date', value: 'bookingdate' },
        { text: 'Mobile', value: 'mobile' },
        { text: 'Email', value: 'email' },
        { text: 'Note', value: 'note' },
        { text: 'Actions', value: 'actions', sortable: false },
      ],
      BookingCustomerList: [],
      editedIndex: -1,
      editedItem: {
        menutitle: 'Image here',
        firstname: '',
        lastname: '',
        bookingdate: 0,
        mobile: 0,
        email: 0,
        note: 0,
      },
     defaultItem: {
        menutitle: 'Image here',
        firstname: '',
        lastname: '',
        bookingdate: 0,
        mobile: 0,
        email: 0,
        note: 0,
      },
    }),
    computed: {
      formTitle () {
        return this.editedIndex === -1 ? 'New Item' : 'Edit Item'
      },
    },
    watch: {
      dialog (val) {
        val || this.close()
      },
      dialogDelete (val) {
        val || this.closeDelete()
      },
    },
    created () {
      this.initialize()
    },
    methods: {
      initialize () {
        this.BookingCustomerList = [
          {
            menutitle:'Dinner Special Four Course',
            firstname: 'Dain',
            lastname: 'Hong',
            bookingdate: '09/03/21',
            mobile: '0400 000 000',
            email: 'dainhong@gmail.com',
            note: 'Dinner 6pm'
          },
          {
            menutitle:'Dinner Special Three Course',
            firstname: 'Dain',
            lastname: 'Kim',
            bookingdate: '10/03/21',
            mobile: '0400 000 000',
            email: 'dainhong@gmail.com',
            note: 'Dinner 7pm'
          },
          {
            menutitle:'High Tea Three Course',
            firstname: 'Dain',
            lastname: 'Lee',
            bookingdate: '09/03/21',
                      mobile: '0400 000 000',
            email: 'dainhong@gmail.com',
            note: 'Lunch 12pm'
          },
          {
            menutitle:'High Tea Three Course',
            firstname: 'Dain',
            lastname: 'Huang',
            bookingdate: '09/03/21',
                    mobile: '0400 000 000',
            email: 'dainhong@gmail.com',
            note: 'Brunch 10:30am'
          },
        ]
      },
      editItem (item) {
        this.editedIndex = this.BookingCustomerList.indexOf(item)
        this.editedItem = Object.assign({}, item)
        this.dialog = true
      },
      deleteItem (item) {
        this.editedIndex = this.BookingCustomerList.indexOf(item)
        this.editedItem = Object.assign({}, item)
        this.dialogDelete = true
      },
      deleteItemConfirm () {
        this.BookingCustomerList.splice(this.editedIndex, 1)
        this.closeDelete()
      },
      close () {
        this.dialog = false
        this.$nextTick(() => {
          this.editedItem = Object.assign({}, this.defaultItem)
          this.editedIndex = -1
        })
      },
      closeDelete () {
        this.dialogDelete = false
        this.$nextTick(() => {
          this.editedItem = Object.assign({}, this.defaultItem)
          this.editedIndex = -1
        })
      },
      save () {
        if (this.editedIndex > -1) {
          Object.assign(this.BookingCustomerList[this.editedIndex], this.editedItem)
        } else {
          this.desserts.push(this.editedItem)
        }
        this.close()
      },
    },
  }
</script>