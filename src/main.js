import { createApp } from 'vue'
import { VueLenis } from 'lenis/vue'
import App from './App.vue'

const app = createApp(App)
app.component('VueLenis', VueLenis)
app.mount('#app')
