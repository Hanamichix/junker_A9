'use strict';
$(document).ready(function() {
	initializePage();
})

function initializePage() {
	$("#match").click(dealClick);

}

function dealClick() {
	console.log("iiiiii");
	ga("send", "event", 'deal', 'click');
	window.location.href = 'index';
	}