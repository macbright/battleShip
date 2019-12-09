import './style.css';
import main from './main/main';
import init from './dom/init';
import gameBoard from './factories/gameBoard'

init();
main.myFleet();
main.opponentFleet();

// console.log(gameBoard.board())
// console.log(gameBoard.oppBoard())