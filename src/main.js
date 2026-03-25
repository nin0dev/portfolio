import { createApp } from 'vue'
import { createHead } from '@unhead/vue/client'
import { VueLenis } from 'lenis/vue'
import App from './App.vue'

const app = createApp(App)
const head = createHead()

app.use(head)
app.component('VueLenis', VueLenis)
app.mount('#app')
