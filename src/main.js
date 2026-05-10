import { createApp } from 'vue'
import { createBootstrap, Components, Directives } from 'bootstrap-vue-next'
import App from './App.vue'
import router from './router'
import { appState } from './state'

import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-vue-next/dist/bootstrap-vue-next.css'

router.beforeEach((to, from, next) => {
  appState.routeLoading = true
  next()
})

router.afterEach(() => {
  setTimeout(() => {
    appState.routeLoading = false
  }, Math.random() * (1500 - 500) + 500)
})

const app = createApp(App)
app.use(router)
app.use(createBootstrap())

// Register all components and directives globally
Object.entries(Components).forEach(([name, component]) => app.component(name, component))
Object.entries(Directives).forEach(([name, directive]) => {
  // Strip leading 'v' from export name: vBTooltip -> BTooltip (used as v-b-tooltip)
  app.directive(name.replace(/^v/, ''), directive)
})

app.mount('#app')
