'use strict';

// personalize your nerd
console.log('hello world');

let bodyOptions = document.querySelector('.body ul');
let bodyLeft = document.querySelector(".body-previous");
let bodyRight = document.querySelector(".body-next");

let eyesOptions = document.querySelector('.eyes ul');
let eyesLeft = document.querySelector(".eyes-previous");
let eyesRight = document.querySelector(".eyes-next");

let mouthOptions = document.querySelector('.mouth ul');
let mouthLeft = document.querySelector(".mouth-previous");
let mouthRight = document.querySelector(".mouth-next");

let shoesOptions = document.querySelector('.shoes ul');
let shoesLeft = document.querySelector(".shoes-previous");
let shoesRight = document.querySelector(".shoes-next");

let bodyDeg = 0;
let eyesDeg = 0;
let mouthDeg = 0;
let shoesDeg = 0;

//body
bodyLeft.onclick = function () {
	bodyDeg = bodyDeg + 90;
	bodyOptions.style.transform = 'rotateY(' + bodyDeg + 'deg)';
	console.log("left");
};
bodyRight.onclick = function () {
	bodyDeg = bodyDeg - 90;
	bodyOptions.style.transform = 'rotateY(' + bodyDeg + 'deg)';
	console.log("right");
};

//eyes
eyesLeft.onclick = function () {
	eyesDeg = eyesDeg + 72;
	eyesOptions.style.transform = 'rotateY(' + eyesDeg + 'deg)';
	console.log("left");
};
eyesRight.onclick = function () {
	eyesDeg = eyesDeg - 72;
	eyesOptions.style.transform = 'rotateY(' + eyesDeg + 'deg)';
	console.log("right");
};

//mouth
mouthLeft.onclick = function () {
	mouthDeg = mouthDeg + 45;
	mouthOptions.style.transform = 'rotateY(' + mouthDeg + 'deg)';
	console.log("left");
};
mouthRight.onclick = function () {
	mouthDeg = mouthDeg - 45;
	mouthOptions.style.transform = 'rotateY(' + mouthDeg + 'deg)';
	console.log("right");
};

//shoes
shoesLeft.onclick = function () {
	shoesDeg = shoesDeg + 60;
	shoesOptions.style.transform = 'rotateY(' + shoesDeg + 'deg)';
	console.log("left");
};
shoesRight.onclick = function () {
	shoesDeg = shoesDeg - 60;
	shoesOptions.style.transform = 'rotateY(' + shoesDeg + 'deg)';
	console.log("right");
};



// let currentFace = 0;
// const faces = [
// 	"../img/green-oreo.png",
// 	"../img/blue-oreo.png",
// 	"../img/pink-oreo.png",
// 	"../img/red-oreo.png",
// 	"../img/yellow-oreo.png",
// ]

// currentFace++;
// change face image src to faces[currentFace] 

// var deg = 0;

// arrowsLeft.forEach(function(arrowLeft){
// 	arrowLeft.onclick = function() {
// 	deg = deg + 36;
// 	images.forEach(function(image){
// 		image.style.transform = `rotateY(${deg}deg)`;
// 		console.log("left");
// 		})
// 	}
// });

// arrowsRight.forEach(function(arrowRight){
// 	arrowRight.onclick = function() {
// 		deg = deg - 36;
// 	images.forEach(function(image){	
// 		images.style.transform = `rotateY(${deg}deg)`;
// 		console.log("right");
// 	}
// });

///need to fix the images bc it's an array
//# sourceMappingURL=makeMeAnOreo.js.map