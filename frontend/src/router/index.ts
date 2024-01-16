import {createRouter,createWebHashHistory} from 'vue-router'
const Index = () => import('../pages/Index.vue')
const Home = ()=> import('../pages/Home.vue')
const NotFound =()=> import('../pages/NotFound.vue')
const Register =()=> import('../pages/Register.vue')
const Login = () => import('../pages/Login.vue')
// const Consult =() => import('../components/Consult.vue') 
const routes =[
    {
        path:"/",
        component:Home,
    },
    {
        path:"/home",
        component:Home,
        // children:[
        //     {
        //         path:"/newest",
        //         components:{
        //             default:Consult
        //         }
        //     },
        //     {path:"merchant/:id",component:()=>import('../components/Merchant.vue')},
        // ]
    },
    {path:"/login",component:Login},
    {path:"/register",component:Register},
    // {path:"/home",component:Home},
    {path:'/:path(.*)',component:NotFound}

]

//创建路由器对象
const router =createRouter({
    history:createWebHashHistory(),
    routes:routes,
})

// //定义路由导航前置守卫
// router.beforeEach((to,from,next)=>{

// })
// //定义路由导航后置守卫
// router.afterEach((to,from,next)=>{
//    // console.log(`output->next`,next)
// })

export default router