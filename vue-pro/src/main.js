import Vue from 'vue'
import '@ai/lit-element'
import App from './App.vue'

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
