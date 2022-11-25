<template>

  <v-app>
    <HomeView></HomeView>
    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<script lang="ts">
import Vue from 'vue';
import HomeView from './views/HomeView.vue';

export default Vue.extend({
  name: "App",
  data: () => ({
    //
  }),
  components: { HomeView }
});
</script>
