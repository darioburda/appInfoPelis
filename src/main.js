import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import './styles.css';

const app = createApp(App);
app.use(router);  // Asegúrate de que se haya llamado a .use(router)
app.mount('#app');
