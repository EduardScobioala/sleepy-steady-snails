<template>
  <div>

  </div>
</template>

<script lang="ts">
import Vue, { inject } from 'vue'
import { VueCookies } from 'vue-cookies';
import { defineStore, storeToRefs } from 'pinia';
import { useGlobalStore } from '../store/global';
import { checkAuthentication } from '@/services/authService';
import { setup } from '../services/authService';

const loginState = defineStore('login', {

})


export default Vue.extend({
  name: 'HomeView',

  mounted() {


    console.log("created");



    const { loggedIn } = storeToRefs(useGlobalStore())


    if (checkAuthentication(this.$cookies))
      this.$router.push("/dashboard")
    else this.$router.push("/login")
  },

  created() {



  },


  setup() {

    const { loggedIn } = storeToRefs(useGlobalStore())

    return {
      loggedIn
    }
  },


  components: {

  },
})
</script>
