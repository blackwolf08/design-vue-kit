import Vue from 'vue'
import App from './App.vue'

//Importing necessary modules..
import BootstrapVue from 'bootstrap-vue'
import 'bootstrap';
import 'bootstrap-vue';
import 'bootstrap-italia';
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-vue/dist/bootstrap-vue.min.css'
import 'bootstrap-italia/dist/css/bootstrap-italia.min.css'
import 'bootstrap-vue/dist/bootstrap-vue.min.js'
import 'bootstrap-italia/dist/js/bootstrap-italia.min.js'
import 'bootstrap/js/dist/button.js'

//using BootstrapVue
Vue.use(BootstrapVue)

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app');
