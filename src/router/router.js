import { createRouter } from "vue-router";
import { createWebHashHistory } from "vue-router";

const routes = [
  {
    path: "/",
    redirect: "/pokemon",
  },
  {
    path: "/pokemon",
    name: "pokemon",
    component: () =>
      import(
        /*webpackChunkName: "AboutPage*/ "@/modules/pokemon/layout/PokemonLayout"
      ),
    children: [
      {
        path: "home",
        name: "pokemon-home",
        component: () =>
          import(
            /*webpackChunkName: "ListPage*/ "@/modules/pokemon/pages/ListPage"
          ),
      },
      {
        path: "about",
        name: "pokemon-about",
        component: () =>
          import(
            /*webpackChunkName: "AboutPage*/ "@/modules/pokemon/pages/AboutPage"
          ),
      },
      {
        path: "pokemonid/:pokemon_id",
        name: "pokemon-pokemon_id",
        component: () =>
          import(
            /*webpackChunkName: "PokemonPage*/ "@/modules/pokemon/pages/PokemonPage"
          ),
        props: (route) => {
          const pokemon_id = +route.params.pokemon_id;
          console.log(route);
          return isNaN(pokemon_id)
            ? { pokemon_id: 1 }
            : { pokemon_id: pokemon_id };
        },
      },
      {
        path: "",
        redirect: {name: 'pokemon-about'},
      },
    ],
  },

  {
    path: "/:pathMatch(.*)*",
    component: () =>
      import(
        /*webpackChunkName: "NotPageFound*/ "@/modules/shared/pages/NotPageFound"
      ),
    // redirect: '/home'
  },
];


const router = createRouter({
    history: createWebHashHistory(),
    routes
});

export default router;