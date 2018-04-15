import Vue from 'vue'
import Router from 'vue-router'
import Templates from '@/components/Templates'

Vue.use(Router)

export default new Router({
 routes:[
   {
      path:'/',
     name:'Templates',
     component:Templates
   }
 ]
})
