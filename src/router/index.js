import Vue from 'vue'
import Router from 'vue-router'
//引入组件
//import Index from '@/components/Index'
//路由懒加载
const Index = () =>
    import ('../components/Index');
const Img = () =>
    import ('../components/Img');
const Type = () =>
    import ('../components/Type');
const Color = () =>
    import ('../components/Color');
const Detail = () =>
    import ('../components/Detail');
const Quotation = () =>
    import ('../components/Quotation');
const Login = () =>
    import ('../components/login')
Vue.use(Router)

let router = new Router({
    //两种模式
    mode: 'hash',
    routes: [{
        path: '/index',
        name: 'Index',
        component: Index,
    }, {
        path: '/img',
        name: 'Img',
        component: Img,

    }, {
        path: '/type',
        component: Type,

    }, {
        path: '/color',
        component: Color,

    }, {
        path: '/detail',
        name: 'Detail',
        component: Detail,

    }, {
        path: '/quotation',
        name: 'Quotation',
        component: Quotation,

    }, {
        path: '/login',
        component: Login,
    }, {
        path: '*',
        redirect: '/index'
    }]
})
router.beforeEach((to, from, next) => {
    // console.log(from, to);
    // console.log(this.$store)
    let login = window.localStorage.getItem('login');
    if (!login && to.path != '/login') {
        next('/login')
    }
    next()
})


export default router