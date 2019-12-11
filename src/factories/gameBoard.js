/*eslint no-alert: "error"*/

import myBoard from '../dom/mainUser';

const gameBoard = (() => {
	const grid = new Array(100);
	const opp = new Array(100);

	const positionShip = (ship, position, orientation) => {
		for (let i = 0; i < ship.length; i += 1) {
			if (orientation === 'vertical') {
				grid[position + 10 * i] === undefined ? grid[position + 10 * i] = ship : alert("position is already occupied");

				myBoard(position + 10 * i);
			} else {
				grid[position + 10 * i] === undefined ? grid[position + 1 * i] = ship : alert("position is already occupied");
				myBoard(position + 1 * i);
			}
		}
	};
	const positionOpponent = (ship, position, orientation) => {
		for (let i = 0; i < ship.length; i++) {
			if (orientation === 'vertical') {
				opp[position + 10 * i] === undefined ? opp[position + 10 * i] = ship : alert("position is already occupied");
			} else {
				opp[position + 10 * i] === undefined ? opp[position + 1 * i] = ship : alert("position is already occupied");
			}
		}
	};
	const receiveAttacks = (board, coordinate) => {
		if (board[coordinate] === undefined || board[coordinate] === '*') {
			return false;
		}
		return true;
	};

	const board = () => {
		return grid;
	};

	const oppBoard = () => {
		return opp;
	};
	return { positionShip, receiveAttacks, positionOpponent, board, oppBoard };
})();
export { gameBoard as default };