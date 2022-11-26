<template >
    <div>
        <v-form ref="form" class="ma-auto d-flex ">
            <v-card elevation="10" :loading="loading" color="" class="mx-auto mt-10 pa-5">
                <v-card-title>Login</v-card-title>
                <v-text-field :rules="loginNameRules" v-model="loginModel.loginName" clearable outlined
                    label="Login Name" placeholder="Login name">
                </v-text-field>
                <v-text-field :rules="passwordRules" v-model="loginModel.password"
                    :type="showPassword ? 'password' : ''" outlined label="Password" placeholder="Placeholder"
                    :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'" class="ml-auto mr-auto mt-5"
                    @click:append="togglePasswordVisibility">
                </v-text-field>
                <v-checkbox v-model="loginModel.rememberMe" label="Remember me">Remember me</v-checkbox>

                <v-card-actions>
                    <v-btn color="primary" @click="login()">Login</v-btn>

                </v-card-actions>


            </v-card>

        </v-form>
        <v-alert v-if="authFailed" type="error" class="error ">
            Login failed
        </v-alert>
        <v-alert v-if="authSuccessful" type="success">
            Login successful
        </v-alert>
    </div>
</template>
<script lang="ts">import { useGlobalStore } from '@/store/global';
import { storeToRefs } from 'pinia';
import { defineComponent } from 'vue';
import { VueCookies } from 'vue-cookies';
import { RouterLink } from 'vue-router';
import { VBtn, VCard, VCardActions, VCardTitle, VCheckbox, VTextField } from 'vuetify/lib';
import { LoginModel } from '../../models/LoginModel';
import router from '../../router/index';

export default defineComponent({



    setup() {
        const { loggedIn } = storeToRefs(useGlobalStore())
        let loginModel: LoginModel = new LoginModel()


        return {
            loginModel,
            loggedIn
        }
    },
    data() {
        return {
            loading: false,
            showPassword: false,
            loginNameRules: [
                (str: string) => !!str || 'Name is required',
                (str: string) => str.length >= 5 || 'Login name has to be longer than 5 characters'
            ],
            passwordRules: [
                (str: string) => !!str || 'Password is required',
                (str: string) => str.length >= 5 || 'Password has to be longer than 5 characters'
            ],
            authFailed: false,
            authSuccessful: false
        }
    },


    methods: {

        togglePasswordVisibility() {
            this.showPassword = !this.showPassword
        },

        async loginSuccessful() {
            this.$cookies.set("auth", "true")
            this.authSuccessful = true

            await new Promise(r => setTimeout(r, 3000));

            this.loggedIn = true


        },

        async loginFailed() {
            this.authFailed = true

            await new Promise(r => setTimeout(r, 3000));

            this.authFailed = false
        },

        async login() {

            if (this.loading)
                return

            console.log(this.$data);

            let form: any = this.$refs.form

            if (!form?.validate())
                return


            this.authFailed = false
            this.authSuccessful = false


            this.loading = true




            await new Promise(r => setTimeout(r, 3000));

            this.loginSuccessful()
            this.loading = false

        }
    }


})
</script>
<style >
.error {
    position: fixed;
    bottom: 0;

}
</style>