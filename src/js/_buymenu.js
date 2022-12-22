//*----------buy menu------------
export function buyMenu() {
	let menuBtn = document.querySelector('#btnbuy');
	let selectPerson = document.querySelector('#person');
	let selectSize = document.querySelector('#size');
	let selectPrice = document.querySelector('#price');

	menuBtn.addEventListener('click', () => {
		let person = selectPerson.options[selectPerson.selectedIndex].value;
		let size = selectSize.options[selectSize.selectedIndex].value;
		let price = selectPrice.options[selectPrice.selectedIndex].value;

		if (person == 'kids') {
			window.open(`https://us.puma.com/us/en/${person}/shop-all-${person}?pref_size=${size}${price}`, '_blank');
		} else {
			window.open(`https://us.puma.com/us/en/${person}/shop-all-${person}s?pref_size=${size}${price}`, '_blank');
		}
	})
}