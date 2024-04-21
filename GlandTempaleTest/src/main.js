import { createApp } from 'vue'
import { createPinia } from 'pinia'
import PrimeVue from "primevue/config";
import App from './App.vue'
import router from './router'
import InputText from 'primevue/inputtext';
import Button from 'primevue/button';
import Toast from 'primevue/toast';
import ToastService from 'primevue/toastservice';
import Menubar from 'primevue/menubar';
import 'primevue/resources/themes/mdc-light-indigo/theme.css' // theme
import 'primevue/resources/primevue.min.css'; // core css
import 'primeicons/primeicons.css' // icons
import './assets/layout/layout.scss'
const app = createApp(App)

app.use(PrimeVue, {ripple: true})
app.component('InputText', InputText)
app.component('Button', Button)
app.component('Toast', Toast)
app.use(createPinia())
app.use(ToastService)
app.component('Menubar', Menubar)
app.use(router)

app.mount('#app')