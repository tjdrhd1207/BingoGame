import { routes } from "./routesInfo";

function Router($container) {
    this.$container = $container;
    let currentPage;

    console.log(this.$container);
    const findMatchedRoute = () => {
        /* console.log("패스네임 : "+location.pathname); */
        const res = routes.find((route) => route.path.test(location.pathname));
        return res.element();

    }
    
    const route = () => {
        findMatchedRoute();
    }

    const init = () => {
        console.log("이닛");
        window.addEventListener("historychange", ({ detail }) => {
            const { to, isReplace } = detail;
            console.log("히스토리체인지");
            console.log(detail);
            if(isReplace || to === location.pathname ) {
                history.replaceState(null, "", to)
            }
            else { 
                history.pushState(null, "", to)
            } 
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