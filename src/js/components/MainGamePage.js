import '../../../public/assets/style.css';

function MainGamePage($container) {
    this.$container = $container;

    this.setState = () => {
        this.render();
    };

    this.render = () => {
        this.$container.innerHTML = `
        <div>
            <a>
                <h1>Bingo</h1>
                <div id="container">
                    <div id="rowContainer">
                        <div id="wordBox">
                        </div>
                        <div id="wordBox">
                        
                        </div>
                        <div id="wordBox">
                        
                        </div>
                        <div id="wordBox">
                        
                        </div>
                        <div id="wordBox">
                        
                        </div>
                    </div>
                    <div id="rowContainer">
                        <div id="wordBox">
                        
                        </div>
                        <div id="wordBox">
                        
                        </div>
                        <div id="wordBox">
                        
                        </div>
                        <div id="wordBox">
                        
                        </div>
                        <div id="wordBox">
                        
                        </div>
                    </div>
                    <div id="rowContainer">
                        <div id="wordBox">
                        
                        </div>
                        <div id="wordBox">
                        
                        </div>
                        <div id="wordBox">
                        
                        </div>
                        <div id="wordBox">
                        
                        </div>
                        <div id="wordBox">
                        
                        </div>
                    </div>
                    <div id="rowContainer">
                        <div id="wordBox">
                        
                        </div>
                        <div id="wordBox">
                        
                        </div>
                        <div id="wordBox">
                        
                        </div>
                        <div id="wordBox">
                        
                        </div>
                        <div id="wordBox">
                        
                        </div>
                    </div>
                    <div id="rowContainer">
                        <div id="wordBox">
                        
                        </div>
                        <div id="wordBox">
                        
                        </div>
                        <div id="wordBox">
                        
                        </div>
                        <div id="wordBox">
                        
                        </div>
                        <div id="wordBox3">
                        
                        </div>
                    </div>
                </div>
            </a>
        </div>
    `
    }

    this.render();
}



export default MainGamePage;