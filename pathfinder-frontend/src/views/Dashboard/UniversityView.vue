<template lang="">
    <div>
        <v-card class="toolbar">
            <v-toolbar  elevation-10 color="primary">
            
        </v-toolbar>



        </v-card>
        
    </div>
</template>
<script lang="ts">import router from '@/router';
import { checkAuthentication, loggedInRef } from '@/services/authService';
import { defineComponent } from 'vue';

export default defineComponent({



    mounted() {
        checkAuthentication(this.$cookies)
        console.log(loggedInRef.value);

        if (!loggedInRef.value)
            router.push("/login")
    }


})
</script>
<style>
.toolbar {
    margin-top: 5%;
    margin-left: 5%;
    margin-right: 5%;
}
</style>