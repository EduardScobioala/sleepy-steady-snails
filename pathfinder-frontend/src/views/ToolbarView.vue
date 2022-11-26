<template>
    <div>
        <v-toolbar color="primary">
            <div v-if="loggedInRef">
                <span>action1</span>
            </div>
        </v-toolbar>
    </div>
</template>
<script lang="ts">
import { useGlobalStore } from '@/store/global';
import { storeToRefs } from 'pinia';
import { VToolbar, VBtn } from 'vuetify/lib';
import { loggedInRef } from '../services/authService'
export default {



    setup() {

        console.log(loggedInRef);


        return {
            loggedInRef
        }
    }
}
</script>
<style lang="">
    
</style>