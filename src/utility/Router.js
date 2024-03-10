import { routes } from "./routesInfo";
import NotFound from "../js/components/NotFound";

function Router($container) {
    this.$container = $container;
    let currentPage;

    const findMatchedRoute = () => {
        
        const res = routes.find((route) => route.path.test(location.pathname));
        console.log("res");
        console.log(res);
        return res ? res.element() : NotFound;
    }
    
    const route = () => {
        const TargetPage = findMatchedRoute() || NotFound;
        if(!TargetPage) {
            new NotFound();
        } else {
            TargetPage;
        }
    }

    const init = () => {
        console.log("이닛");
        window.addEventListener("historychange", ({ detail }) => {
            const { to, isReplace } = detail;
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
}

export default Router;