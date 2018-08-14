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

let shoeOptions = document.querySelectorAll('.shoes ul li');
let shoesLeft = document.querySelector(".shoes-previous");
let shoesRight = document.querySelector(".shoes-next");

let bodyOption = 0;
let eyeOption = 0;
let mouthOption = 0;
let shoeOption = 0;


//mouths------------------------------------------------
let changeMouth = function() {
	// show mouth numbered mouthOption
	for (let i = 0; i < mouthOptions.length; i++) {
		console.log('mouthOptions[i]');
		
		if (mouthOption == i){
			mouthOptions[i].classList.add('showThatMouth');
		} else {
			mouthOptions[i].classList.remove('showThatMouth');
		}
	}
}

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
let changeBody = function() {
	// show body numbered bodyOption
	for (let i = 0; i < bodyOptions.length; i++) {
		console.log('bodyOptions[i]');
		
		if (bodyOption == i){
			bodyOptions[i].classList.add('showThatBod');
		} else {
			bodyOptions[i].classList.remove('showThatBod');
		}
	}
}

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
let changeShoes = function() {
	// show shoe numbered shoeOption
	for (let i = 0; i < shoeOptions.length; i++) {
		console.log('shoeOptions[i]');
		
		if (shoeOption == i){
			shoeOptions[i].classList.add('showThatShoe');
		} else {
			shoeOptions[i].classList.remove('showThatShoe');
		}
	}
}

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
let changeEyes = function() {
	// show eye numbered eyeOption
	for (let i = 0; i < eyesOptions.length; i++) {
		console.log('eyesOptions[i]');
		
		if (eyeOption == i){
			eyesOptions[i].classList.add('showThatEye');
		} else {
			eyesOptions[i].classList.remove('showThatEye');
		}
	}
}

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
