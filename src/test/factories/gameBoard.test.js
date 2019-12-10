import gameBoard from '../../factories/gameBoard';
import ship from '../../factories/ship';

test('check my game board returns my board', () => {
	expect(gameBoard.board().length).toEqual(100);
});

test('check my opp game board returns my his board', () => {
	expect(gameBoard.oppBoard().length).toEqual(100);
});

test('position my ship on my grid vertical', () => {
	const newShip = ship(5);
	gameBoard.positionShip(newShip, 4, 'vertical');
	expect(gameBoard.board()[4]).toBe(newShip);
	expect(gameBoard.board()[14]).toBe(newShip);
	expect(gameBoard.board()[24]).toBe(newShip);
	expect(gameBoard.board()[34]).toBe(newShip);
	expect(gameBoard.board()[44]).toBe(newShip);
});

test('position my ship on my grid vertical', () => {
	const newShip = ship(4);
	gameBoard.positionShip(newShip, 5, 'horizontal');
	expect(gameBoard.board()[5]).toBe(newShip);
	expect(gameBoard.board()[6]).toBe(newShip);
	expect(gameBoard.board()[7]).toBe(newShip);
	expect(gameBoard.board()[8]).toBe(newShip);
});

test('position my opp ship on his grid vertical', () => {
	const newShip = ship(5);
	gameBoard.positionOpponent(newShip, 35, 'vertical');
	expect(gameBoard.oppBoard()[35]).toBe(newShip);
	expect(gameBoard.oppBoard()[45]).toBe(newShip);
	expect(gameBoard.oppBoard()[55]).toBe(newShip);
	expect(gameBoard.oppBoard()[65]).toBe(newShip);
	expect(gameBoard.oppBoard()[75]).toBe(newShip);
});

test('position my opp ship on his grid horizontal', () => {
	const newShip = ship(5);
	gameBoard.positionOpponent(newShip, 22, 'horizontal');
	expect(gameBoard.oppBoard()[22]).toBe(newShip);
	expect(gameBoard.oppBoard()[23]).toBe(newShip);
	expect(gameBoard.oppBoard()[24]).toBe(newShip);
	expect(gameBoard.oppBoard()[25]).toBe(newShip);
	expect(gameBoard.oppBoard()[26]).toBe(newShip);
});

test('check for receive attack on my grid', () => {
	const newShip = ship(5);
	gameBoard.positionShip(newShip, 22, 'horizontal');
	expect(gameBoard.receiveAttacks(gameBoard.board(), 23)).toBe(true);
	expect(gameBoard.receiveAttacks(gameBoard.board(), 21)).toBe(false);
	expect(gameBoard.receiveAttacks(gameBoard.board(), 22)).toBe(true);
	expect(gameBoard.receiveAttacks(gameBoard.board(), 24)).toBe(true);
	expect(gameBoard.receiveAttacks(gameBoard.board(), 25)).toBe(true);
});

test('check for receive attack on my opponent grid', () => {
	const newShip = ship(5);
	gameBoard.positionOpponent(newShip, 40, 'horizontal');
	expect(gameBoard.receiveAttacks(gameBoard.oppBoard(), 40)).toBe(true);
	expect(gameBoard.receiveAttacks(gameBoard.oppBoard(), 21)).toBe(false);
	expect(gameBoard.receiveAttacks(gameBoard.oppBoard(), 41)).toBe(true);
	expect(gameBoard.receiveAttacks(gameBoard.oppBoard(), 42)).toBe(true);
	expect(gameBoard.receiveAttacks(gameBoard.oppBoard(), 43)).toBe(true);
	expect(gameBoard.receiveAttacks(gameBoard.oppBoard(), 39)).toBe(false);
	expect(gameBoard.receiveAttacks(gameBoard.oppBoard(), 0)).toBe(false);
});