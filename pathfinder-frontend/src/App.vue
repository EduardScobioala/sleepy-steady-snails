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

Vue.use(VueCookies, { expires: '7d' })

export default Vue.extend({
  name: "App",
  data: () => ({
    //
  }),
  components: { HomeView, ToolbarView }
});
</script>
