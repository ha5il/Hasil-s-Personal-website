import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "home",
      component: require("@/views/Home.vue").default // load sync home
    },
    // {
    //   path: "/photos",
    //   name: "photos",
    //   component: () => import("@/pages/Photos.vue")
    // },
    {
      path: "/about-hasil",
      name: "about",
      component: () => import("@/views/About.vue")
    },
    {
      path: "/project/:slug",
      name: "project",
      component: () => import("@/views/Project.vue")
    },
    // {
    //   path: "*",
    //   name: "404*",
    //   component: require("@/pages/404.vue").default // load sync home
    // }
  ]
})
