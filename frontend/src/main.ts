import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import './assets/style.css'; // Dacă ai un fișier global de stiluri
import '@fortawesome/fontawesome-free/css/all.min.css';

const app = createApp(App);
app.use(router); // Asigură-te că folosești router-ul
app.mount('#app');