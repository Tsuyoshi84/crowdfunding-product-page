import { createApp } from 'vue'
import App from './App.vue'
import { createPinia } from 'pinia'
import '@/assets/styles/main.css'
import '@/assets/styles/font.css'

createApp(App).use(createPinia()).mount('#app')
