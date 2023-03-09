// Retrieve local score from local storage or default to 0
//let localScore = localStorage.getItem("localScore") || 0;
//localStorage.clear();
document.getElementById("local-score").textContent = localStorage.getItem("localScore") || 0;

// Increment local score 
document.getElementById("local-button").addEventListener("click", function() {
	//localScore++;
	let ls=parseInt(localStorage.getItem("localScore") || 0) +1;
	localStorage.setItem("localScore", ls);
	document.getElementById("local-score").textContent = ls;
});

document.getElementById("local-clear-button").addEventListener("click", function() {
	localStorage.clear();
	document.getElementById("local-score").textContent = 0;
});

// Retrieve session score from session storage or default to 0
//let sessionScore = sessionStorage.getItem("sessionScore") || 0;
//sessionStorage.clear();
document.getElementById("session-score").textContent = (sessionStorage.getItem("sessionScore") || 0);

// Increment session score 
document.getElementById("session-button").addEventListener("click", function() {
	let ss=parseInt(sessionStorage.getItem("sessionScore") || 0)+1;
	sessionStorage.setItem("sessionScore", ss);
	document.getElementById("session-score").textContent = ss;
});


