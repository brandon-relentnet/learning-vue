import './assets/main.css';
import { createApp, reactive } from 'vue';
import { createRouter, createWebHistory } from 'vue-router';
import App from './App.vue';
import HomePage from './views/HomePage.vue';
import ProjectsPage from './views/ProjectsPage.vue';
import ProjectDetails from './views/ProjectDetails.vue';

const routes = [
    { path: '/', component: HomePage, meta: { depth: 1 } },
    { path: '/projects', component: ProjectsPage, meta: { depth: 2 } },
    { path: '/projects/:id', component: ProjectDetails, props: true, meta: { depth: 3 } },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

const transitionState = reactive({
    transitionName: 'fade',
});

router.beforeEach((to, from, next) => {
    const toDepth = to.meta?.depth || 1;
    const fromDepth = from.meta?.depth || 1;

    if (toDepth > fromDepth) {
        transitionState.transitionName = "slide-left";
    } else if (toDepth < fromDepth) {
        transitionState.transitionName = "slide-right";
    } else {
        transitionState.transitionName = "fade";
    }
    next();
});

const app = createApp(App);

app.provide('transitionState', transitionState);
app.use(router);
app.mount('#app');