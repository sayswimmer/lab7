'use strict';

// Call this function when the page loads (the "ready" event)
$(document).ready(function() {
	initializePage();
});

/*
 * Function that is called when the document is ready.
 */
function initializePage() {
	// your code here
	$(".likeBtn").click(recordClick);
}

function recordClick(e) {
	// Prevent following the link
	e.preventDefault();
	ga("send", "event", 'like', 'click')
}