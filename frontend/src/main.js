import 'bootstrap/dist/css/bootstrap.min.css'

import { createApp } from 'vue'

import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faPlus } from '@fortawesome/free-solid-svg-icons'

import App from './App.vue'
// import './registerServiceWorker'

import router from './router'
import store from './state'

library.add(faPlus)

createApp(App)
  .use(store)
  .use(router)
  .component('font-awesome-icon', FontAwesomeIcon)
  .mount('#app')
