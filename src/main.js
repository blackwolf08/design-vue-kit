import Vue from 'vue'
import BootstrapVue from 'bootstrap-vue'

import App from './App.vue'

//Importing necessary modules..
import 'bootstrap';
import 'bootstrap-vue';
import 'bootstrap-italia';
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-vue/dist/bootstrap-vue.min.css'
import 'bootstrap-italia/dist/css/bootstrap-italia.min.css'



//using BootstrapVue
Vue.use(BootstrapVue)

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app');
