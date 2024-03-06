
function Keyboard() {

        this.innerHTML = `
            <div id="keyboard-container">
                <div id="first-row">
                    <button id="Q" class="keyboard-btn">Q</button>
                    <button id="W" class="keyboard-btn">W</button>
                    <button id="E" class="keyboard-btn">E</button>
                    <button id="R" class="keyboard-btn">R</button>
                    <button id="T" class="keyboard-btn">T</button>
                    <button id="Y" class="keyboard-btn">Y</button>
                    <button id="U" class="keyboard-btn">U</button>
                    <button id="I" class="keyboard-btn">I</button>
                    <button id="O" class="keyboard-btn">O</button>
                    <button id="P" class="keyboard-btn">P</button>
                </div>
                <div id="second-row">
                    <button id="A" class="keyboard-btn">A</button>
                    <button id="S" class="keyboard-btn">S</button>
                    <button id="D" class="keyboard-btn">D</button>
                    <button id="F" class="keyboard-btn">F</button>
                    <button id="G" class="keyboard-btn">G</button>
                    <button id="H" class="keyboard-btn">H</button>
                    <button id="J" class="keyboard-btn">J</button>
                    <button id="K" class="keyboard-btn">K</button>
                    <button id="L" class="keyboard-btn">L</button>
                </div>
                <div id="third-row">
                    <button id="ENTER" class="keyboard-btn enter">Enter</button>
                    <button id="Z" class="keyboard-btn">Z</button>
                    <button id="X" class="keyboard-btn">X</button>
                    <button id="C" class="keyboard-btn">C</button>
                    <button id="V" class="keyboard-btn">V</button>
                    <button id="B" class="keyboard-btn">B</button>
                    <button id="N" class="keyboard-btn">N</button>
                    <button id="M" class="keyboard-btn">M</button>
                    <button id="BACKSPACE" class="keyboard-btn enterBingo backspace">Backspace</button>
                </div>
            </div>
        `

    /* 콜백 함수 parameter */
    this.clickEvent = function(callback) {
        const btns = document.querySelectorAll(".keyboard-btn");
        btns.forEach(btn => {
            btn.addEventListener("click", (e)=> {
                callback(e.target.innerHTML);
            });
        })
    };

    this.keydownEvent = function(callback) {
        document.addEventListener("keydown", (e) => {
            const keyValue = e.key;
            if(e.key !== "Alt" && e.key !== "Control"){
                callback(keyValue);
            }
        });
    }
}

export default Keyboard;