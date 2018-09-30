import Vue from "vue"
import BootstrapVue from "bootstrap-vue"
import TodoList from "./TodoList.vue"

import "./styles.css"
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap-vue/dist/bootstrap-vue.css"

Vue.use(BootstrapVue)

new Vue({
  el: '#app',
  render: h => h(TodoList)
})
