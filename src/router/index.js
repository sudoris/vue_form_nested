import Vue from 'vue'
import Router from 'vue-router'
import Form from '@/components/Form'
import VueFormGenerator from "vue-form-generator"

Vue.use(VueFormGenerator)
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Form',
      component: Form
    }
  ]
})
