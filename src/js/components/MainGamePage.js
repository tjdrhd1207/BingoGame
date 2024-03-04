import '../../../public/assets/style.css';
import Keyboard from './Keyboard';
 

function MainGamePage($container) {
    this.$container = $container;
    const NUMBER_OF_ROW = 5;
    let rowRemaining = NUMBER_OF_ROW;
    let nextLetter = 0; //다음 단어
    let inputLineWord = [];

    this.setState = () => {
        this.render();
        const keyboard = new Keyboard();
        const root = document.getElementById("main");

        root.innerHTML += keyboard.innerHTML;
        /* 콜백함수 호출 */
        
        let inputValue = "";
        keyboard.clickEvent((value) => {
            inputValue = value;
            this.insertLetter(inputValue);
        });

    };

    

    this.render = () => {
        this.$container.innerHTML = `
        <div id="main">
            <a>
                <h1>Bingo</h1>
                <div id="container">
                    <div id="rowContainer1" class="rowContainer">
                        <div id="wordBox1" class="word">
                        </div>
                        <div id="wordBox2" class="word">
                        
                        </div>
                        <div id="wordBox3" class="word">
                        
                        </div>
                        <div id="wordBox4" class="word">
                        
                        </div>
                        <div id="wordBox5" class="word">
                        
                        </div>
                    </div>
                    <div id="rowContainer2" class="rowContainer">
                        <div id="wordBox1" class="word">
                        
                        </div>
                        <div id="wordBox2" class="word">
                        
                        </div>
                        <div id="wordBox3" class="word">
                        
                        </div>
                        <div id="wordBox4" class="word">
                        
                        </div>
                        <div id="wordBox5" class="word">
                        
                        </div>
                    </div>
                    <div id="rowContainer3" class="rowContainer">
                        <div id="wordBox1" class="word">
                        
                        </div>
                        <div id="wordBox2" class="word">
                        
                        </div>
                        <div id="wordBox3" class="word">
                        
                        </div>
                        <div id="wordBox4" class="word">
                        
                        </div>
                        <div id="wordBox5" class="word">
                        
                        </div>
                    </div>
                    <div id="rowContainer4" class="rowContainer">
                        <div id="wordBox1" class="word">
                        
                        </div>
                        <div id="wordBox2" class="word">
                        
                        </div>
                        <div id="wordBox3" class="word">
                        
                        </div>
                        <div id="wordBox4" class="word">
                        
                        </div>
                        <div id="wordBox5" class="word">
                        
                        </div>
                    </div>
                    <div id="rowContainer5" class="rowContainer">
                        <div id="wordBox1" class="word">
                        
                        </div>
                        <div id="wordBox2" class="word">
                        
                        </div>
                        <div id="wordBox3" class="word">
                        
                        </div>
                        <div id="wordBox4" class="word">
                        
                        </div>
                        <div id="wordBox5" class="word">
                        
                        </div>
                    </div>
                </div>
            </a>
        </div>
    `
    }

    this.insertLetter = (inputValue) => {
        if (rowRemaining <= 0) return ;
        let rowInput = document.getElementsByClassName("rowContainer")[5 - rowRemaining];
        let box = rowInput.children[nextLetter];
        box.classList.add("filled-word");
        box.innerHTML = inputValue;
        inputLineWord.push(inputValue);
        
        nextLetter += 1;
        
        if(nextLetter == 5) {
            rowRemaining-=1;
            nextLetter = 0;
        }
    }

    this.setState();
}



export default MainGamePage;