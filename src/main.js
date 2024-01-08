import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import PrimeVue from 'primevue/config';
import 'primevue/resources/themes/lara-dark-blue/theme.css'
import 'primeicons/primeicons.css'
import ConfirmationService from 'primevue/confirmationservice';

createApp(App).use(ConfirmationService).use(PrimeVue).use(router).mount('#app');
