import './assets/main.css';
import { createApp, reactive, markRaw } from 'vue';
import { createRouter, createWebHistory } from 'vue-router';
import App from './App.vue';
import HomePage from './views/HomePage.vue';
import ProjectsPage from './views/ProjectsPage.vue';
import ProjectDetails from './views/ProjectDetails.vue';
import Counter from '@/components/projects/counter/Counter.vue';

const projectData = reactive({
    counter: {
        id: "counter",
        title: "Counter",
        description: "A simple counter that demonstrates the basics of Vue reactivity and component interaction.",
        component: markRaw(Counter),
    },
    todo: {
        id: "todo",
        title: "Todo",
        description: "A todo app that demonstrates the basics of Vue reactivity and component interaction.",
    },
    calculator: {
        id: "calculator",
        title: "Calculator",
        description: "A calculator that demonstrates the basics of Vue reactivity and component interaction.",
    },
});

const routes = [
    { path: '/', component: HomePage, meta: { depth: 1 } },
    { path: '/projects', component: ProjectsPage, props: { projectData }, meta: { depth: 2 } },
    { path: '/projects/:id', component: ProjectDetails, props: (route) => ({ project: projectData[route.params.id] || null }), meta: { depth: 3 } },
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