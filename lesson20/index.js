window.onload = function() {
	var report = new XMLHttpRequest();
	var html = document.querySelector("body");
	var button = document.querySelector(".btn");

	report.onreadystatechange = function() {
		if(report.readyState == 4) {
			html.innerHTML += "<div>" + report.responseText + "</div>";
		}
	}
	
	report.open("get", "http://localhost:3000/user", true);

	button.onclick = function() {
		report.send();
	}
}