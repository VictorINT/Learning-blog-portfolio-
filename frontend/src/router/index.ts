import { createRouter, createWebHistory } from 'vue-router';

// Importă paginile corecte
import MainPage from '../pages/MainPage.vue'; 
import Learn from '../pages/Learn.vue';
import Projects from '../pages/Projects.vue';
import Contact from '../pages/Contact.vue';
import Content from '../pages/Content.vue'
const routes = [
  {
    path: '/',
    name: 'Home',
    component: MainPage, // Înlocuiește App cu MainPage
  },
  {
    path: '/learn',
    name: 'Learn',
    component: Learn, 
  },
  {
    path: '/projects',
    name: 'Projects',
    component: Projects, 
  },
  {
    path: '/contact',
    name: 'Contact',
    component: Contact, 
  },
  {
    path: '/content/:title/:description', 
    name: 'content',
    component: Content,
  }
];

// Creează instanța routerului
const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
