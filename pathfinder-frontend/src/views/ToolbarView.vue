<template>
    <div>
        <v-toolbar color="">
            <v-toolbar-title class="" color="primary">Pathfinder</v-toolbar-title>
            <div v-if="loggedInRef" class="ml-auto">
                <v-btn color="primary" class="mr-2">
                    <v-icon>mdi-help</v-icon>
                </v-btn>
                <v-btn color="primary" dark @click="logout($cookies, $router)">Logout</v-btn>
            </div>

        </v-toolbar>
    </div>
</template>
<script lang="ts">
import { useGlobalStore } from '@/store/global';
import { storeToRefs } from 'pinia';
import { VToolbar, VBtn } from 'vuetify/lib';
import { loggedInRef, logout } from '../services/authService';
export default {



    setup() {



        return {
            loggedInRef,
            logout
        }
    }
}
</script>
<style lang="">
    
</style>