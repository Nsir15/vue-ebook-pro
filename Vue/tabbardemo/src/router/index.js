import Vue from 'vue'
import Router from 'vue-router'
import TabBar from "../components/TabBar/TabBar";

Vue.use(Router);

const routes = [
  {
    path:'/',
    name:'TabBar',
    component:TabBar
  }
];
const router = new Router({
  routes
});

export default router;
