import Foods from "../foods.jsx";
import FoodDetails from "../pages/foodDetails.jsx";
import Home from "../pages/home.jsx";
import Login from "../pages/login.jsx";
import NotFound from "../pages/not-found.jsx";
import Register from "../pages/register.jsx";

export const routes = [
    { path: "/foods", component: Foods, exact: true },
    { path: "/foods/:foodsId", component: FoodDetails, exact: false },
    { path: "/home", component: Home, exact: false },
    { path: "/login", component: Login, exact: false },
    { path: "/register", component: Register, exact: false },
    { path: "/not-found", component: NotFound, exact: false },
    { from: "/", redirect: "/foods", exact: true },
    { redirect: "/not-found", exact: true },
]