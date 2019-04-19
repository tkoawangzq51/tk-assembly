import Vue from 'vue'
import 'tkcloud-ui'
import 'tkcloud-ui/dist/tkcloud-ui.css'

import App from './App.vue'

Vue.config.productionTip = false

new Vue({
  render: h => h(App)
}).$mount('#app')
