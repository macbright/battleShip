import gameBoard from '../factories/gameBoard';
import ship from '../factories/ship';
const main = (() => {
	const myFleet = () => {
		gameBoard.positionShip(ship(4), 45, 'vertical');
		gameBoard.positionShip(ship(3), 50, 'vertical');
		gameBoard.positionShip(ship(3), 14, 'horizontal');
		gameBoard.positionShip(ship(2), 32, 'vertical');
		gameBoard.positionShip(ship(2), 38, 'vertical');
		gameBoard.positionShip(ship(2), 68, 'horizontal');
		gameBoard.positionShip(ship(1), 1, 'vertical');
		gameBoard.positionShip(ship(1), 9, 'vertical');
		gameBoard.positionShip(ship(1), 89, 'vertical');
		gameBoard.positionShip(ship(1), 97, 'vertical');
	};
	const opponentFleet = () => {
		gameBoard.positionOpponent(ship(4), 12, 'horizontal');
		gameBoard.positionOpponent(ship(3), 70, 'vertical');
		gameBoard.positionOpponent(ship(3), 82, 'horizontal');
		gameBoard.positionOpponent(ship(2), 43, 'vertical');
		gameBoard.positionOpponent(ship(2), 28, 'vertical');
		gameBoard.positionOpponent(ship(2), 68, 'horizontal');
		gameBoard.positionOpponent(ship(1), 35, 'vertical');
		gameBoard.positionOpponent(ship(1), 7, 'vertical');
		gameBoard.positionOpponent(ship(1), 75, 'vertical');
		gameBoard.positionOpponent(ship(1), 97, 'vertical');
	};
	return { myFleet, opponentFleet };
})();
export { main as default }; 
