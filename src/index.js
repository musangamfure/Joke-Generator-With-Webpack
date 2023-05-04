import generateJoke from './generateJoke.js';
import './styles/main.css';
import laughing from './assets/laughing.svg';

const laughImg = document.getElementById('laughImg');

laughImg.src = laughing;

const jokeBtn = document.getElementById('jokebtn');

jokeBtn.addEventListener('click', generateJoke);
