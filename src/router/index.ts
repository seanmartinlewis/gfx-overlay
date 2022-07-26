import { createRouter, createWebHistory } from "vue-router";
import Logo from "../views/Logo.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: Logo,
    },
  ],
});

export default router;
