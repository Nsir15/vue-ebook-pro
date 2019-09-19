import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
// import Home from '../components/Home'
// import About from '../components/About'
const Home = () => import('../components/Home')
const About = () => import('../components/About')
const Message = () => import('../components/Message')
const News = () => import('../components/News')
const Profile = () => import('../components/Profile')

// 注入插件
Vue.use(Router);

// 定义路由
const routes = [
  {
    path:'/',
    redirect:'/home',
    meta:{
      title:'首页'
    }
  },
  {
    path:'/home',
    // name:'Home',
    component:Home,
    children:[
      {
        path:'',
        redirect:'message'
      },
      {
        path:'message',
        component:Message
      },{
        path:'news',
        component:News
      }
    ],
    meta:{
      title:'首页'
    }
  },
  {
    path:'/About/:id',
    component:About,
    meta:{
      title:'关于'
    }
  },
  {
    path:'/profile/:id',
    component:Profile,
    meta:{
      title:'档案'
    }
  }
]


// 创建并导出router实例
// export default new Router({
//   routes,
//   mode:'history',
//   linkActiveClass:'active'
// })

const router = new Router({
  routes,
  mode:'history',
  linkActiveClass:'active'
});

router.beforeEach((to,from , next)=>{
  window.document.title = to.meta.title;
  next()
});
export default router;
