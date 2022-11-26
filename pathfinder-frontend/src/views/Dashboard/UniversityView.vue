<template lang="">
    <div>
        
        
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

</style>