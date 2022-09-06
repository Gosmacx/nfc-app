import { createApp } from 'vue'
import './assets/tailwind.css'
import App from './App.vue'
import router from './router'
import store from './store'

const app = createApp(App)

/*
    Custom multi language plugin
    - Language texts can be changed / added on the Store.
    - Usage: $t('text')
    - You can navigate in language object(EN/TR) with '.' : 

        result: {
            title: 'Hello WORLD',
            description: {
                title: 'Gosmac',
                text: 'I love programming.'
            }
        } 

        $t('resut.title') => 'Hello WORLD'
        $t('result.description.title') => 'Gosmac'
        $t('result.description.text') => 'I love programming.'
        $t('result.gosmac') => null


*/
app.config.globalProperties.$t = store.getters.getText

app.use(store)
app.use(router)
app.mount('#app')