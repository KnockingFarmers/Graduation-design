import Vue from "vue";
import VueRouter from "vue-router";

//使用插件
Vue.use(VueRouter);

//页面路由管理
export default new VueRouter({
    // mode: 'history',
    routes: [{
            name: "home",
            path: "/",
            component: () => import("@/pages/teachersInfo/TeachersInfo.vue"),
            children: [],
        },
        {
            name: "teachersDetail",
            path: "/teachersDetail",
            component: () => import("@/pages/teachersDetail/TeachersDetail.vue")
        },
        {
            name: "about",
            path: "/about",
            component: () => import("@/pages/about/About.vue")
        },

    ]
})