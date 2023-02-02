import { createRouter, createWebHistory } from "vue-router";
// createWebHistory permette la navigazione tramite url e fa funzionare il tasto indietro del browser

// importo le pagine (pages)
import HomePage from './pages/HomePage.vue';
import AboutUs from './pages/AboutUs.vue';

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            name: 'homepage',
            component: HomePage,
        },
        {
            path: '/chi-siamo',
            name: 'about-us',
            component: AboutUs,
        }
    ]
});

export default router;