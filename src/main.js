import Vue from 'vue'
import App from './App.vue'
import { Button, message } from 'ant-design-vue'

Vue.config.productionTip = false

Vue.use(Button)

Vue.prototype.$message = message

new Vue({
  render: h => h(App),
}).$mount('#app')
