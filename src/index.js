import generateJoke from "./generateJoke";
import "./styles/main.scss";
import laughing from "./assets/laughing.svg";

const laughImg = document.getElementById("laughImg");

laughImg.src = laughing;

const jokeBtn = document.getElementById("jokebtn");

jokeBtn.addEventListener("click", generateJoke);

console.log(generateJoke());
