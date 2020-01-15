var haha = document.querySelectorAll(".lol");
/*for (var i = 0; i < haha.length; i++) {
	haha[i].onclick = (function(i) {
		return function() {
			var counter;
			if(haha[i + 1]) {
				counter = i + 1;
			} else {
				counter = 0;
			}
			haha[i].id = "";
			haha[counter].id = "center";
		}
	})(i);
}*/

var roll  = document.querySelectorAll(".txt");
var yo = document.querySelectorAll(".sub");
var test = document.querySelector(".test");
var test1 = document.querySelector(".test1");
for (var i = 0; i < yo.length; i++) {
	yo[i].onclick = function() {
		if(test.value.length < 5) {
		alert("Имя должно быть не менее чем 5 символов");
		} 
		if(test1.value < 18) {
			alert("Вход возможнен для лиц 18+");
		} 
	}

	
	/*yo[i].onclick = (function(i) {
		return function() {
			var counter;
			if(haha[i + 1]) {
				counter = i + 1;
			} else {
				counter = 0;
			}
			haha[i].id = "";
			haha[counter].id = "center";
		}
	})(i);*/
}


/*else if(test.value.length > 5 && test1.value > 18) {
			yo[i].onclick = (function(i) {
				return function() {
					var counter;
					if(haha[i + 1]) {
						counter = i + 1;
					} else {
						counter = 0;
					}
					haha[i].id = "";
					haha[counter].id = "center";
				}
			})(i);
		}*/