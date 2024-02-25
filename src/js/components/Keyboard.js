
class Keyboard {
    constructor() {
        this.clickKeyboard();
    }

    template() {
        return `
            <div id="keyboard-container">
                <div id="first-row">
                    <button class="keyboard-btn">Q</button>
                    <button class="keyboard-btn">W</button>
                    <button class="keyboard-btn">E</button>
                    <button class="keyboard-btn">R</button>
                    <button class="keyboard-btn">T</button>
                    <button class="keyboard-btn">Y</button>
                    <button class="keyboard-btn">U</button>
                    <button class="keyboard-btn">I</button>
                    <button class="keyboard-btn">O</button>
                    <button class="keyboard-btn">P</button>
                </div>
                <div id="second-row">
                    <button class="keyboard-btn">A</button>
                    <button class="keyboard-btn">S</button>
                    <button class="keyboard-btn">D</button>
                    <button class="keyboard-btn">F</button>
                    <button class="keyboard-btn">G</button>
                    <button class="keyboard-btn">H</button>
                    <button class="keyboard-btn">J</button>
                    <button class="keyboard-btn">K</button>
                    <button class="keyboard-btn">L</button>
                </div>
                <div id="third-row">
                    <button class="keyboard-btn">Z</button>
                    <button class="keyboard-btn">X</button>
                    <button class="keyboard-btn">C</button>
                    <button class="keyboard-btn">V</button>
                    <button class="keyboard-btn">B</button>
                    <button class="keyboard-btn">N</button>
                    <button class="keyboard-btn">M</button>
                    <button id="keyboard">M</button>
                </div>
            </div>
        `
    }
    clickKeyboard() {   
        console.log("키보드 크릭");
        const keyBtns = document.querySelectorAll(".keyboard-btn");
        console.log(keyBtns);
        keyBtns.forEach(btn => {
            btn.addEventListener("click", () => {
                console.log("헬로");
            });
        });
    }
}

export default Keyboard;