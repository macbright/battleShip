import gameBoard from '../factories/gameBoard';
// import ship from '../factories/ship'
// import { templateElement } from '@babel/types';
import player from '../factories/player';

const init = (() => {
	const $$ = document.querySelectorAll.bind(document)
	let displayInfo = document.querySelector('.oppInfo')
	let update = document.querySelector('.oppUpdate')
	let myUpdate = document.querySelector('.myUpdate')
	let myInfo = document.querySelector('.myInfo')
	let count = 0;
	let count2 = 0;
	let gameplay = 0;
	const game = (() => {
		// player().selections()
		document.getElementById('opponent').style.opacity = 0.1;
		document.getElementById('me').style.opacity = 1;
		myPlay();
		opponentPlay();
	});
	const opponentPlay = () => {
		document.querySelectorAll('.oppShips').forEach((element, index) => {
			element.addEventListener('click', (e) => {
				e.preventDefault();
				if (gameplay % 2 === 1) {
					gameplay += 1;
					if (!gameBoard.receiveAttacks(gameBoard.oppBoard(), index)) {
						element.classList.add('missed');
						element.innerHTML = '*';
					} else if (gameBoard.receiveAttacks(gameBoard.oppBoard(), index) && element.innerHTML === '') {
						element.innerHTML = 'x';
						const theShip = gameBoard.oppBoard()[index]
						theShip.hit(index);
						element.classList.add('docking');
						if (theShip.isSunk()) {
							count += 1;
							displayInfo.innerHTML = `${10 - count} ships left`;
							update.style.display = 'none';
						} else {
							update.innerHTML = `ship has ${theShip.length - theShip.fire.length} lives remaining`;
							update.style.display = 'block';
						}
					}
					document.getElementById('opponent').style.opacity = 0.1;
					document.getElementById('me').style.opacity = 1;
				}
				// if defined then it means there is a ship there ele there is not ship there
			});
		});

	}

	const myPlay = () => {
		const oppTracker = [];
		const element = document.querySelectorAll('.ships');
		let index;
		
			index = Math.floor(Math.random() * (99 - 0) + 0);
			console.log(index)
		if (gameplay % 2 === 0) {
			gameplay += 1;
			if (!gameBoard.receiveAttacks(gameBoard.board(), index)) {
				element[index].classList.add('missed');
				element[index].innerHTML = '*'
			} else if (gameBoard.receiveAttacks(gameBoard.board(), index) && element[index].innerHTML === '') {
				const myShip = gameBoard.board()[index]
				element[index].innerHTML = 'x';
				myShip.hit(index);
				element[index].classList.add('docking');
				if (myShip.isSunk()) {
					count2 += 1;
					myInfo.innerHTML = `${10 - count2} ships left`;
					myUpdate.style.display = 'none';

				} else {
					myUpdate.innerHTML = `ship has ${myShip.length - myShip.fire.length} lives remaining`;
					myUpdate.style.display = 'block';
				}
			}
			document.getElementById('opponent').style.opacity = 1;
			document.getElementById('me').style.opacity = 0.1;
		}
		
	}
	return { game };
})();
export { init as default };