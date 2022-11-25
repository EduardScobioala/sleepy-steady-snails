import { defineStore } from "pinia";

export const useGlobalStore = defineStore("counter", {
  state: () => ({ loggedIn: false }),

  getters: {},
  actions: {
    logIn() {},
  },
});
