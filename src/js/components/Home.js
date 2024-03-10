import bingoLogo from '../../../public/img/bingo.svg';
import { navigate } from '../../utility/naviagte';
import Router from '../../utility/router';

function Home($container) {
    console.log("1번");
    this.$container = $container;

    this.setState = () => {
        this.render();
    };

    this.render = () => {
        this.$container.innerHTML = `
            <div>
                    <img src="${bingoLogo}" class="logo" alt="Vite logo" />
                    <h1>Hello BingoGame</h1>
                    <div class="card">
                        <a id="joinBtn" href="/main" type="button">Join this Game</a>
                    </div>
            </div>    
        `
    };

    this.render();

    const init = () => {
        const btn = document.getElementById("joinBtn");
        
            btn.addEventListener("click", (e) => {
            const target = e.target.closest("a");
            if(!(target instanceof HTMLAnchorElement)) return;
            e.preventDefault();
            
            const targetURL = target.href;
            
            navigate(targetURL);
            console.log(targetURL);
        });
        new Router(this.$container);
    }
    init();
}

export default Home;