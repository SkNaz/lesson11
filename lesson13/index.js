var area = document.querySelector(".txt");

var tpp = document.querySelectorAll(".put");

setInterval(function(){	
	for(i = 0, mass = []; i < tpp.length; i++) {
		if(tpp[i].value) {
			mass[i] = tpp[i].value;		
		}
		area.textContent = mass;
	}	
}, 1000)

/*второй вариант без массива

setInterval(function(){	
	for(i = 0; i < tpp.length; i++) {
		if(tpp[i].value) {
			area.textContent += tpp[i].value + ",";		
		}
	}	
}, 1000)

Думаю, он хуже - ставит запятую и после текста  последнего ипнута + продолжает вписывать одно и тоже каждый интервал*/


