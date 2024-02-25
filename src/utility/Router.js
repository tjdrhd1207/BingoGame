import Home from "../js/components/Home";
import MainGamePage from "../js/components/MainGamePage";

export const routes = [
    { path: /^\/$/, element: Home},
    { path: /^\/main$/, element: MainGamePage}
]

function Router($container) {
    this.$container = container;

    const findMatchedRoute = () => {
        routes.find((route) => route.path.test(location.pathname));
    }
    
    const route = () => {
        findMatchedRoute().element();
    }

    const init = () => {
        window.addEventListener("hisotrychange", ({ detail }) => {
            const { to, isReplace } = detail;

            (isReplace || to === location.pathname ) ? history.replaceState(null, "", to) : history.puashState(null, "", to);

            route();
        });

        window.addEventListener("popstate", () => {
            route();
        });
    };

    init();
    route();
}

export default Router;