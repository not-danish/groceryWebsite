import './assets/main.css'


import { createApp } from 'vue'
import App from './App.vue'
import Navbar from './components/Navbar.vue'
import router from './router'

createApp(App).use(router).mount('#app')
createApp(Navbar).mount('#navbar')
