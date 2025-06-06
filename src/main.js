import '@iot-os/assets/styles/main.scss'
import { createApp } from 'vue'
import { autoSetToken } from '@iot-os/utils/auth.js'
import App from './App.vue'
import router from './router'

autoSetToken()

const app = createApp(App)

app.use(router)

app.mount('#app')
