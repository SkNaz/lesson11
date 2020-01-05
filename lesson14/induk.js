window.onload = function() {
	var rak = document.querySelector(".box");

	rak.onclick = function() {	
		this.classList.toggle("grach");
	}

	/*document.onclick = function(event) {
		console.log(event);
		var go = event.clientX;
		var no = event.clientY;
		rak.style.top = no + "px";
		rak.style.left = go + "px";
	}*/

	rak.onmousedown = function() {
		document.addEventListener("mousemove", mousemove);
	}
	var mousemove = function() {
		document.onmousemove = function(event) {
			rak.style.top = event.clientY + "px";
			rak.style.left = event.clientX + "px";
		}	
	}
 	rak.onmouseup = function() {
		document.removeEventListener("mousemove", mousemove);
	}
}
