import {createRouter, createWebHistory} from 'vue-router'
import Home from "@/views/Home.vue";
import Login from "@/views/Login.vue";
import UserList from "@/views/UserList.vue";
import NotFound from "@/views/NotFound.vue";

const routes = [
    {
        path: '/',
        name: 'home',
        component: Home
    },
    {
        path: '/login',
        name: 'Login',
        component: Login
    },
    {
        path: '/users',
        name: 'UserList',
        component: UserList
    },
    {
        path: "/:pathMatch(.*)*",
        name: 'NotFound',
        component: NotFound
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

router.beforeEach((to, from, next) => {
    console.log("navigate to " + to.path)
    next()
})

export default router