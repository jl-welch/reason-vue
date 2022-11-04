import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: () => import("../views/Home.vue"),
    },
    {
      path: "/lorem",
      name: "lorem",
      component: () => import("../views/Lorem.vue"),
    },
    {
      path: "/ipsum",
      name: "ipsum",
      component: () => import("../views/Ipsum.vue"),
    },
    {
      path: "/dolor",
      name: "dolor",
      component: () => import("../views/Dolor.vue"),
    },
  ],
});

// Would use router guards to handle auth but not needed in this case
// router.beforeEach((to, from, next) => {
//   if (to.name !== 'Login' && !isAuthenticated) next({ name: 'Login' })
//   else next()
// })

export default router;
