import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';
import Home from '../containers/Home.vue';
import GrandAustriaHotelReferenceTool from '../containers/GrandAustriaHotelReferenceTool.vue';
import WreckRaidersDiceRoller from '../containers/WreckRaidersDiceRoller.vue';

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
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

export default router;
