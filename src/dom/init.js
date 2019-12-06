import gameBoard from '../factories/gameBoard';
const init = (() => {
	document.querySelectorAll('.oppShips').forEach((element, index) => {
		element.addEventListener('click', (e) => {
			e.preventDefault();
			const oppButIndex = element.getAttribute('data-id');
			// check opp grid array, find out if the position is defined or not
			if (gameBoard.oppBoard()[oppButIndex] === undefined) {
				element.classList.add('missed');
				element.innerHTML = '*';
				// update the ships hit method as missed 

			} else {
				element.classList.add('docking');
				// update the ships hit method as hit
				// get ship so you can update it
				console.log(gameBoard.oppBoard()[oppButIndex]);
			}
			
			// if defined then it means there is a ship there ele there is not ship there
		});
	});
	document.querySelectorAll('.ships').forEach((element, index) => {
		element.addEventListener('click', (e) => {
			e.preventDefault();
			const myButIndex = element.getAttribute('data-id');
		});
	});

});
export { init as default };