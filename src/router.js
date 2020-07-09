import Vue from 'vue'
// 导入 Account、GoodsList 组件
import account from './main/Account.vue'
import goodslist from './main/GoodsList.vue'
import login from './subcom/login.vue'
import register from './subcom/register.vue'

//1、 导入vue路由 vue-router
import VueRouter from 'vue-router'

//3、创建一个路由对象
var router = new VueRouter({
    // 路由
    routes: [
        // 定义两个路由 account goodslist
        {
            path: '/account',
            component: account,
            children: [ // 子路由
                { path: 'login', component: login}, // TODO 注意，子路由不能加斜杠 /
                { path: 'register', component: register}
            ]
        },
        {path: "/goodslist", component: goodslist}
    ]
});

// 将路由对象暴露出去
export default router
