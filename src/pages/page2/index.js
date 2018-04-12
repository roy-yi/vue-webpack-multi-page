import Vue from 'vue'
import App from '../app'
import VueRouter from 'vue-router'
import routes from './route'

document.addEventListener('DOMContentLoaded', function () {
  if (window.FastClick) window.FastClick.attach(document.body)
}, false)

Vue.use(VueRouter)

const router = new VueRouter({
  routes // （abbr.）equals-> routes: routes
})

new Vue({ // eslint-disable-line
  el: '#app',
  render: h => h(App),
  router
})
let indexScrollTop = 0
router.beforeEach((route, redirect, next) => {
  if (route.path !== '/') {
    indexScrollTop = document.body.scrollTop
  }
  document.title = route.meta.title || document.title
  next()
})

router.afterEach(route => {
  if (route.path !== '/') {
    document.body.scrollTop = 0
  } else {
    Vue.nextTick(() => {
      document.body.scrollTop = indexScrollTop
    })
  }
})
