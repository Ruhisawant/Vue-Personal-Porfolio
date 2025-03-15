import { createApp } from 'vue';
import { createPinia } from 'pinia';
import piniaPersist from 'pinia-plugin-persistedstate';
import routers from './routers';
import App from './App.vue';
import './style.css';


const app = createApp(App);
const pinia = createPinia();

pinia.use(piniaPersist);

app.use(pinia);
app.use(routers);
app.mount('#app');