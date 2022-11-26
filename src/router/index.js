import {createRouter, createWebHistory} from "vue-router";
import Home from "../views/Home.vue";
import SearchMeal from "../views/SearchMeal.vue";
import SearchByLetter from "../views/MealsByLetter.vue";
import SearchByIngredient from "../views/MealsByIngredient.vue";
import DefaultLayout from "../components/DefaultLayout.vue";

const routes = [
  {
    path: '/',
    component: DefaultLayout,
    children:[

      {
        path: '/',
        name: 'Home',
        component: Home
      },
      {
        path: '/search-meal/:filter?',
        name: 'SearchMeal',
        component: SearchMeal
      },
      {
        path: '/search-by-letter/:letter?',
        name: 'SearchByLetter',
        component: SearchByLetter
      },
      {
        path: '/search-by-ingredient/:filter?',
        name: 'SearchByIngredient',
        component: SearchByIngredient
      },
    ]
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;