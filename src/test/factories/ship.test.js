import ship from '../../factories/ship';

 let newShip = ship(5)

test('test length of ship', () => {
	expect(newShip.length).toBe(5);
});

test('test if ship has sunk or else', () => {
	newShip.hit(5);
	expect(newShip.isSunk()).toBeFalsy();
});

test('test if ship has sunk ', () => {
	for(let i = 0; i <= 5; i += 1){
		newShip.hit(i)	
	}
	expect(newShip.isSunk()).toBe(true);
});

test('test the fire arr', () => {
	let newShip = ship(4)
	for(let i = 0; i <= 4; i += 1){
		newShip.hit(i)	
	}
	expect(newShip.fire).toStrictEqual([0, 1, 2, 3, 4,]);
});
