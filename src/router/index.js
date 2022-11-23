import * as vueRouter from "vue-router";
import Login from "../components/pages/Login.vue";
import SignUp from "../components/pages/SignUp.vue";
import Chat from "../components/pages/Chat.vue";

const routes = [
  {
    path: "/",
    component: Chat,
  },
  {
    path: "/signup",
    component: SignUp,
  },
  {
    path: "/Login",
    component: Login,
  }
];

const router = vueRouter.createRouter({
  history: vueRouter.createWebHistory(),
  routes,
});

export default router;