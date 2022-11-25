<template>
  <div>
    <LoginView v-if="!loggedIn"></LoginView>
    <DashboardView v-if="loggedIn"></DashboardView>
  </div>
</template>

<script lang="ts">
import Vue, { inject } from 'vue'
import { VueCookies } from 'vue-cookies';
import LoginView from './Dashboard/LoginView.vue';
import { defineStore, storeToRefs } from 'pinia';
import { useGlobalStore } from '../store/global';

const loginState = defineStore('login', {

})


export default Vue.extend({
  name: 'HomeView',



  created() {

    function checkAuthentication(cookies: VueCookies) {
      if (cookies.get("auth") != null) {
        loggedIn.value = true
      }
      else loggedIn.value = false
    }

    const { loggedIn } = storeToRefs(useGlobalStore())

    if (this.$cookies.get("auth")) {
      checkAuthentication(this.$cookies)
    }

  },


  setup() {

    const { loggedIn } = storeToRefs(useGlobalStore())

    return {
      loggedIn
    }
  },


  components: {
    LoginView
  },
})
</script>
