import { createRouter, createWebHistory } from 'vue-router';
import Home from '../view/Home.vue';
import DefaultLayout from '../components/DefaultLayout.vue';
import GuestLayout from '../components/GuestLayout.vue';
import MealsByName from '../view/MealsByName.vue';
import MealsByIngredient from '../view/MealsByIngredient.vue';
import MealsByLetter from '../view/MealsByLetter.vue';
import MealDetails from '../view/MealDetails.vue';

const routes = [
  {
    path: '/',
    name: 'home',
    component: DefaultLayout,
    children: [{
      path: '/',
      name: 'home',
      component: Home,
    }, {
      path: '/by-name/:name?',
      name: 'byName',
      component: MealsByName
    },
    {
      path: '/by-letter/:letter?',
      name: 'byLetter',
      component: MealsByLetter
    }, {
      path: '/by-ingredient/:ingredient?',
      name: 'byIngredient',
      component: MealsByIngredient
    },{
      path: '/meal/:id',
      name: 'mealDetails',
      component: MealDetails
    }]
  }, {
    path: '/guest',
    name: 'guest',
    component: GuestLayout
  }

];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;