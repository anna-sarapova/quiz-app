import { createWebHistory, createRouter } from "vue-router";
import Home from "../components/Home.vue";
import Register from "../components/Register.vue";
import QuizWindow from "../components/QuizWindow.vue";

const routes = [
    {
        path: "/",
        name: "Home",
        component: Home,
        children: [
            {
                path: "/all",
                name: "all",
                component: QuizWindow,
            },
            {
                path: "/register",
                name: "Register",
                component: Register,
            }
        ]
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;