import { useGlobalStore } from '../../store/global';
<template >
    <div>
        <v-form ref="form" class="mx-auto d-flex">
            <v-card :loading="loading" color="" class="mx-auto">
                <v-card-title>Login</v-card-title>
                <v-card-items class="mx-auto">
                    <v-text-field :rules="loginNameRules" v-model="loginModel.loginName" clearable outlined
                        label="Login Name" placeholder="Login name">
                    </v-text-field>
                    <v-text-field :rules="passwordRules" v-model="loginModel.password"
                        :type="showPassword ? 'password' : ''" outlined label="Password" placeholder="Placeholder"
                        :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'" class="ml-auto mr-auto mt-5"
                        @click:append="togglePasswordVisibility">
                    </v-text-field>
                    <v-checkbox v-model="loginModel.rememberMe" label="Remember me">Remember me</v-checkbox>
                </v-card-items>

                <v-card-actions>
                    <v-btn color="primary" class="" @click="login()">Login</v-btn>
                    <router-link to="/register" style="text-decoration: none;" class="ml-5">
                        <v-btn color="primary">Create account</v-btn>
                    </router-link>
                </v-card-actions>


            </v-card>
        </v-form>

    </div>
</template>
<script lang="ts">import { useGlobalStore } from '@/store/global';
import { storeToRefs } from 'pinia';
import { defineComponent } from 'vue';
import { VueCookies } from 'vue-cookies';
import { RouterLink } from 'vue-router';
import { VBtn, VCard, VCardActions, VCardTitle, VCheckbox, VTextField } from 'vuetify/lib';
import { LoginModel } from '../../models/LoginModel';

export default defineComponent({



    setup() {
        const { loggedIn } = storeToRefs(useGlobalStore())
        let loginModel: LoginModel = new LoginModel()


        return {
            loginModel,

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
            ]
        }
    },


    methods: {

        togglePasswordVisibility() {
            this.showPassword = !this.showPassword
        },

        loginSuccessful() {

        },

        loginFailed() {

        },

        async login() {


            let form: any = this.$refs.form
            form?.validate()


            setTimeout(() => { }, 3000)

            this.loginFailed()

        }
    }


})
</script>
<style lang="">
    
</style>