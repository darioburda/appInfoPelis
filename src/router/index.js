import { createRouter, createWebHistory } from "vue-router";
import HomePage from "../views/HomePage.vue";
import PelisFavoritas from "../views/PelisFavoritas.vue";

const routes = [
    {
        path: "/",
        name: "home-page",
        component: HomePage,
    },

    {
        path: "/pelis-favoritas",
        name: "pelis-favoritas",
        component: PelisFavoritas,
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;
