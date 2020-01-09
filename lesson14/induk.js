window.onload = function() {
	var rak = document.querySelector(".box");
	console.dir(rak);
	console.dir(document);
	rak.onclick = function() {	
		this.classList.toggle("grach");
	}

	document.onclick = function(event) { 
		console.log(event);
		var go = event.clientX;
		var no = event.clientY;
		rak.style.top = no + "px";
		rak.style.left = go + "px";
	}

	rak.onmousedown = function(event) {
		var x = event.offsetX
		var y = event.offsetY
		document.onmousemove = function(event) {
			rak.style.top = (event.clientY - y) + "px";
			rak.style.left = (event.clientX - x) + "px";
		}	
	}
 	rak.onmouseup = function() {
 		document.onmousemove = null;
 	}
}