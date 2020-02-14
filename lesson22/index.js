let prime = new Promise(function(resolve, reject) {
	console.log(0);

	setTimeout(function() {
		let id = +prompt("id");
		if(id) {
			resolve(id);
		} else {
			reject(id);
		}
	}, 1000);
});


prime.then(function(id) {
	console.log(1);
	return id;
}, function(id) {
	console.log(2);
	return id;
})
.then(function(id) {
	console.log(3);
	return Promise.reject(id);
}, function(id) {
	console.log(4);
})
.then(function(id) {
	console.log(5);
}, function(id) {
	console.log(6);
	if (id == 0) {
		return id;
	} else {
		return Promise.reject(id);
	}	
})
.then(function(id) {
	console.log(7);
	return id;
}, function(id) {
	console.log(8);
	return id;
})
.then(function(id) {
	console.log(9);
	return Promise.reject(id);
}, function(id) {
	console.log(10);
	return id;
})
.then(function(id) {
	console.log(11);
	return id;
}, function(id) {
	console.log(12);
	return id;
})