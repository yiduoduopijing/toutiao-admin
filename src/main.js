// 项目的启动入口
import Vue from 'vue'
import App from './App.vue'
import router from './router'
/* 加载elementui */
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import store from './store'
import './style/index.less'

/* //在全局注册elemengtui */
Vue.use(ElementUI)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
