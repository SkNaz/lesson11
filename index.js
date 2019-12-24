function SuperMath() {
	this.check = function() {
		var conf = confirm("Do you want to math X Y ?");
		if(conf) {
			console.log(this.znak(obj));
		} else {
			this.input();
	  	}	
	},
	this.input = function() {
		obj.x = +prompt("Put new X please");
		obj.y = +prompt("Put new Y please");
		obj.znak = prompt("Put new znak please");
		if(obj.znak !== "*" || obj.znak !== "+" || obj.znak !== "-" || obj.znak !== "/" || obj.znak !== "%") {
			do {
				obj.znak = prompt("Put correct znak please");
			} while(!(obj.znak == "*" || obj.znak == "+" || obj.znak == "-" || obj.znak == "/" || obj.znak == "%"));
		}
		console.log(this.znak(obj));
	}		
}

SuperMath.prototype.znak = function(a) {
	if(a.znak == "/") {
		return a.x / a.y;
	} else if(a.znak == "+") {
		return a.x + a.y;
	} else if(a.znak == "-") {
		return a.x - a.y;
	} else if(a.znak == "*") {
		return a.x * a.y;
	} else if(a.znak == "%") {
		return a.x % a.y;
	}
}

var obj = {
	x: 12,
	y: 3,
	znak: "*"
}

p = new SuperMath();
p.check(obj);