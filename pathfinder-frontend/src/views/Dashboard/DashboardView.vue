<template >
    <div>
        <h2>User {{ $route.path }}</h2>

        <router-view />
    </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue';
import { storeToRefs } from 'pinia';
import { useGlobalStore } from '../../store/global';
import router from '../../router/index';
import { checkAuthentication, loggedInRef } from '../../services/authService';

export default defineComponent({

    name: "DashboardView",

    mounted() {
        checkAuthentication(this.$cookies)
        console.log(loggedInRef.value);

        if (!loggedInRef.value)
            router.push("/login")
    }





})
</script>
<style lang="">
    
</style>