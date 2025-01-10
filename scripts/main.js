// JavaScript Document

window.onload = swap;

function swap() {
	var numimages = 6;
	var x = (Math.floor(Math.random() * numimages));
	var randomimage = new Array(
		"images/logo/logo1.svg",
		"images/logo/logo2.svg",
		"images/logo/logo3.svg",
		"images/logo/logo4.svg",
		"images/logo/logo5.svg",
		"images/logo/logo6.svg"
	);
	randomimage=(randomimage[x]);
	document.getElementsByClassName("logo")[0].style.backgroundImage = "url("+ randomimage +")";	
}


/*

$(document).ready(function() {

	'use strict';
	
	document.document.getElementsByClassName('autoplay').play();

});
*/