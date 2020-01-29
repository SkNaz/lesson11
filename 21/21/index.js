var zapr = new XMLHttpRequest();
var login = document.querySelector(".text_one");
var pass = document.querySelector(".text_two");

zapr.onreadystatechange = function() {
	if(zapr.readyState == 4) {
		let data = zapr.responseText;
		let parsedData = JSON.parse(data);
		console.log(data);
	}
}

zapr.open("post", "http://localhost:3000/user", true);


document.querySelector(".btn").onclick = function() {
	const cred = {
		login: login.value,
		password:  pass.value
	}

	zapr.send(JSON.stringify(cred));
}