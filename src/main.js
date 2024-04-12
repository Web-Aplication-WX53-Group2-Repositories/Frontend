import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
//PrimeVue
import PrimeVue from "primevue/config";
import 'primevue/resources/themes/aura-light-green/theme.css'
//PrimeVue components
import Button from "primevue/button";
import InputText from "primevue/inputtext";
//Vue I18n
import { createI18n } from 'vue-i18n'

const app = createApp(App);

const i18n = createI18n({
    locale: 'es',
    messages: {
        en: {
            hello: 'Hello {msg}'
        },
        es: {
            hello: 'Hola {msg}'
        },
        jp: {
            hello: 'こんにちは、世界'
        }
    }
})

app.use(PrimeVue);
app.use(i18n);
app.component('pv-button', Button)
app.component('pv-input-text', InputText)

app.mount('#app')