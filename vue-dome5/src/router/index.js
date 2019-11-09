import Vue from 'vue'
import VueRouter from 'vue-router'
import Nprogress from 'nprogress';
import 'nprogress/nprogress.css';

// 一级路由
import Home from '../views/home/index.vue'
import Login from '../views/login.vue'
import Register from '../views/register.vue'
import Post from '../views/post.vue'

// 二级路由
import Timeline from '../views/home/timeline'
import My from '../views/home/my'

Vue.use(VueRouter)

const routes = [
  // 首页重定向到圈子
  {path: '/',  name: 'home',redirect: '/home/timeline'},
  // 登陆页面
  {path: '/login',component: Login},
  // 发送朋友圈
  {path: '/post',component: Post},
  // 注册页面
  {path: '/register',component: Register},
  // 收藏页面
  {path: '/favor',component: null},
  // 更改密码
  {path: '/modify',component: null},
  // 个人信息
  {path: '/info',component: null},
  // 首页
  {path: '/home',component: Home,
    // 圈子
    children: [{path: '/home/timeline',component: Timeline},
    // 我的
    {path: '/home/my',component: My}]
  },
  // 评论
  {path: '/comment',component: null,
  // 收到的评论
    children: [{path: '/comment/receive',component: null},
    //发出的评论
    {path: '/comment/send',component: null}]
  },
  
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})


// 添加导航守卫
const whiteList = ['/login', '/register']
router.beforeEach((to, from, next)=>{
  Nprogress.start();
  let isLogin = window.sessionStorage.getItem('isLogin');

  if (!isLogin){
    if (whiteList.indexOf(to.path) === -1){
      Nprogress.done();
      next('/login');
    }else{
      next();
    }
  }else{
    next();
  }
})

router.afterEach((to, from)=>{
  Nprogress.done();
})
export default router
