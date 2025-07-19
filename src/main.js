import { createApp } from 'vue';
import App from './App.vue';
import router from './router';

// Импортируйте Vuetify
import { createVuetify } from 'vuetify';
import 'vuetify/styles'; // стили Vuetify
import * as components from 'vuetify/components';
import * as directives from 'vuetify/directives';

// Создайте экземпляр Vuetify
const vuetify = createVuetify({
    components,
    directives,
});

createApp(App)
    .use(router)
    .use(vuetify)
    .mount('#app');