import './public/assets/style.css'
import javascriptLogo from './javascript.svg'
import Home from './src/js/components/Home.js'
import MainGamePage from './src/js/components/MainGamePage.js'

const $ = (elementName) => document.querySelector(elementName);

window.addEventListener("DOMContentLoaded", (e) => {
  new Home($("#app"));
});
