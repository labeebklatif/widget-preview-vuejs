import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import AwayView from "../views/AwayView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/away",
      name: "away",
      component: AwayView,
    },
  ],
});

export default router;
