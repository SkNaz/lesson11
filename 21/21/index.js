var zapr = new XMLHttpRequest();
var login = document.querySelector(".text_one");
var pass = document.querySelector(".text_two");
var xxx = new XMLHttpRequest();
var html = document.querySelector("body");



zapr.onreadystatechange = function() {
	if(zapr.readyState == 4) {
		let data = zapr.responseText;
		let parsedData = JSON.parse(data);
		console.log(parsedData);	
	}
}

xxx.onreadystatechange = function() {
	if(xxx.readyState == 4) {
		let data = xxx.responseText;
		let parsedData = JSON.parse(data);
		console.log(parsedData);
	}
}

zapr.open("post", "http://localhost:3000/user", true);
xxx.open("post", "http://localhost:3000/goods", true);


document.querySelector(".btn").onclick = function() {
	const cred = {
		login: login.value,
		password:  pass.value
	}

	zapr.send(JSON.stringify(cred));
	xxx.send("23");

	setTimeout(function ping() {
		html.innerHTML += "<div>" + xxx.responseText + "</div>"
	}, 1000);
}
