import './assets/style.css';
import 'primeicons/primeicons.css';
import Toast from 'vue-toastification'
import 'vue-toastification/dist/index.css' ;
import routes from "@/router/index.js";

import { createApp } from 'vue';
import App from './App.vue';

createApp(App).use(routes).use(Toast).mount('#app')
