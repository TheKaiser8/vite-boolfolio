import { createRouter, createWebHistory } from "vue-router";
// createWebHistory permette la navigazione tramite url e fa funzionare il tasto indietro del browser

// importo le pagine (pages)
import HomePage from './pages/HomePage.vue'

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            name: 'homepage',
            component: HomePage,
        }
    ]
});

export default router;