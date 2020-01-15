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
var yo = document.querySelectorAll(".sub");
for (var i = 0; i < yo.length; i++) {
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
}