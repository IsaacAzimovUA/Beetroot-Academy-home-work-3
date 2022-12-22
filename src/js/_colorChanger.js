
export function colorChanger() {
	//*---------------Color Randomizer----------------

	const arr = ['138, 85, 201', '238, 85, 20', '180, 20, 34', '38, 105, 221'];
	var root = document.querySelector(':root');


	function getRandomItem() {
		const randomIndex = Math.floor(Math.random() * arr.length);
		const item = arr[randomIndex];
		return root.style.setProperty('--color-alternative', item);
	}

	getRandomItem()	
}

