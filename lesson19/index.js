let data = [
    { title: 'Куртка', size: 100, img: 'url' , cost: 451}, 
    { title: 'Кепка', size: 200, img: 'url',cost: 200 }, 
    { title: 'Шорты', size: 150, img: 'url', cost: 300 },
    { title: 'Майка', size: 150, img: 'url', cost: 300 },
    { title: 'Шуба', size: 150, img: 'url', cost: 1200 }
];

function ViewController() {};

const goods = document.querySelector('.goods');

ViewController.prototype.render = mass => {
  let items = mass.map(item => `<div class="block"> ${item.title} </div>`);
  goods.innerHTML  = items.join(' ');
}

ViewController.prototype.namefilter = function() {
	goods.innerHTML += `<input type="text" class="namefilter search">`
};

ViewController.prototype.pricefilter = function() {
	goods.innerHTML += `<input type="text" class="pricefilter search">`
};





let view = new ViewController();

view.render(data);
view.namefilter();
view.pricefilter();

var userLikes = document.querySelector('.namefilter');

userLikes.oninput = function() {
	
	var example = data.filter(function(name) {
		if(userLikes.value == name.title) {
			ViewController.prototype.tanos = function() {
				goods.innerHTML = `<div class="block"> ${name.title} </div>`
			};
			view.tanos();
			view.namefilter();
			view.pricefilter();
		}
	});
}
