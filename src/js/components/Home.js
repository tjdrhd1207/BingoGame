import bingoLogo from '../../../public/img/bingo.svg'
import MainGamePage from './MainGamePage'
import { navigate } from '../../utility/naviagte';
/* import Router from '../../utility/router'; */

function Home($container) {
    console.log($container);
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
    const btn = document.getElementById("joinBtn");
    
    btn.addEventListener("click", (e) => {
        const target = e.target.closest("a");
        if(!(target instanceof HTMLAnchorElement)) return;
        console.log(target);
        e.preventDefault();
        const targetURL = target.href;
        console.log(targetURL);
        navigate(targetURL);

    })
}

export default Home;