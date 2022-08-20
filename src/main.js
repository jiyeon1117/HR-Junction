import { createApp } from 'vue'
import App from './App.vue'
import './css/Global.css'
import router from './router/index.js';

// Vue.config.productionTip = false

createApp(App).use(router).mount('#app')

// createApp(App).mount('#app')
