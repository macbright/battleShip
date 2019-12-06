const ship = ((length) => {
	let hits = 0;
	const hit = (position) => {
		hits += 1;
		return position;
	};
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