import {createApp} from 'vue'
import App from './App.vue'
import './css/Global.css'
import router from './router/index.js';
// import store from './store/index'

// Vue.config.productionTip = false

// const app = new Vue({
//   el: '#app',
//   router,
//   store,
//   render: h => h(App),
// })

createApp(App).use(router).mount('#app')

// createApp(App).mount('#app')
