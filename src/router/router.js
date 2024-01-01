import { createRouter } from "vue-router";
import { createWebHashHistory } from "vue-router";
import AboutPage from "@/modules/pokemon/pages/AboutPage.vue";
import ListPage from "@/modules/pokemon/pages/ListPage.vue";
import PokemonPage from "@/modules/pokemon/pages/PokemonPage.vue";
import NotPageFound from "@/modules/shared/pages/NotPageFound.vue";

const routes = [
  {
    path: "/",
    component: () =>
      import(
        /*webpackChunkName: "ListPage*/ "@/modules/pokemon/pages/ListPage"
      ),
  },
  {
    path: "/about",
    component: () =>
      import(
        /*webpackChunkName: "AboutPage*/ "@/modules/pokemon/pages/AboutPage"
      ),
  },
  {
    path: "/id",
    component: () =>
      import(
        /*webpackChunkName: "PokemonPage*/ "@/modules/pokemon/pages/PokemonPage"
      ),
  },
  {
    path: "/:pathMatch(.*)*",
    component: () =>
      import(
        /*webpackChunkName: "NotPageFound*/ "@/modules/shared/pages/NotPageFound"
      ),
  },
];


const router = createRouter({
    history: createWebHashHistory(),
    routes
});

export default router;