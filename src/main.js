import { createApp } from 'vue'
import '../src/assets/main.css'
import App from './App.vue'
import router from './router'

createApp(App).use(router).mount('#app')
