import Vue from "vue";
import VueRouter from "vue-router";
import HomeView from "../views/HomeView.vue";
import DashboardViewVue from "@/views/Dashboard/DashboardView.vue";
import LoginViewVue from "@/views/Dashboard/LoginView.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/dashboard",
    name: "dashboard",
    component: DashboardViewVue,
  },
  {
    path: "/login",
    name: "login",
    component: LoginViewVue,
  },
];

const router = new VueRouter({
  routes,
});

export default router;
