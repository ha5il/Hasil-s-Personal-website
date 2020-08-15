import '@babel/polyfill'
import 'mutationobserver-shim'
import Vue from 'vue'
import './plugins/bootstrap-vue'
import App from './App.vue'
import router from './router'
import VueAnalytics from 'vue-analytics'
import VueMeta from 'vue-meta'

Vue.config.productionTip = false

const app = new Vue({
  router,
  data: { routeLoading: false },
  render: h => h(App)
}).$mount('#app')

router.beforeEach((to, from, next) => {
  app.routeLoading = true
    next()
})

router.afterEach(() => {
  setTimeout(() => app.routeLoading = false, Math.random() * (1500 - 500) + 500)
})

Vue.use(VueAnalytics, {
  id: 'UA-72808058-1',
  checkDuplicatedScript: true
})

Vue.use(VueMeta, {
  keyName: 'metaInfo',
  attribute: 'data-vue-meta',
  ssrAttribute: 'data-vue-meta-server-rendered',
  tagIDKeyName: 'vmid',
  refreshOnceOnNavigation: true
})