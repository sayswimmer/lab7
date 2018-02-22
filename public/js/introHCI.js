'use strict';

// Call this function when the page loads (the "ready" event)
$(document).ready(function() {
	initializePage();
});

(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
	(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
	m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
	})(window,document,'script','//www.google-analytics.com/analytics.js','ga');
  
ga('create', 'UA-{ID redacted}', 'auto');
ga('send', 'pageview');
/*
 * Function that is called when the document is ready.
 */
function initializePage() {
	// your code here
	$(".likeBtn").click(recordClick);
	console.log('anybody home???')
}

function recordClick(e) {
	// Prevent following the link
	e.preventDefault();
	ga("send", "event", "like", "click");
	console.log("HELLOOOOOOOOOOOO")
}