/*global test, a*/
/*eslint no-undef: "error"*/
import player from '../../factories/player';

const board = [2, 4, 5, 4, 6, 8, 1, 0, 9, 10];
const name = 'Bright';
const newPlayer = player(board, name);

test('test for player board', () => {
	expect(newPlayer.board).toEqual(board);
});

test('test for player board length', () => {
	expect(newPlayer.board.length).toEqual(10);
});

test('test for player name', () => {
	expect(newPlayer.name).toEqual(name);
});

test('test for player', () => {
	expect(newPlayer).toEqual({ board, name });
});