import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';
import Home from '../containers/Home.vue';
import GrandAustriaHotelReferenceTool from '../containers/GrandAustriaHotelReferenceTool.vue';
import WreckRaidersDiceRoller from '../containers/WreckRaidersDiceRoller.vue';
import CartographersScoringCardRandomizer from '../containers/CartographersScoringCardRandomizer.vue';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'home',
    component: Home,
  },
  {
    path: '/wreckraidersdiceroller',
    name: 'wreckraidersdiceroller',
    component: WreckRaidersDiceRoller,
  },
  {
    path: '/grandaustriahotelreferencetool',
    name: 'grandaustriahotelreferencetool',
    component: GrandAustriaHotelReferenceTool,
  },
  {
    path: '/cartographersscoringcardrandomizer',
    name: 'cartographersscoringcardrandomizer',
    component: CartographersScoringCardRandomizer,
  },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

export default router;
