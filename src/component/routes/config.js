import Todos from "../common/todos.jsx";
import Foods from "../foods.jsx";
import FormFood from "../pages/form-food.jsx";
import Home from "../pages/home.jsx";
import Login from "../pages/login.jsx";
import NotFound from "../pages/not-found.jsx";
import Register from "../pages/register.jsx";

export const routes = [
    { path: "/foods", component: Foods, exact: true },
    { path: "/foods/:foodsId", component: FormFood, exact: false },
    { path: "/home", component: Home, exact: false },
    { path: "/about", component: Todos, exact: false },
    { path: "/login", component: Login, exact: false },
    { path: "/register", component: Register, exact: false },
    { path: "/not-found", component: NotFound, exact: false },
    { from: "/", redirect: "/foods", exact: true },
    { redirect: "/not-found", exact: true },
]