'use strict';

// personalize your nerd

console.log('hello world');

var bodyOptions = document.querySelectorAll('.body ul li');
var bodyLeft = document.querySelector(".body-previous");
var bodyRight = document.querySelector(".body-next");

var eyesOptions = document.querySelectorAll('.eyes ul li');
var eyesLeft = document.querySelector(".eyes-previous");
var eyesRight = document.querySelector(".eyes-next");

var mouthOptions = document.querySelectorAll('.mouth ul li');
var mouthLeft = document.querySelector(".mouth-previous");
var mouthRight = document.querySelector(".mouth-next");

var shoesOptions = document.querySelectorAll('.shoes ul li');
var shoesLeft = document.querySelector(".shoes-previous");
var shoesRight = document.querySelector(".shoes-next");

var bodyOption = 0;
var eyesOption = 0;
var mouthOption = 0;
var shoesOption = 0;

//body

var changeBody = function changeBody() {
	// hide all bodies
	bodyOptions.style.display = 'none';
	// show body numbered bodyOption
};

bodyLeft.onclick = function () {
	bodyOption--;
	if (bodyOption <= -1) {
		bodyOption = bodyOptions.length - 1;
	}
	console.log("change to body", bodyOption);
	changeBody();
};
bodyRight.onclick = function () {
	bodyOption++;
	if (bodyOption >= bodyOptions.length) {
		bodyOption = 0;
	}
	console.log("change to body", bodyOption);
	changeBody();
};
//# sourceMappingURL=createYourOwnNerd.js.map
