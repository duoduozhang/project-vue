import Vue from 'vue'
import App from './App'
// route和下面的route对应
import route from './router/index.js'
// 加载ui组件
import ElementUI from 'element-ui'
// css样式可以直接import
import 'element-ui/lib/theme-chalk/index.css'
// 启用ElementUI
Vue.use(ElementUI)
Vue.config.productionTip = false
// 拦截路由
route.beforeEach((to, from, next) => {
  let user = localStorage.getItem('mytoken')
  if (user) {
    next()
  } else {
    if (to.path !== '/login') {
      next({path: './login'})
    } else {
      next()
    }
  }
})
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router: route,
  render: c => c(App)
})
