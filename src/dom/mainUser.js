const myBoard = ((location) => {
	const pageGrid = document.querySelectorAll('.ships');
	pageGrid.forEach((element, index) => {
		if (index === location) {
			element.style.backgroundColor = '#000';
			element.style.border = '1px solid #111';
			element.style.borderRadius = '0px';
		}
	});
});
export { myBoard as default };