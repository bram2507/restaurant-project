import { createRouter, createWebHistory } from "vue-router";
const routes = [
  {
    path: "/",
    name: "main",
    component: () => import("../views/Pages/Main.vue"),
  },
  {
    path: "/menu",
    name: "menu",
    component: () => import("../views/Pages/Menu.vue"),
  },
  {
    path: "/specials",
    name: "specials",
    component: () => import("../views/Pages/Specials.vue"),
  },
  {
    path: "/booking",
    name: "booking",
    component: () => import("../views/Pages/Booking.vue"),
  },
];
const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});
export default router;
