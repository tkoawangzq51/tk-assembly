import Vue from 'vue'
import 'tkcloud-ui'
import 'tkcloud-ui/dist/tkcloud-ui.css'

import App from './app1.vue'

new Vue({
  render: h => h(App),
  components: {
    App
  }

}).$mount('#app')
