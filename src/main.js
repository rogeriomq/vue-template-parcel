import Vue from 'vue'
import App from './App'

import plugins from './plugins'

plugins({ Vue })

import './css/theme.styl'
const app = new Vue({
  el: '#app',
  render: h => h(App)
})

export default {
  app
}
