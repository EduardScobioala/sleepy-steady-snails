import Vue from "vue";
import VueRouter from "vue-router";
import HomeView from "../views/HomeView.vue";
import DashboardViewVue from "@/views/Dashboard/DashboardView.vue";
import LoginViewVue from "@/views/Dashboard/LoginView.vue";
import FacultyViewVue from "@/views/Dashboard/FacultyView.vue";
import UniversityViewVue from "@/views/Dashboard/UniversityView.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    component: HomeView,
  },
  {
    path: "/dashboard",
    component: DashboardViewVue,
  },
  {
    path: "/universities",
    component: UniversityViewVue,
  },
  {
    path: "/login",
    component: LoginViewVue,
  },
];

const router = new VueRouter({
  routes,
});

export default router;
