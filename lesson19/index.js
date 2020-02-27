let data = [
    { title: 'Куртка', size: 100, img: 'url' , cost: 451}, 
    { title: 'Кепка', size: 200, img: 'url',cost: 200 }, 
    { title: 'Шорты', size: 150, img: 'url', cost: 600 },
    { title: 'Майка', size: 150, img: 'url', cost: 770 },
    { title: 'Шуба', size: 150, img: 'url', cost: 1200 }
];

function ViewController() {};

const goods = document.querySelector('.goods');

ViewController.prototype.render = mass => {
  let items = mass.map(item => `<div class='block'> ${item.title} ${item.cost}</div>`);
  goods.innerHTML  = items.join(' ');
}

ViewController.prototype.namefilter = function() {
	goods.innerHTML += `<input type="text" class='namefilter search' placeholder='Название'>`
};

ViewController.prototype.pricefilter = function() {
	goods.innerHTML += `<input type="text" class='pricefilter search' placeholder='Цена'>`
};

ViewController.prototype.clearfilters = function() {
	goods.innerHTML += `<input type='button' value='Clear Filters' onclick='haha()' class='erase'>`
};

ViewController.prototype.marvel = function(example) {
	goods.innerHTML = '';
	var sorted = example.map(item => `<div class='block'> ${item.title} ${item.cost}</div>`);
	goods.innerHTML = sorted;
	view.namefilter();
	view.pricefilter();
	view.clearfilters();
};

let view = new ViewController();

view.render(data);
view.namefilter();
view.pricefilter();
view.clearfilters();

var userLikes = document.querySelector('.namefilter');

var priceRange = document.querySelector('.pricefilter');

var killFilters = document.querySelector('.erase');

userLikes.onchange = function() {
	
	let example = data.filter(item => item.title == userLikes.value);
	view.marvel(example);
}

priceRange.onchange = function() {

	let example = data.filter(item => item.cost <= priceRange.value);
	view.marvel(example);
}

function haha() {
	view.render(data);
	view.namefilter();
	view.pricefilter();
	view.clearfilters();
}