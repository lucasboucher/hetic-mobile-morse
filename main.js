import "./style.css";
import { initPWA } from "./pwa.js";
import { translateToMorse } from "./utils/morse.js";

const app = document.querySelector("#app");

app.innerHTML = `
  <h1>Traduction en Code Morse</h1>
  <input type="text" id="textInput" placeholder="Entrez le texte à traduire" />
  <button id="translateButton">Traduire</button>
  <p id="morseOutput"></p>
`;

const textInput = document.querySelector("#textInput");
const translateButton = document.querySelector("#translateButton");
const morseOutput = document.querySelector("#morseOutput");

translateButton.addEventListener("click", () => {
  const textToTranslate = textInput.value;
  const morseTranslation = translateToMorse(textToTranslate);
  morseOutput.textContent = `Code Morse: ${morseTranslation}`;
});

initPWA(app);
