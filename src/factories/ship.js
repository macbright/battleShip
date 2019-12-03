const ship = ((length) => {
	let hits = 0;
	// returns new hit value
	const hit = ((hits) => {
		isSunk() ? false : hits += 1;
	});
	//is sunk when height of ship that has been hit is equal to length
	const isSunk = (() => {
		return hits === length ? true : false
	});
	return {
		length,
		hit,
		isSunk
	}
});
export { ship as default }