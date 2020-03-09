window.onload = function() {
	var zapr = new XMLHttpRequest();
	var login = document.querySelector(".text_one");
	var pass = document.querySelector(".text_two");
	var xxx = new XMLHttpRequest();
	var wrap = document.querySelector("div");

	zapr.onreadystatechange = function() {
		if(zapr.readyState == 4) {
			if(zapr.status == 200) {
				let data = zapr.responseText;
				let parsedData = JSON.parse(data);
				console.log(parsedData);
				xxx.send(parsedData);
			}
		}	
	}

	xxx.onreadystatechange = function() {
		if(xxx.readyState == 4) {
			let nextData = xxx.responseText;
			let nextParsedData = JSON.parse(nextData);
			console.log(nextParsedData);
			wrap.innerHTML = `${nextData}`
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
	}
}