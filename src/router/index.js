import Vue from "vue";
import VueRouter from "vue-router";
import CreateDevis from "./../components/Devis/createDevis.vue";
import listDevis from "./../components/Devis/listDevis.vue";
import Login from "../views/Authentification/Login.vue";
import HomePage from "../views/HomePage.vue";
import Register from "../views/Authentification/Signup.vue";
import GateLayout from "../views/GateLayout.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/test",
    name: "test",
    props: true,
    component: () =>
      import(
        /* webpackChunkName: "test" */ "./../components/Devis/test.vue"
      )
  },
  {
    path: "/exportDevis",
    name: "exportDevis",
    props: true,
    component: () =>
      import(
        /* webpackChunkName: "exportDevis" */ "./../components/Devis/TheExportDevis.vue"
      )
  },
  {
    path: "/refusDevis",
    name: "refusDevis",
    props: true,
    component: () =>
      import(
        /* webpackChunkName: "exportDevis" */ "./../components/Devis/TheRefusDevis.vue"
      )
  },
  {
    path: "/calendardevis",
    name: "calendardevis",
    props: true,
    component: () =>
      import(
        /* webpackChunkName: "exportDevis" */ "./../components/Devis/TheCalendarDevis.vue"
      )
  },
  {
    path: "/",
    name: "Home",
    component: HomePage,
    children: [
      {
        path: "",
        name: "Devis",
        component: listDevis
      },
      {
        path: "/CreateDevis",
        name: "CreateDevis",
        component: CreateDevis
      },
      {
        path: "/listDevis",
        name: "listDevis",
        component: () =>
          import(
            /* webpackChunkName: "listDevis" */ "./../components/Devis/listDevis.vue"
          )
      }
    ]
  },
  {
    path: "/gate",
    name: "Gate",
    component: GateLayout,
    redirect: "/login",
    children: [
      {
        path: "login",
        name: "login",
        component: Login
      },
      {
        path: "signup",
        name: "Signup",
        component: Register
      }
    ]
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
