import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'jquery/src/jquery.js'
// import 'bootstrap.bundle.js'
// import Popper from 'popper.js'
// import 'bootstrap.bundle.min.js'
createApp(App).use(router).mount('#app')
