import myBoard from '../dom/mainUser';
import opponent from '../dom/opponent'
const gameBoard = (() => {
	let grid = new Array(100);
	let opp = new Array(100);
	const positionShip = (ship, position, orientation) => {
		for (let i = 0; i < ship.length; i++) {
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
	const receiveAttacks = (grid, coordinate) => {
		//Determines whether or not the attack hit the ship
		//Get ship position(s), get ship length, check if coordinate = ship position
		if (grid[coordinate] === undefined || grid[coordinate] === '*') {
			// grid[coordinate] = '*';
			return false
		} else {
			// (grid[coordinate]).hit(coordinate);
			// grid[coordinate] = 'X'; //mark the ship as hit
			return true
		}
		// console.log(grid)
		//Then sends the ‘hit’ function to the correct ship
		//Records the coordinates of the missed shot
	};
	const board = () => {
		return grid;
	};
	const oppBoard = () => {
		// console.log(opp);
		return opp;
	};
	const gameOver = () => {
		// game ends when ---> all ships have been sunk
		// there are ten ships, check if all ten ships have been sunk, else keep playing
	};
	return { positionShip, receiveAttacks, positionOpponent, board, oppBoard };
})();
export { gameBoard as default }
