import './assets/main.css';
import { createApp } from 'vue';
import App from './App.vue';
import router, { transitionState } from './components/router';

const app = createApp(App);

app.provide('transitionState', transitionState);
app.use(router);
app.mount('#app');