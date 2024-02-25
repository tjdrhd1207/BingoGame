import Home from "../js/components/Home";
import MainGamePage from "../js/components/MainGamePage";

const BASE_URL_ = "http://localhost:5173";

export const routes = [
    { path: /^\/$/, element: Home},
    { path: /^\/main$/, element: MainGamePage}
]
