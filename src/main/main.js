import gameBoard from '../factories/gameBoard';
import ship from '../factories/ship';
const main = (() => {
	const myFleet = () => {
		const ship4one = gameBoard.positionShip(ship(4), 45, 'vertical');
		const ship3one = gameBoard.positionShip(ship(3), 50, 'vertical');
		const ship3Two = gameBoard.positionShip(ship(3), 14, 'horizontal');
		const ship2one = gameBoard.positionShip(ship(2), 32, 'vertical');
		const ship2Two = gameBoard.positionShip(ship(2), 38, 'vertical');
		const ship2Three = gameBoard.positionShip(ship(2), 68, 'horizontal');
		const ship1one = gameBoard.positionShip(ship(1), 1, 'vertical');
		const ship1Two = gameBoard.positionShip(ship(1), 9, 'vertical');
		const ship1Three = gameBoard.positionShip(ship(1), 89, 'vertical');
		const ship1Four = gameBoard.positionShip(ship(1), 97, 'vertical');
	};
	const opponentFleet = () => {
		const ship4one = gameBoard.positionOpponent(ship(4), 12, 'horizontal');
		const ship3one = gameBoard.positionOpponent(ship(3), 70, 'vertical');
		const ship3Two = gameBoard.positionOpponent(ship(3), 82, 'horizontal');
		const ship2one = gameBoard.positionOpponent(ship(2), 43, 'vertical');
		const ship2Two = gameBoard.positionOpponent(ship(2), 28, 'vertical');
		const ship2Three = gameBoard.positionOpponent(ship(2), 68, 'horizontal');
		const ship1one = gameBoard.positionOpponent(ship(1), 35, 'vertical');
		const ship1Two = gameBoard.positionOpponent(ship(1), 7, 'vertical');
		const ship1Three = gameBoard.positionOpponent(ship(1), 75, 'vertical');
		const ship1Four = gameBoard.positionOpponent(ship(1), 97, 'vertical');
	};
	return { myFleet, opponentFleet }
})();
export { main as default }; 
