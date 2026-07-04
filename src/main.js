import { createApp } from 'vue'
import {
  createBootstrap,
  BBadge,
  BBreadcrumb,
  BCard,
  BCardText,
  BCardTitle,
  BCol,
  BContainer,
  BImg,
  BLink,
  BListGroup,
  BListGroupItem,
  BNav,
  BNavItem,
  BProgress,
  BProgressBar,
  BRow,
  BTooltip,
  vBTooltip,
} from 'bootstrap-vue-next'
import App from './App.vue'
import router from './router'

import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-vue-next/dist/bootstrap-vue-next.css'

const app = createApp(App)
app.use(router)
app.use(createBootstrap())

// Register ONLY the components/directives templates actually use (tree-shaking).
// Adding a new <b-*> tag or v-b-* directive anywhere? Import + register it here,
// or the component silently renders as an unknown element.
const components = {
  BBadge, BBreadcrumb, BCard, BCardText, BCardTitle, BCol, BContainer,
  BImg, BLink, BListGroup, BListGroupItem, BNav, BNavItem,
  BProgress, BProgressBar, BRow, BTooltip,
}
Object.entries(components).forEach(([name, component]) => app.component(name, component))
// Directive export names drop the leading 'v': vBTooltip -> used as v-b-tooltip
app.directive('BTooltip', vBTooltip)

app.mount('#app')
