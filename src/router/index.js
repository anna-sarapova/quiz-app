import { createWebHistory, createRouter } from "vue-router";
import Home from "../components/Home.vue";
import Register from "../components/Register.vue";
import QuizWindow from "../components/QuizWindow.vue";
import QuizElement from "../components/QuizElement.vue";
import RawRouter from "../components/RawRouter.vue";
import DefaultHomePage from "../components/DefaultHomePage.vue";

const routes = [
    {
        path: "/",
        name: "Home",
        component: Home,
        children: [
            {
                path: "/quizzes",
                name: "QuizWindow",
                component: RawRouter,
                children: [
                    {
                        path: ":id",
                        name: "quiz" ,
                        component: QuizElement,
                    },
                    {
                        path: "",
                        name: "all_quizzes" ,
                        component: QuizWindow,
                    },
                ]
            },
            {
                path: "/register",
                name: "Register",
                component: Register,
            },
            {
                path: "",
                name: "HomePage",
                component: DefaultHomePage,
            }
        ]
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;