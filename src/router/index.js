import { createWebHistory, createRouter } from 'vue-router'

import Home from '../views/Home.vue'
import Personal from '../views/Personal.vue'
import Scan from '../views/Scan.vue'
import Url from '../views/Url.vue'
import Text from '../views/Text.vue'
import Tutorial from '../views/Tutorial.vue'

const routes = [
    {
        path: "/",
        component: Home
    },
    {
        path: "/personal",
        component: Personal
    },
    {
        path: "/scan",
        component: Scan
    },
    {
        path: "/url",
        component: Url
    },
    {
        path: "/text",
        component: Text
    },
    {
        path: "/tutorial",
        component: Tutorial
    }
]

export default createRouter({
    routes,
    history: createWebHistory()
})