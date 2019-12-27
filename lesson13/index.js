var area = document.querySelector(".txt");

var tpp = document.querySelectorAll(".put");

setInterval(function(){	
	for(i = 0; i < tpp.length; i++) {
		if(tpp[i].value) {
			lal = tpp[i].value.split(",");
		}
		area.textContent += lal;
	}	
}, 10000)
