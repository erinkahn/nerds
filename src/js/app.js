
(() => {
	console.log("Hello World from app.js, transpiled and concatenated!");
})();



// when the user clicks the hamburger button
document.querySelector(".burger").addEventListener("click", function() {
	// it makes the nav visible and the hamburger change by adding a class to the body
	document.body.classList.toggle("ul_open");
	// show the menu items when you click

	if (document.querySelector('.main-menu-items').style.display == 'block') {
		document.querySelector('.main-menu-items').style.display = 'none';

	} else {
		document.querySelector('.main-menu-items').style.display = 'block';
	}

});
	


