window.onload = function() {
	var income = document.querySelectorAll(".fields_one");
	var tt = document.querySelector("#test");

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

	tt.onclick = function() {
		setvalue();
	}

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