
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
	var layerText = document.querySelector("#self-esteem .text1 p");

	if (document.body.classList == "show_more_pink" && layerText.style.display == 'none') {
		layerText.style.display = 'flex';
	} else {
		layerText.style.display = 'none';
	}

	console.log("character 1 was clicked");

	// if this layer is opened, do not open/toggle the others until this is closed ????????
	// only one toggle at a time

	// when you click the first time it shows no text ???? 
	// but when you click again it shows text....how do I fix this?????
});


//orange click
document.querySelector(".character2").addEventListener("click", function() {

	document.body.classList.toggle("show_more_orange");
	var layerText = document.querySelector("#self-esteem .text2 p");

	if (document.body.classList == "show_more_orange" && layerText.style.display == 'none') {
		layerText.style.display = 'flex';
	} else {
		layerText.style.display = 'none';
	}

	
	console.log("character 2 was clicked");

	// if this layer is opened, do not open/toggle the others until this is closed
	// only one toggle at a time

	// when you click the first time it shows no text ???? 
	// but when you click again it shows text....how do I fix this?????

});


//yellow click
document.querySelector(".character3").addEventListener("click", function() {

	document.body.classList.toggle("show_more_yellow");
	var layerText = document.querySelector("#self-esteem .text3 p");

	if (document.body.classList == "show_more_yellow" && layerText.style.display == 'none') {
		layerText.style.display = 'flex';
	} else {
		layerText.style.display = 'none';
	}


	console.log("character 3 was clicked");

	// if this layer is opened, do not open/toggle the others until this is closed
	// only one toggle at a time

	// when you click the first time it shows no text ???? 
	// but when you click again it shows text....how do I fix this?????
});

//-----------------------------------------------------------------



















