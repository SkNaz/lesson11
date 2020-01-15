var haha = document.querySelectorAll(".lol");
var yo = document.querySelectorAll(".sub");
var test = document.querySelectorAll(".test");
var test1 = document.querySelectorAll(".test1");
for (var i = 0; i < yo.length; i++) {
	yo[i].onclick = (function(i) {
		return function() {
			var counter;
			if(haha[i + 1]) {
				counter = i + 1;
			} else {
				counter = 0;
			}
			var nextstep = function() {
				haha[i].id = "";
				haha[counter].id = "center";
			}
			
			if(test[i].value.length < 5) {
				alert("Имя должно быть не менее чем 5 символов");
			} 

			if(test1[i].value < 18) {
				alert("Вход возможнен для лиц 18+");
			} else if(test[i].value.length >= 5 && test1[i].value > 18) {
				nextstep();
			}
		}
	})(i);
}