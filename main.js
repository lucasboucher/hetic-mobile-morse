import "./style.css";
import { initPWA } from "./pwa.js";
import { translateToMorse } from "./utils/morse.js";

const app = document.querySelector("#app");
const textToTranslate = "Hello HETIC";
const morseTranslation = translateToMorse(textToTranslate);

app.innerHTML = `
  <h1>Traduction en Code Morse</h1>
  <p>Texte: ${textToTranslate}</p>
  <p>Code Morse: ${morseTranslation}</p>
`;

initPWA(app);
