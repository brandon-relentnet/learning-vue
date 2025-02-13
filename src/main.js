import './assets/main.css';
import { createApp } from 'vue';
import { createRouter, createWebHistory } from 'vue-router';
import App from './App.vue';
import HomePage from './views/HomePage.vue';
import ProjectsPage from './views/ProjectsPage.vue';
import ProjectDetails from './views/ProjectDetails.vue';

const routes = [
    { path: '/', component: HomePage },
    { path: '/projects', component: ProjectsPage },
    { path: '/projects/:id', component: ProjectDetails, props: true },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

const app = createApp(App);
app.use(router);
app.mount('#app');