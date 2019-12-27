var area = document.querySelector(".txt");

var tpp = document.querySelectorAll(".put");

setInterval(function(){
	for(i = 0; i < tpp.length; i++) {
		area.textContent = tpp[i].value;
	}	
}, 5000)
