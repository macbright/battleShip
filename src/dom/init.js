import gameBoard from '../factories/gameBoard';


import player from '../factories/player';

const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

const init = (() => {
	const displayInfo = document.querySelector('.oppInfo');
	const update = document.querySelector('.oppUpdate');
	const myUpdate = document.querySelector('.myUpdate');
	const myInfo = document.querySelector('.myInfo');
	let count = 0;
	let count2 = 0;
	const user = player($$('.ships'), 'User');

	let currPlayer = user;
	let gameStop = false;

	const game = () => {
		$$('.oppShips').forEach((element) => {
			const index = element.getAttribute('data-id');
			element.addEventListener('click', (e) => {
				e.preventDefault();
				if (element.innerHTML === '' && !gameStop) {
					$$('.oppShips').forEach(el => el.classList.add('disabledDiv'));
					$$('.ships').forEach(el => el.classList.remove('disabledDiv'));
					if (!gameBoard.receiveAttacks(gameBoard.oppBoard(), index)) {
						element.classList.add('missed');
						element.innerHTML = '*';
					} else if (gameBoard.receiveAttacks(gameBoard.oppBoard(), index) && element.innerHTML === '') {
						element.innerHTML = 'x';
						const theShip = gameBoard.oppBoard()[index];
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
					checkWinner(count, currPlayer);
					setTimeout(() => {
						compPlay();
					}, 600);
				}
			});
		});
	}
	const randomNum = (arr) => {
		for (let i = 0; i < 100; i += 1) {
			const index = Math.floor(Math.random() * (99 - 0) + 0);
			if ($$('.ships')[index].innerHTML === '') {
				arr = index;
				break;
			}
		}
		return arr;
	};

	const checkWinner = (count, currPlayer) => {
		if (10 - count <= 0) {
			$('.gameWin').style.display = 'block';
			$('.gameWin').innerHTML = `Hurray!!! ${currPlayer.name} won 🎉`;
			alert(`Hurray!!! ${currPlayer.name} won 🎉`);
			$$('.ships').forEach(el => el.classList.add('disabledDiv'));
			$$('.oppShips').forEach(el => el.classList.add('disabledDiv'));
			gameStop = true;
		}
	};
	const compPlay = () => {
		$$('.ships').forEach(el => el.classList.add('disabledDiv'));
		$$('.oppShips').forEach(el => el.classList.remove('disabledDiv'));
		const arr = randomNum();
		const element1 = $$('.ships');

		if (!gameBoard.receiveAttacks(gameBoard.board(), arr)) {
			element1[arr].classList.add('missed');
			element1[arr].innerHTML = '*';
		} else if (gameBoard.receiveAttacks(gameBoard.board(), arr) && element1[arr].innerHTML === '') {
			const myShip = gameBoard.board()[arr];
			element1[arr].innerHTML = 'x';
			myShip.hit(arr);
			element1[arr].classList.add('docking');
			if (myShip.isSunk()) {
				count2 += 1;
				myInfo.innerHTML = `${10 - count2} ships left`;
				myUpdate.style.display = 'none';
			} else {
				myUpdate.innerHTML = `ship has ${myShip.length - myShip.fire.length} lives remaining`;
				myUpdate.style.display = 'block';
			}
		}
		checkWinner(count2, currPlayer);
		currPlayer = user;
	};
	return { game }
})();
export { init as default };