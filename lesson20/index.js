var report = new XMLHttpRequest();
var html = document.querySelector("body");
var button = document.querySelector(".btn");


report.open("get", "http://localhost:3000/user", true);

report.send();

button.onclick = function() {
	html.innerHTML += "<div>" + report.responseText + "</div>";
}