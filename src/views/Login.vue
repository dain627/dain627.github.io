<template>
    <v-container>
        <v-alert v-if="toggle == 'clear'" type="success"
            >Welcome to UnderGrounf Dining World!</v-alert
        >
        <v-alert v-if="toggle == 'error'" type="error"
            >Check Your Username or Password !</v-alert
        >
        <Loading v-if="loading" />
        <v-row class="my-6">
            <v-col cols="12" style="text-align: center">
                <h1>Login</h1>
            </v-col>
        </v-row>
        <!-- lazy-validation: Built in Vutify framework-->
        <!-- If enabled, value will always be true unless there are visible validation errors. 
        You can still call validate() to manually trigger validation -->
        <v-form ref="form" v-model="valid" lazy-validation>
            <v-text-field
                v-model="name"
                :rules="nameRules"
                label="User Name"
                name="user_id"
                required
                outlined
            ></v-text-field>

            <v-text-field
                v-model="password"
                :rules="passwordRules"
                label="Password"
                type="password"
                name="password"
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
                    Login
                </v-btn>
                <v-btn @click="$router.push('/signup')">Sign up</v-btn>
            </div>
        </v-form>
    </v-container>
</template>

<script>
import Loading from "../components/Loading";
import { loginApi } from "../libs/api/index.js";

export default {
    data: () => ({
        valid: true,
        name: "",
        nameRules: [
            (v) => !!v || "User Name is required",
            (v) =>
                (v && v.length <= 10) ||
                "User Name must be less than 10 characters",
        ],
        password: "",
        passwordRules: [
            (v) => !!v || "Password is required",
            (v) =>
                (v && v.length >= 8) ||
                "Password must be more than 8 characters",
        ],
        loading: false,
        toggle: "none",
    }),
    components: { Loading },
    methods: {
        validate() {
            const isValid = this.$refs.form.validate();
            // this.$refs.form.validate() will validate all inputs and return if they are all valid or not.
            if (isValid) {
                const self = this;
                const formData = new FormData(this.$refs.form.$el);
                this.loading = true;
                loginApi(formData)
                    .then((response) => {
                        if (response.data.login) {
                            // save the user log state(as JWT) in browser(chrome) storage instead of SESSION
                            //(method) Storage.setItem(key: string, value: string)
                            console.log(response);
                            localStorage.setItem("token", response.data.token);
                            localStorage.setItem(
                                "user_data",
                                JSON.stringify(response.data.loginedUser)
                            );
                            this.toggle = "clear";
                            self.$router.push("/");
                            // Vue.forceUpdate();
                        } else {
                            this.toggle = "error";
                        }
                        setTimeout(() => (this.toggle = "none"), 2000);
                        this.$store.state.isLogined = true;
                        this.loading = false;
                    })
                    .catch((error) => {
                        this.loading = false;
                        if (error.response.data) {
                            const errors = error.response.data.errors;
                            alert(errors[Object.keys(errors)[0]][0]);
                        }
                    });
            }
        },
    },
};
</script>

<style></style>
