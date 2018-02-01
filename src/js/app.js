
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


// pink click
document.querySelector(".character1").addEventListener("click", function() {

	document.body.classList.toggle("show_more_pink");
	console.log("character 1 was clicked");
});


//orange click
document.querySelector(".character2").addEventListener("click", function() {

	document.body.classList.toggle("show_more_orange");
	console.log("character 2 was clicked");
});


//yellow click
document.querySelector(".character3").addEventListener("click", function() {

	document.body.classList.toggle("show_more_yellow");
	console.log("character 3 was clicked");
});

//-----------------------------------------------------------------