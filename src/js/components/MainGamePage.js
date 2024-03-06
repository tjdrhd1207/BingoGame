import '../../../public/assets/style.css';
import Keyboard from './Keyboard';
import axios from 'axios';
import { WORDS } from '../words';

function MainGamePage($container) {
    this.$container = $container;
    const NUMBER_OF_ROW = 5;
    const WORD_LEN = 5;
    let rowRemaining = NUMBER_OF_ROW;
    let nextLetter = 0; //다음 단어
    let inputLineWord = [];
    let correctWord = WORDS[Math.floor(Math.random() * WORDS.length )];
    console.log("정답 : "+correctWord);

    const keyboard = new Keyboard();

    this.setState = () => {
        this.render();
        const root = document.getElementById("main");

        root.innerHTML += keyboard.innerHTML;
        /* 콜백함수 호출 */
        
        let inputValue = "";
        keyboard.clickEvent((value) => {
            inputValue = value;
            this.insertLetter(inputValue);
        });

        keyboard.keydownEvent((value) => {
            inputValue = value;
            inputValue = inputValue.toUpperCase();
            const keydowBtn = document.getElementById(inputValue);
            keydowBtn.classList.add("keydownStyle");

            if(inputValue !== "BACKSPACE" && inputValue !== "ENTER" && nextLetter < WORD_LEN) {
                this.insertLetter(inputValue);
            } else if (inputValue === "BACKSPACE" && nextLetter !== 0) {
                this.deleteLetter();
            } else if (inputValue === "ENTER") {
                this.checkWord();
            }

            setTimeout(()=>{
                keydowBtn.classList.remove("keydownStyle")
            }, 300);
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
        let rowInput = document.getElementsByClassName("rowContainer")[NUMBER_OF_ROW - rowRemaining];
        let box = rowInput.children[nextLetter];
        box.classList.add("filled-word");
        box.innerHTML = inputValue;
        inputLineWord.push(inputValue);
        
        nextLetter += 1;
        
        /* if(nextLetter == 5) {
            rowRemaining-=1;
            nextLetter = 0;
        } */
    }
    
    this.deleteLetter = () => {
        console.log(nextLetter);
            let rowInput = document.getElementsByClassName("rowContainer")[NUMBER_OF_ROW - rowRemaining];
            let box = rowInput.children[nextLetter - 1];
            box.classList.remove("filled-word");
            box.innerHTML = "";
            inputLineWord.pop();
            nextLetter -= 1;
    }

    this.checkWord = () => {
        /* 
            1. nextLetter가 꽉찼는지 확인
            2. 입력된 word확인 
            3. axios통신을 통해 단어 확인
            4. 단어 자체가 맞는지 확인 후 확인되면 -> 다음줄로 넘어감 (rowRemaining -1 ) && nextLetter = 0
            5. 단어가 아니라면 not Word라는 문구를 통해 다음줄로 안넘어가도록함 
            */
        if(nextLetter < WORD_LEN) {
            alert("글 채우세요");
        } else {
            console.log(inputLineWord);
            const joinWord = inputLineWord.join('');
            console.log(joinWord);
            const params = {
         
            };
            const TRANSLATE_METHODS = {
                nmt: 'nmt',
                smt: 'smt',
            };

            const url = 'papago/n2mt';

            const config = {
                baseURL: `https://api.dictionaryapi.dev/api/v2/entries/en/${joinWord}`,
                headers: {
                    'content-type' : 'application/x-www-form-urlencoded; charset=UTF-8',
                },
            };

            axios.get(config.baseURL, params, config.headers).then((res)=> {
                console.log(res);
                if(res.status === 200) {
                    this.countToCorrect();
                }
            }).catch((error) => {
                if(error.response && error.response.status === 404) {
                    alert("단어가 없습니다.");
                }
            });            
        }
    }

    this.countToCorrect = () => {
        console.log("ㅇㅇㅇ");
        inputLineWord.forEach((value, index)=> {
            console.log(correctWord);
            const cWord = correctWord.find((value, index)=> index);
            console.log("같은 결과 : "+cWord);
            let rowInput = document.getElementsByClassName("rowContainer")[NUMBER_OF_ROW - rowRemaining];
            let box = rowInput.children[index];
            if(correctWord.includes(value)) {
                if(correctWord[index] === inputLineWord[index]) {
                    console.log("정답 : "+box);

                    box.classList.add("bingo");
                } else {
                    console.log("반만 정답 : "+box);

                    box.classList.add("half-bingo");
                }
            }
        })
    }

    this.setState();
}



export default MainGamePage;