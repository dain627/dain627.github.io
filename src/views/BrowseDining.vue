<template>
    <div>
        <v-alert type="success" v-if="toggle == true"
            >Your Dining Menu is deleted.</v-alert
        >
        <!-- Rendering Dining table data -->
        <div v-if="$store.state.menuList.length >= 1">
            <v-card
                v-for="item in $store.state.menuList"
                v-bind:key="item.id"
                :loading="loading"
                class="mx-auto my-12"
                max-width="374"
            >
                <!-- Rendering MenuTitle here -->
                <v-img :src="item.menu_image" height="200px">
                    <v-row>
                        <v-col
                            cols="12"
                            style="text-align: right"
                            v-if="chef_id == item.creator.id"
                        >
                            <v-btn
                                dark
                                icon
                                class="mr-4"
                                @click="$router.push('/update/' + item.id)"
                            >
                                <v-icon style="color: orange"
                                    >mdi-pencil</v-icon
                                >
                            </v-btn>

                            <v-btn dark icon>
                                <v-icon
                                    style="color: orange"
                                    @click="deleteMenu(item.id)"
                                    >mdi-delete</v-icon
                                >
                            </v-btn>
                        </v-col>
                    </v-row>
                </v-img>
                <!----------------- Delete Table Data ------------------->
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
                                @click="deleteItemConfirm"
                                >OK</v-btn
                            >
                            <v-spacer></v-spacer>
                        </v-card-actions>
                    </v-card>
                </v-dialog>
                <!-- Rendering MenuTitle here -->
                <v-card-title>
                    {{ item.menu_title }}
                </v-card-title>
                <v-spacer></v-spacer>

                <v-list-item>
                    <v-list-item-action>
                        <list-subtitle> Category </list-subtitle>
                    </v-list-item-action>
                    <!-- Rendering DingCategory here -->
                    <v-list-item-content>
                        <v-card-subtitle>
                            {{ item.dining_category }}
                        </v-card-subtitle>
                    </v-list-item-content>
                </v-list-item>

                <v-list-item>
                    <v-list-item-action>
                        <list-subtitle> Price(AU) </list-subtitle>
                    </v-list-item-action>
                    <!-- Rendering Price here -->
                    <v-list-item-content>
                        <v-card-subtitle>
                            {{ item.price }}
                        </v-card-subtitle>
                    </v-list-item-content>
                </v-list-item>

                <v-list-item>
                    <v-list-item-action>
                        <list-subtitle> Location </list-subtitle>
                    </v-list-item-action>
                    <!-- Rendering Location here -->
                    <v-list-item-content>
                        <v-card-subtitle>
                            {{ item.location }}
                        </v-card-subtitle>
                    </v-list-item-content>
                </v-list-item>

                <v-list-item>
                    <v-list-item-action>
                        <list-subtitle> Schedule </list-subtitle>
                    </v-list-item-action>
                    <!-- Rendering Availability here -->
                    <v-list-item-content>
                        <v-card-subtitle>
                            {{ item.availability }}
                        </v-card-subtitle>
                    </v-list-item-content>
                </v-list-item>

                <v-card-actions>
                    <v-btn color="gray" text> Menu Description </v-btn>

                    <v-spacer></v-spacer>

                    <v-btn icon @click="show = !show">
                        <v-icon>{{
                            show ? "mdi-chevron-up" : "mdi-chevron-down"
                        }}</v-icon>
                    </v-btn>
                </v-card-actions>

                <v-expand-transition>
                    <div v-show="show">
                        <v-divider></v-divider>
                        <!-- Rendering MenuDescription here -->
                        <v-card-text>
                            {{ item.menu_description }}
                        </v-card-text>
                    </div>
                </v-expand-transition>
                <!-- Rendering Chef Profile table data -->
                <v-card-actions>
                    <v-btn color="gray" text> Chef Profile </v-btn>

                    <v-spacer></v-spacer>

                    <v-btn icon @click="show2 = !show2">
                        <v-icon>{{
                            show2 ? "mdi-chevron-up" : "mdi-chevron-down"
                        }}</v-icon>
                    </v-btn>
                </v-card-actions>

                <v-expand-transition>
                    <div v-show="show2">
                        <v-divider></v-divider>
                        <!-- Rendering Chef Profile data here -->
                        <v-card-text>
                            <v-row>
                                <v-col cols="12">
                                    <v-card max-width="310" class="mx-auto">
                                        <v-img
                                            :src="item.creator.identify_photo"
                                            height="300px"
                                            dark
                                        >
                                        </v-img>
                                        <v-card-title>
                                            {{ item.creator.business_name }}
                                        </v-card-title>
                                        <v-spacer></v-spacer>
                                        <v-list-item>
                                            <v-list-item-content>
                                                <v-list-item-title>
                                                    <h4>Chef Introduction</h4>
                                                </v-list-item-title>
                                                <v-spacer></v-spacer
                                                ><v-divider></v-divider
                                                ><v-spacer></v-spacer>
                                                <v-list-item-action-text>
                                                    {{
                                                        item.creator
                                                            .introduction
                                                    }}
                                                </v-list-item-action-text>
                                            </v-list-item-content>
                                        </v-list-item>

                                        <v-list-item>
                                            <v-list-item-content>
                                                <v-list-item-title>
                                                    <h4>Experience</h4>
                                                </v-list-item-title>
                                                <v-spacer></v-spacer
                                                ><v-divider></v-divider
                                                ><v-spacer></v-spacer>
                                                <v-list-item-action-text>
                                                    {{
                                                        item.creator.experience
                                                    }}
                                                </v-list-item-action-text>
                                            </v-list-item-content>
                                        </v-list-item>

                                        <v-list-item>
                                            <v-list-item-content>
                                                <v-list-item-title>
                                                    <h4>Contact Number</h4>
                                                </v-list-item-title>
                                                <v-spacer></v-spacer
                                                ><v-divider></v-divider
                                                ><v-spacer></v-spacer>
                                                <v-list-item-action-text>
                                                    {{
                                                        item.creator
                                                            .business_number
                                                    }}
                                                </v-list-item-action-text>
                                            </v-list-item-content>
                                        </v-list-item>
                                    </v-card>
                                </v-col>
                            </v-row>
                        </v-card-text>
                    </div>
                </v-expand-transition>
                <v-card-actions>
                    <v-col cols="12" style="text-align: center">
                        <v-btn
                            color="normal"
                            @click="$router.push('/book/' + item.id)"
                            >Book Now</v-btn
                        >
                        <!-- 게스트로 접속상태 일때
        <v-btn color="normal" @click="$router.push('/signup')">Post Dining</v-btn>-->
                    </v-col>
                </v-card-actions>
            </v-card>
        </div>
    </div>
</template>
<script>
import { getAllMenusApi, deleteMenuApi, getChefProfileApi } from "../libs/api";
export default {
    data: () => ({
        drawer: false,
        accessToken: localStorage.getItem("token"),
        dialogDelete: false,
        show: false,
        show2: false,
        chef_id: null,
        toggle: false,
    }),
    methods: {
        deleteMenu(id) {
            deleteMenuApi(id).then((res) => {
                console.log(res);

                this.toggle = true;
                setTimeout(() => (this.toggle = false), 2000);
            });
            this.$store.state.menuList = this.$store.state.menuList.filter(
                (element) => element.id != id
            );
        },
    },
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
    mounted() {
        getAllMenusApi().then((res) => {
            this.$store.state.menuList = res.data.memus.reverse();
            console.log(this.user_id, res.data.memus);
        });

        getChefProfileApi().then((res) => {
            const { id } = res.data.chef_profile;
            this.chef_id = id;
        });
    },
};
</script>
