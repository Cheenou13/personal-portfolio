import { createApp } from 'vue'
import './tailwind.css'
import App from './App.vue'
import router from './router'
// import LottieVuePlayer from "@lottiefiles/vue-lottie-player";

const myApp = createApp(App)

// createApp(App).use(router).mount('#app')
myApp.use(router)
// myApp.use(LottieVuePlayer)
myApp.mount('#app')
