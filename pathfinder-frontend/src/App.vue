<template>

  <v-app>
    <v-main>
      <ToolbarView></ToolbarView>

      <router-view />
    </v-main>
  </v-app>
</template>

<script lang="ts">
import Vue from 'vue';
import HomeView from './views/HomeView.vue';
import ToolbarView from './views/ToolbarView.vue';
import VueCookies from 'vue-cookies'
import { RouterView } from 'vue-router';
import { VApp, VMain } from 'vuetify/lib';
import { setup } from './services/authService';

Vue.use(VueCookies, { expires: '7d' })

export default Vue.extend({
  name: "App",
  setup() {
    setup()
  },
  data: () => ({
    //
  }),
  components: { HomeView, ToolbarView }
});
</script>
