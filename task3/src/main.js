import { createApp } from 'vue';
import VuexStore from './store/index';

import App from './App.vue';


const app = createApp(App);

app.use(VuexStore)
app.mount('#app');
