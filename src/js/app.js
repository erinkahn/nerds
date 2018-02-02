
(() => {
	console.log("Hello World from app.js, transpiled and concatenated!");
})();

// hamburger menu   ------------------------------------------------------

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
	


// toggle CHARACTER layer section----------------------------------------------
var toggleCharacters = function() {
	console.log("character 2 was clicked");
	
	// if the one i clicked does not contain the class show, switch to another tab
	if (this.classList.contains("show") === false) {

		// remove show from all
		document.querySelector(".character1").classList.remove("show");
		document.querySelector(".character2").classList.remove("show");
		document.querySelector(".character3").classList.remove("show");

	};

	// whatever was clicked, add show
	this.classList.toggle("show"); 
}

// pink click
document.querySelector(".character1").addEventListener("click", toggleCharacters);
document.querySelector(".character2").addEventListener("click", toggleCharacters);
document.querySelector(".character3").addEventListener("click", toggleCharacters);




//-----------------------------------------------------------------


// submit button when clicked, make nerds fall down


let pullButton = document.querySelector("#pullButton");

pullButton.onclick = function() {

	document.body.classList.add("nerdsFall");

}

				














