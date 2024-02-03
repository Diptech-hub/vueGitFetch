import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import { createRouter, createWebHistory } from "vue-router";
import Main from './components/Main.vue'
import Repo from './components/Repo.vue'
import ErrorPage from './components/ErrorPage.vue'
// import ErrorBoundary from "./components/ErrorBoundary.vue"

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: "/",
            name:"Main",
            component: Main
        },
        {
            path: '/Repo/:id',
            name:"Repo",
            component: Repo
        },
        {
            path: "/:catchAll(.*)", 
            name: "ErrorPage",
            component: ErrorPage
        }
    ]
})

createApp(App).use(router).mount('#app');
