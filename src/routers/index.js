import { createRouter, createWebHistory } from 'vue-router';
import Home from '../pages/Home.vue';
import Projects from '../pages/Projects.vue';
import Contact from '../pages/Contact.vue';

const routes = [
  { path: '/home', name: 'home', component: Home },
  { path: '/projects', name: 'projects', component: Projects },
  { path: '/contact', name: 'contact', component: Contact }
];

const routers = createRouter({
  history: createWebHistory(),
  routes
});

export default routers;