import ship from '../../factories/ship';

test('test length of ship', () => {
	expect(ship(5).length).toBe(5);
});

test('test if ship has sunk or else', () => {
	expect(ship(5).isSunk()).toBeFalsy();
});
