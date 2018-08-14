'use strict';

// personalize your nerd
console.log('hello world');

let bodyOptions = document.querySelectorAll('.body ul li');
let bodyLeft = document.querySelector(".body-previous");
let bodyRight = document.querySelector(".body-next");

let eyesOptions = document.querySelectorAll('.eyes ul li');
let eyesLeft = document.querySelector(".eyes-previous");
let eyesRight = document.querySelector(".eyes-next");

let mouthOptions = document.querySelectorAll('.mouth ul li');
let mouthLeft = document.querySelector(".mouth-previous");
let mouthRight = document.querySelector(".mouth-next");

let shoesOptions = document.querySelectorAll('.shoes ul li');
let shoesLeft = document.querySelector(".shoes-previous");
let shoesRight = document.querySelector(".shoes-next");

let bodyOption = 0;
let eyesOption = 0;
let mouthOption = 0;
let shoesOption = 0;

//body

let changeBody = function() {
	// hide all bodies
	bodyOptions.style.display = 'none';
	// show body numbered bodyOption

}

bodyLeft.onclick = function () {
	bodyOption--;
	if (bodyOption <= -1) {
		bodyOption = bodyOptions.length - 1;
	}
	console.log("change to body", bodyOption)
	changeBody()
};
bodyRight.onclick = function () {
	bodyOption++;
	if (bodyOption >= bodyOptions.length) {
		bodyOption = 0;
	}
	console.log("change to body", bodyOption)
	changeBody()
};
