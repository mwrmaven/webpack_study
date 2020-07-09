// TODO webpack 与 vue-router结合

import Vue from 'vue'
// 导入 Account、GoodsList 组件
import account from './main/Account.vue'
import goodslist from './main/GoodsList.vue'
import login from './subcom/login.vue'
import register from './subcom/register.vue'

//1、 导入vue路由 vue-router
import VueRouter from 'vue-router'
//2、手动安装 VueRouter, 这样来关联vue和vue-router
Vue.use(VueRouter);
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


// 导入 app 组件
import app from './App.vue'

var vm = new Vue({
    el: '#app',
    render: c => c(app), // render 会将el指定的容器中，所有的内容都清空、覆盖，不要将路由的 router-view 和 router-link 直接写到 el所控制的元素中
    // 4、挂载路由对象
    router
});

// 注意：App组件是通过vm实例的render函数渲染出来的，render函数如果要渲染组件，渲染出来的组件只能放到 el 指定的元素中；
// Account和GoodsList组件，是通过路由匹配监听到的，所以，这两个组件只能展示到属于路由的 router-view 中去


// 安装路由 vue-router ： npm i vue-router -S

