import { createRouter, createWebHistory } from "vue-router";

// Our imported pages used in our routs[].
// import store from "./store/index.js";
import AboutMeView from "./pages/AboutMeView.vue";
import HomeView from "./pages/HomeView.vue";

/* The routes and pathes */
const router = createRouter({
  history: createWebHistory(),
  // Definierar vart man blir skickad beronde på vad man klickar på.
  routes: [
    { path: "/", component: HomeView },
    { path: "/about-me", component: AboutMeView },
  ],
});

// Below code handles if an user is authenticated to view certain pages,
// Such as, making sure non logged in user have permission to admin dashboard.
// Getting redirected to "/" - Landingpage home
// Also taking care of, if an user is logged in, there is no point of viewing login page.
// Getting redirected to "/" - Landingpage home
// router.beforeEach(function(to, _, next){
//     if(to.meta.requiresAuth && !store.getters.isAuthenticated){
//         next('/');
//     }
//     else if (to.meta.requiresUnauth && store.getters.isAuthenticated){
//         next('/');
//     }
//     else {
//         next();
//     }
// })

export default router;
