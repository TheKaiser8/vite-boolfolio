import { createRouter, createWebHistory } from "vue-router";
// createWebHistory permette la navigazione tramite url e fa funzionare il tasto indietro del browser

// importo le pagine (pages)
import HomePage from './pages/HomePage.vue';
import AboutUs from './pages/AboutUs.vue';
import Page404 from './pages/Page404.vue';

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
        },

        // Rotta che gestisce l'errore della homepage (se l'utente inserisce manualmente una parte url (dopo /) errata)
        // Questa rotta va inserita sempre al fondo per permettere la ricerca e il controllo di tutte le rotte
        { 
            path: '/:pathMatch(.*)*',
            name: 'Page404',
            component: Page404,
        },
    ]
});

export default router;