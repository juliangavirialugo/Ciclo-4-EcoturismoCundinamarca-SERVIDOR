import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home/Home.vue';


Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: "/actividades",
    name: "Actividades",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "actividades" */ "../views/Actividades.vue"),
  },

  {
    path: "/blog",
    name: "Blog",
    
    component: () =>
      import( "../views/Blog/Blog.vue"),
  },

  {
    path: "/nosotros",
    name: "Nosotros",
    
    component: () =>
      import( "../views/Nosotros.vue"),
  },
]

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
})

export default router;
