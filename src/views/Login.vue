<template>
    <v-container>
        <Loading v-if="loading" />
        <v-row class="my-6">
            <v-col cols="12" style="text-align: center">
                <h1>Login</h1>
            </v-col>
        </v-row>
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
import axios from "axios";
import Loading from "../components/Loading";
// import Vue from "vue";
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
    }),
    components: { Loading },
    methods: {
        validate() {
            const isValid = this.$refs.form.validate();
            if (isValid) {
                const self = this;
                this.loading = true;
                axios
                    .post(
                        "http://localhost:8090/api/user/login",
                        new FormData(this.$refs.form.$el)
                    )
                    .then(function(response) {
                        if (response.data.login) {
                            // save the user log state(as JWT) in browser(chrome) storage instead of SESSION
                            //(method) Storage.setItem(key: string, value: string)
                            localStorage.setItem("token", response.data.token);
                            localStorage.setItem(
                                "user_data",
                                JSON.stringify(response.data.loginedUser)
                            );
                            //  this.loading = true;
                            self.$router.push("/");
                            // *로그인후(토큰발급) 메인홈화면으로 라우팅 됐을때, 로그아웃버튼과 메뉴바 변경적용이 바로 안되고 새로고침후 적용됨.
                            // this.forceUpdate();
                            // Vue.forceUpdate();
                        } else {
                            alert("Check Your Username or Password !");
                        }
                        this.loading = false;
                    })
                    .catch(function(error) {
                        console.dir(error);
                        const errors = error.response.data.errors;

                        alert(errors[Object.keys(errors)[0]][0]);
                        console.log(errors);
                        this.loading = false;
                    });
                // this.$router.push("/login");
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