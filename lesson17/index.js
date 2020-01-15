window.onload = function() {
	var income = document.querySelectorAll(".fields_one");
	var what = document.querySelector(".wrap");
	var haha = document.querySelectorAll(".lol");
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

	getItem();

	function setvalue() {
		var mass = [];
		for(var i = 0; i < income.length; i++) {
			var obj = {};
			var key = income[i].name;
			var value = income[i].value;
			obj["name"] = key;
			obj["value"] = value;
			mass[i] = obj;
		}
		var json = JSON.stringify(mass);
		localStorage.setItem("block", json);
	}

	what.addEventListener("click", function (event) {
		var target = event.target;
		if(target && target.dataset.quest) {
			setvalue();
		}
	});

	function getItem() {
		var timoMass = JSON.parse(localStorage.getItem("block"));

		if(timoMass) {
			for(var i = 0; i < income.length; i++) {
				var value = timoMass[i].value;
				income[i].value = value;
			}
		}
	}
	
}