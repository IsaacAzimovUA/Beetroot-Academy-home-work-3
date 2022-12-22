//!---------------Year---------------------
export function footerYear() {
	const year = document.querySelector('#current-year');
	year.innerHTML = new Date().getFullYear();
}