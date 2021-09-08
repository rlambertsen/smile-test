import Vue from 'vue'
import App from './App.vue'
import apiConfig from './api-config.json'
import CustomSelect from '../select-component/select'
import loader from './components/loader'
import btn from './components/button'
Vue.prototype.$apiConfig = apiConfig
Vue.component('selectComponent', CustomSelect)
Vue.component('loader', loader)
Vue.component('btn', btn)
new Vue({
  render: h => h(App),
}).$mount('#app')
