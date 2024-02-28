import Home from "../js/components/Home";
import MainGamePage from "../js/components/MainGamePage";

const BASE_URL_ = "http://localhost:5173";

const $ = (elementName) => document.querySelector(elementName);

export const routes = [
    { path: /^\/$/, element: () => new Home($("#app"))},
    { path: /^\/main$/, element: () => new MainGamePage($("#app"))}
]
