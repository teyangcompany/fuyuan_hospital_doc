import Vue from 'vue'
import Router from 'vue-router'
import home from './home'
import myDoc from './my-doc'
Vue.use(Router)

/*路由懒加载*/
export default new Router({
    routes: [
        {
            path: '/',
            component: () => import("../pages/home/index.vue")
        },
        ...home,
        ...myDoc
    ],

})
