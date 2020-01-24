var buttons = document.querySelectorAll(".btn");
var inputs = document.querySelectorAll(".put");
var clear = document.querySelector(".btn_clear");
var set = document.querySelector(".set_counter");
var wrap = document.querySelectorAll(".wrap");
reload();

for(var i = 0; i < buttons.length; i++) {
	buttons[i].onclick = (function(i) {
		return function() {
			inputs[i].value++;
			localStorage.setItem("counter" + i, inputs[i].value);		
		}
	})(i);
};

function reload() {
	for(var i = 0; i < inputs.length; i++) {
		inputs[i].value = localStorage.getItem("counter" + i);
	}	
};

clear.onclick = function() {
	for(var i = 0; i < buttons.length; i++) {
		inputs[i].value = 0;
		localStorage.setItem("counter" + i, inputs[i].value);
	}
}

set.onclick = function() {
	do{
		var block = +prompt("Choose block id");
	} while (block > wrap.length || isNaN(block));

	for(var i = 0; i < wrap.length; i++) {
		if(block == i) {
			do {
				inputs[i].value = +prompt("set your counter");
			} while (isNaN(inputs[i].value));
		}
	}	
}

/*function reload() {
	hehe.value = localStorage.getItem("counter");
}*/



/*var gogo = document.querySelector(".wrap");
var hehe = document.querySelector(".put");
reload();
var counter = 0;

gogo.addEventListener("click" , function() {
	target = event.target;
	if(target && target.dataset.counter) {
		var rc = function() {	
			counter++;
			hehe.value = counter;
		}
		rc();
		localStorage.setItem("counter", counter);
	}
});*/