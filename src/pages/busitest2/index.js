import Vue from 'vue'
import App from '../app'
// import Mint from 'mint-ui'
// import 'mint-ui/lib/style.css'
import VueRouter from 'vue-router'
import routes from './route'

// import VueJsonp from 'vue-jsonp'
// Vue.use(VueJsonp)

document.addEventListener('DOMContentLoaded', function () {
  if (window.FastClick) window.FastClick.attach(document.body)
}, false)

// Vue.use(Mint)
Vue.use(VueRouter)

// Vue.http.options.emulateJSON = true

const router = new VueRouter({
  routes // （缩写）相当于 routes: routes
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
