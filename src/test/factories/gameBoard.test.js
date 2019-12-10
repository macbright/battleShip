import gameBoard from '../../factories/gameBoard';
import ship from '../../factories/ship';

test('check my game board returns my board', () => {
	expect(gameBoard.board().length).toEqual(100);
});

test('check my opp game board returns my his board', () => {
	expect(gameBoard.oppBoard().length).toEqual(100);
});

test('position my ship on my grid', () => {
	const newShip = ship(4)
	gameBoard.positionShip(newShip, 4, 'vertical')
	expect(gameBoard.oppBoard().length).toEqual(100);
});