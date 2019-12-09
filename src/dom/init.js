import gameBoard from '../factories/gameBoard';
import ship from '../factories/ship'
import { templateElement } from '@babel/types';

const $$ = document.querySelectorAll.bind(document)

const init = (() => {
	let displayInfo = document.querySelector('.oppInfo')
	let update = document.querySelector('.oppUpdate')
	let myUpdate = document.querySelector('.myUpdate')
	let myInfo = document.querySelector('.myInfo')
	let count = 0;
	let count2 = 0;
	document.querySelectorAll('.oppShips').forEach((element, index) => {
		element.addEventListener('click', (e) => {
			e.preventDefault();
			if (!gameBoard.receiveAttacks(gameBoard.oppBoard(), index)) {
				element.classList.add('missed');
				element.innerHTML = '*';		
			} else if (gameBoard.receiveAttacks(gameBoard.oppBoard(), index) && element.innerHTML === '') {
				element.innerHTML = 'x';
				const theShip = gameBoard.oppBoard()[index]
				theShip.hit(index);
				element.classList.add('docking');
				if(theShip.isSunk()){
					count += 1;
					displayInfo.innerHTML = `${10 - count} ships left`;
					update.style.display = 'none';
				} else {
					update.innerHTML =  `ship has ${theShip.length - theShip.fire.length} lives remaining`;
					update.style.display = 'block';
				}
			}
			// if defined then it means there is a ship there ele there is not ship there
		});
	});
document.querySelectorAll('.ships').forEach((element, index) => {
		element.addEventListener('click', (e) => {
			e.preventDefault();
			if (!gameBoard.receiveAttacks(gameBoard.board(), index)) {
				element.classList.add('missed');
				element.innerHTML = '*'
				element.removeEventListener('click', (e));
			} else if (gameBoard.receiveAttacks(gameBoard.board(), index) && element.innerHTML === '') {
				const myShip = gameBoard.board()[index]
				element.innerHTML = 'x';
				myShip.hit(index);
				element.classList.add('docking');
				if(myShip.isSunk()){
					count2 += 1;
					myInfo.innerHTML = `${10 - count2} ships left`;
					myUpdate.style.display = 'none';

				} else {
					myUpdate.innerHTML =  `ship has ${myShip.length - myShip.fire.length} lives remaining`;
					myUpdate.style.display = 'block';
				}
				element.removeEventListener('click', (e))
			}
			// if defined then it means there is a ship there ele there is not ship there
		});
	});

});
export { init as default };