const opponent = ((location) => {
	document.querySelectorAll('.oppShips').forEach((element, index) => {
		if (index === location) {
			element.classList.add('docking')
		}
	});
});
export { opponent as default };