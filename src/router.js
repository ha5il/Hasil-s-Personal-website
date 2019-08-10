import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  scrollBehavior () {
    return { x: 0, y: 0}
  },
  routes: [
    {
      path: "/",
      name: "home",
      component: require("@/views/Home.vue").default // load sync home
    },
    {
      path: "/quotes",
      name: "quotes",
      component: () => import("@/views/Quotes.vue")
    },
    {
      path: "/projects",
      name: "projects",
      component: () => import("@/views/Projects.vue")
    },
    {
      path: "/project/:slug",
      name: "project",
      component: () => import("@/views/Project.vue")
    },
    {
      path: "/gallery",
      name: "gallery",
      component: () => import("@/views/Gallery.vue")
    },
    {
      path: "/hire-Hasil",
      name: "hire-hasil",
      component: () => import("@/views/HireHasil.vue")
    },
    // {
    //   path: "*",
    //   name: "404*",
    //   component: require("@/pages/404.vue").default // load sync home
    // }
  ]
})
