import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/",
    name: "root",
    component: () => import("../views/Root.vue"),
    redirect: { name: "home" },
    children: [
      {
        path: "home",
        name: "home",
        component: () => import("../views/Home.vue"),
      },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
