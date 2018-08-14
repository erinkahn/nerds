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

var shoeOptions = document.querySelectorAll('.shoes ul li');
var shoesLeft = document.querySelector(".shoes-previous");
var shoesRight = document.querySelector(".shoes-next");

var bodyOption = 0;
var eyeOption = 0;
var mouthOption = 0;
var shoeOption = 0;

//mouths------------------------------------------------
var changeMouth = function changeMouth() {
	// show mouth numbered mouthOption
	for (var i = 0; i < mouthOptions.length; i++) {
		console.log('mouthOptions[i]');

		if (mouthOption == i) {
			mouthOptions[i].classList.add('showThatMouth');
		} else {
			mouthOptions[i].classList.remove('showThatMouth');
		}
	}
};

mouthLeft.onclick = function () {
	mouthOption--;
	if (mouthOption <= -1) {
		mouthOption = mouthOptions.length - 1;
	}
	console.log("change to mouth", mouthOption);
	changeMouth();
};

mouthRight.onclick = function () {
	mouthOption++;
	if (mouthOption >= mouthOptions.length) {
		mouthOption = 0;
	}
	console.log("change to mouth", mouthOption);
	changeMouth();
};

changeMouth(); //need this to show the first eye by default


//body------------------------------------------------
var changeBody = function changeBody() {
	// show body numbered bodyOption
	for (var i = 0; i < bodyOptions.length; i++) {
		console.log('bodyOptions[i]');

		if (bodyOption == i) {
			bodyOptions[i].classList.add('showThatBod');
		} else {
			bodyOptions[i].classList.remove('showThatBod');
		}
	}
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

changeBody(); //need this to show the first body by default


//shoes------------------------------------------------
var changeShoes = function changeShoes() {
	// show shoe numbered shoeOption
	for (var i = 0; i < shoeOptions.length; i++) {
		console.log('shoeOptions[i]');

		if (shoeOption == i) {
			shoeOptions[i].classList.add('showThatShoe');
		} else {
			shoeOptions[i].classList.remove('showThatShoe');
		}
	}
};

shoesLeft.onclick = function () {
	shoeOption--;
	if (shoeOption <= -1) {
		shoeOption = shoeOptions.length - 1;
	}
	console.log("change to shoe", shoeOption);
	changeShoes();
};

shoesRight.onclick = function () {
	shoeOption++;
	if (shoeOption >= shoeOptions.length) {
		shoeOption = 0;
	}
	console.log("change to shoe", shoeOption);
	changeShoes();
};

changeShoes(); //need this to show the first shoe by default


//eyes------------------------------------------------
var changeEyes = function changeEyes() {
	// show eye numbered eyeOption
	for (var i = 0; i < eyesOptions.length; i++) {
		console.log('eyesOptions[i]');

		if (eyeOption == i) {
			eyesOptions[i].classList.add('showThatEye');
		} else {
			eyesOptions[i].classList.remove('showThatEye');
		}
	}
};

eyesLeft.onclick = function () {
	eyeOption--;
	if (eyeOption <= -1) {
		eyeOption = eyesOptions.length - 1;
	}
	console.log("change to eye", eyeOption);
	changeEyes();
};

eyesRight.onclick = function () {
	eyeOption++;
	if (eyeOption >= eyesOptions.length) {
		eyeOption = 0;
	}
	console.log("change to eye", eyeOption);
	changeEyes();
};

changeEyes(); //need this to show the first eye by default
//# sourceMappingURL=createYourOwnNerd.js.map
