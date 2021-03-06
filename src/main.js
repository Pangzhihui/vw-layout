import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

// style
import '@/assets/css/index.scss'
import 'highlight.js/styles/monokai-sublime.css'

import xhr from '@/assets/api'

// directive
// use case <pre v-highlightjs="code"><code class="javascript"></code></pre>
import vueHighlightJS from '@/assets/js/vue-highlight.js'

Vue.config.productionTip = false
Vue.prototype.$xhr = xhr
Vue.use(vueHighlightJS)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
