import { createApp } from 'vue'
import './assets/tailwind.css'
import App from './App.vue'
import router from './router'
import store from './store'

const app = createApp(App)
app.config.globalProperties.$t = store.getters.getText

app.use(store)
app.use(router)
app.mount('#app')