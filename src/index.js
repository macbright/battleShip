import './style.css';
import main from './main/main';
import init from './dom/init';

const $$ = document.querySelectorAll.bind(document);

init.game();
main.myFleet();
main.opponentFleet();

const reset = () => {
	$$('.btn').forEach((ele) => ele.addEventListener('click', () => window.location.reload()));
};
reset();
